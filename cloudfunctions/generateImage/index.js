// 云函数入口文件
const cloud = require('wx-server-sdk')
const tencentcloud = require("tencentcloud-sdk-nodejs-hai")

const HaiClient = tencentcloud.hai.v20230812.Client;

// 实例化一个认证对象，入参需要传入腾讯云账户 SecretId 和 SecretKey，此处还需注意密钥对的保密
// 代码泄露可能会导致 SecretId 和 SecretKey 泄露，并威胁账号下所有资源的安全性。以下代码示例仅供参考，建议采用更安全的方式来使用密钥，请参见：https://cloud.tencent.com/document/product/1278/85305
// 密钥可前往官网控制台 https://console.cloud.tencent.com/cam/capi 进行获取
const clientConfig = {
  credential: {
    secretId: "",
    secretKey: "",
  },
  region: "",
  profile: {
    httpProfile: {
      endpoint: "hai.tencentcloudapi.com",
    },
  },
};

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境
console.log('开始创建客户端')
const client = new HaiClient(clientConfig)
console.log('客户端创建成功')
// 云函数入口函数
exports.main = async (event, context) => {
    console.log('event:',event)
  const wxContext = cloud.getWXContext()
  try {
      const ori_PromptParams = "{\n  \"6\": {\n    \"inputs\": {\n      \"text\": \"REPLACE_TEXT\",\n      \"clip\": [\n        \"11\",\n        0\n      ]\n    },\n    \"class_type\": \"CLIPTextEncode\",\n    \"_meta\": {\n      \"title\": \"CLIP Text Encode (Positive Prompt)\"\n    }\n  },\n  \"8\": {\n    \"inputs\": {\n      \"samples\": [\n        \"13\",\n        0\n      ],\n      \"vae\": [\n        \"10\",\n        0\n      ]\n    },\n    \"class_type\": \"VAEDecode\",\n    \"_meta\": {\n      \"title\": \"VAE解码\"\n    }\n  },\n  \"9\": {\n    \"inputs\": {\n      \"filename_prefix\": \"ComfyUI\",\n      \"images\": [\n        \"8\",\n        0\n      ]\n    },\n    \"class_type\": \"SaveImage\",\n    \"_meta\": {\n      \"title\": \"保存图像\"\n    }\n  },\n  \"10\": {\n    \"inputs\": {\n      \"vae_name\": \"ae.safetensors\"\n    },\n    \"class_type\": \"VAELoader\",\n    \"_meta\": {\n      \"title\": \"加载VAE\"\n    }\n  },\n  \"11\": {\n    \"inputs\": {\n      \"clip_name1\": \"t5xxl_fp8_e4m3fn.safetensors\",\n      \"clip_name2\": \"clip_l.safetensors\",\n      \"type\": \"flux\"\n    },\n    \"class_type\": \"DualCLIPLoader\",\n    \"_meta\": {\n      \"title\": \"双CLIP加载器\"\n    }\n  },\n  \"12\": {\n    \"inputs\": {\n      \"unet_name\": \"flux1-dev.safetensors\",\n      \"weight_dtype\": \"fp8_e4m3fn_fast\"\n    },\n    \"class_type\": \"UNETLoader\",\n    \"_meta\": {\n      \"title\": \"加载扩散模型\"\n    }\n  },\n  \"13\": {\n    \"inputs\": {\n      \"noise\": [\n        \"25\",\n        0\n      ],\n      \"guider\": [\n        \"22\",\n        0\n      ],\n      \"sampler\": [\n        \"16\",\n        0\n      ],\n      \"sigmas\": [\n        \"17\",\n        0\n      ],\n      \"latent_image\": [\n        \"27\",\n        0\n      ]\n    },\n    \"class_type\": \"SamplerCustomAdvanced\",\n    \"_meta\": {\n      \"title\": \"自定义采样器（高级）\"\n    }\n  },\n  \"16\": {\n    \"inputs\": {\n      \"sampler_name\": \"euler\"\n    },\n    \"class_type\": \"KSamplerSelect\",\n    \"_meta\": {\n      \"title\": \"K采样器选择\"\n    }\n  },\n  \"17\": {\n    \"inputs\": {\n      \"scheduler\": \"simple\",\n      \"steps\": 20,\n      \"denoise\": 1,\n      \"model\": [\n        \"30\",\n        0\n      ]\n    },\n    \"class_type\": \"BasicScheduler\",\n    \"_meta\": {\n      \"title\": \"基本调度器\"\n    }\n  },\n  \"22\": {\n    \"inputs\": {\n      \"model\": [\n        \"30\",\n        0\n      ],\n      \"conditioning\": [\n        \"26\",\n        0\n      ]\n    },\n    \"class_type\": \"BasicGuider\",\n    \"_meta\": {\n      \"title\": \"基本引导器\"\n    }\n  },\n  \"25\": {\n    \"inputs\": {\n      \"noise_seed\": random_noise\n    },\n    \"class_type\": \"RandomNoise\",\n    \"_meta\": {\n      \"title\": \"随机噪声\"\n    }\n  },\n  \"26\": {\n    \"inputs\": {\n      \"guidance\": 3.5,\n      \"conditioning\": [\n        \"6\",\n        0\n      ]\n    },\n    \"class_type\": \"FluxGuidance\",\n    \"_meta\": {\n      \"title\": \"Flux引导\"\n    }\n  },\n  \"27\": {\n    \"inputs\": {\n      \"width\": 1024,\n      \"height\": 1024,\n      \"batch_size\": 1\n    },\n    \"class_type\": \"EmptySD3LatentImage\",\n    \"_meta\": {\n      \"title\": \"空SD3潜空间图像\"\n    }\n  },\n  \"30\": {\n    \"inputs\": {\n      \"max_shift\": 1.15,\n      \"base_shift\": 0.5,\n      \"width\": 1024,\n      \"height\": 1024,\n      \"model\": [\n        \"39\",\n        0\n      ]\n    },\n    \"class_type\": \"ModelSamplingFlux\",\n    \"_meta\": {\n      \"title\": \"模型采样Flux\"\n    }\n  },\n  \"38\": {\n    \"inputs\": {\n      \"object_to_patch\": \"diffusion_model\",\n      \"residual_diff_threshold\": 0.12,\n      \"start\": 0,\n      \"end\": 1,\n      \"max_consecutive_cache_hits\": -1,\n      \"model\": [\n        \"12\",\n        0\n      ]\n    },\n    \"class_type\": \"ApplyFBCacheOnModel\",\n    \"_meta\": {\n      \"title\": \"Apply First Block Cache\"\n    }\n  },\n  \"39\": {\n    \"inputs\": {\n      \"is_patcher\": true,\n      \"object_to_patch\": \"diffusion_model\",\n      \"compiler\": \"torch.compile\",\n      \"fullgraph\": false,\n      \"dynamic\": false,\n      \"mode\": \"\",\n      \"options\": \"\",\n      \"disable\": false,\n      \"backend\": \"inductor\",\n      \"model\": [\n        \"38\",\n        0\n      ]\n    },\n    \"class_type\": \"EnhancedCompileModel\",\n    \"_meta\": {\n      \"title\": \"Compile Model+\"\n    }\n  }\n}"
    const new_Params_text = ori_PromptParams.replace('REPLACE_TEXT', event.promptText)
    const new_Params = new_Params_text.replace('random_noise', event.seed)
    console.log('new_Params',new_Params)
    const params = {
    "WorkgroupId": "wg-c124491b-149d-4ba5-aa93-664184071341",
    "WorkflowId": "wf-84b249d5-10ba-4cea-a3ee-0db7785a64ee",
    "PromptParams": new_Params
    };
    
    const result = await client.CreateMuskPrompt(params)
    console.log('创建任务结果:', result)
    const promptId = result.PromptId
    console.log('获取到的 PromptId:', promptId)
    if (!promptId) {
        throw new Error('未获取到 PromptId')
    }
    return {
        success: true,
        promptId: promptId
    }
} catch (error) {
    console.error("创建任务失败:", error)
    return {
        success: false,
        error: error.message
    }
}
}