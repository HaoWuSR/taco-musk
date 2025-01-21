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

  const wxContext = cloud.getWXContext()
  try {
    const queryParams = {
        "WorkgroupId": "wg-c124491b-149d-4ba5-aa93-664184071341",
        "WorkflowId": "wf-84b249d5-10ba-4cea-a3ee-0db7785a64ee",
        "Filters": [
            {
                //注销 values 可以返回 totalcount，但是这个 totalcount 并不是正在运行的 count。并且要求不传入 promptID 才会返回 totalcount，这样做就拿不到返回的图片，反而需要额外的调取接口。最好还是采用数据库的备用方案。
                "Name": "PromptId",
                // "Values":  [String(event.promptId)] 
            }
        ],
        "Offset": 0,
        "Limit": 20
    };


        // 看文档Status ==2 代表处理完毕，但是实际上是 1 代表处理完毕
        const queryResult = await client.DescribeMuskPrompts(queryParams)
        console.log('查询结果:', queryResult)
        console.log('Status:',queryResult.MuskPromptInfos[0].Status)
        if (queryResult.MuskPromptInfos[0].Status === 3) {
            throw new Error('云函数中图片生成失败')
        }

        return {
            success: true,
            data: queryResult,
            promptId: event.promptId,
            imageUrl: queryResult.MuskPromptInfos[0].OutputResource
        }

} catch (error) {
    console.error("创建任务失败:", error)
    return {
        success: false,
        error: error.message
    }
}
}