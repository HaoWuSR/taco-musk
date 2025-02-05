import {prompts} from '../user-prompt-gen/prompt.js'

Page({

    data: {
        selectedStyleName: '',
        isLoading: true,
        result: '', 
        errorMessage: '',
        showEnlarged: false,
        prompts:{},

        stages: [ 
            '计算资源排队中...',
            '调度 Musk 计算资源中...',
            'Musk 绘画中...',
            'Musk 绘画完毕!'
        ]
      },
      
      getPromptByJson:function() {
        const choiceKey = Array(5).fill(0).map(() => 'ABCD'[Math.floor(Math.random() * 4)]).join('')

        const prompt = prompts[choiceKey]
        const temp = 'AAAAA'
        if (!prompt) {
            console.error('未找到对应的 prompts:', choiceKey)
            return [temp,choiceKey]
        }
        return [prompt,choiceKey]
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({ isLoading: true })
        const app = getApp()
        const [promptText, choiceKey] = this.getPromptByJson()
        this.generateImage_Post(promptText,choiceKey)
    },

    handleRegenerate: function() {
        // 1：重新加载当前页面
        wx.reLaunch({
            url: '/pages/random-prompt-gen/random-prompt-gen',
            success: () => {
                console.log('页面重新加载成功')
            },
            fail: (error) => {
                console.error('页面重新加载失败:', error)
                wx.showToast({
                    title: '重新生成失败',
                    icon: 'none'
                })
            }
        })
    },
    sleep: function(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },
    async generateImage_Post(promptText,choiceKey) {
        const getCosImage = (choiceKey) => {
            //cos 上更新后注意 update
            //10459
            const minNum = 10000;
            const maxNum = 10459;
            const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
            const cos_images_url= `https://taco-1251783334.cos.ap-shanghai.myqcloud.com/taco_musk/data/musk_results/musk_${choiceKey}_${randomNum}_00001_.png` ;
       
            return cos_images_url
        }
        // 模拟正常11s 生成结果
        const simulateNormalGeneration = async () => {
            const NORMAL_GENERATION_TIME = 11000  

            await new Promise(resolve => setTimeout(resolve, NORMAL_GENERATION_TIME))
        }
    
        const downloadImage = async (url) => {
            try {
                if (!url) {
                    throw new Error('URL 不能为空')
                }
        

                
                return new Promise((resolve, reject) => {
                    wx.downloadFile({
                        url: url,
                        success: function(res) {
                            if (res.statusCode === 200) {
                           
                                resolve(res.tempFilePath)
                            } else {
                                reject(new Error('下载失败，状态码: ' + res.statusCode))
                            }
                        },
                        fail: function(error) {
                            console.error('下载失败:', error)
                            reject(error)
                        }
                    })
                })
            } catch (error) {
                console.error('下载过程出错:', error)
                throw error
            }
        }


        const getDelay = () => {
            const MIN_DELAY = 500
            const MAX_DELAY = 1500
            return Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY + 1)) + MIN_DELAY
        }
        
        Promise.resolve()
        .then(() => {
            this.setData({ 
                isLoading: true,
                currentStage: 0
            })
            const delay = getDelay()
            return new Promise(resolve => setTimeout(resolve, delay))  
        })
        .then(() => {
            this.setData({ currentStage: 1 })
            const delay = getDelay()
            return new Promise(resolve => setTimeout(resolve, delay))  
        })
        .then(() => {
            this.setData({ currentStage: 2 })
        })
        //优化下面结构，将 promptID, url, download逻辑更清楚呈现，便于容错机制
 


            // 1. Get openID
            const { result: { openid } } = await wx.cloud.callFunction({
                name: 'getOpenId'
            })
            console.log('当前用户 openid:', openid)

            // 2. Init DataBase and GenerateCount 
            const db = wx.cloud.database()
            let userRecord = await db.collection('users').where({
                _openid: openid
            }).get()
            let generateCount = 0
            if (userRecord.data.length === 0) {

                try {
                    await db.collection('users').add({
                        data: {
                            generateCount: 0,
                            createdAt: db.serverDate(),
                            lastUpdatedAt: db.serverDate()
                        }
                    })
                } catch (error) {
                    console.error('创建用户记录失败:', error)
                    throw new Error('创建用户记录失败')
                }
            } else {
                generateCount = userRecord.data[0].generateCount || 0
            }
            // 3. Init Bucket Info 
            const total_bucket = 200
            const bucket_size = 10
            const bucketIndex = Math.floor(generateCount % total_bucket)

            const minSeed = bucketIndex * bucket_size
            const maxSeed = minSeed + (bucket_size - 1)
            const seed = Math.floor(Math.random() * (maxSeed - minSeed + 1)) + minSeed

            // 4. Get PromptID by CloudFunction
            //musk or cos 
            let promptId
            let queryCounting
            let statusZeroCount

            queryCounting = await wx.cloud.callFunction({
                name: 'DescribeMuskPromptsCounting',
                data: {
                    promptId: promptId
                }
            })
            
            const infos = queryCounting?.result?.data?.MuskPromptInfos || [];
            statusZeroCount = infos.filter(info => (info && typeof info === 'object' && info.Status === 0)).length;

            if (statusZeroCount >= 10){
                console.log(`当前处理的请求数为${statusZeroCount},系统繁忙，使用备用图片`)


            } else {
                console.log(`当前处理的请求数为${statusZeroCount},系统空闲，调用 musk 平台`)
                
            try{
                const result = await wx.cloud.callFunction({
                name: 'generateImage',  
                data: {
                    promptText: promptText,
                    seed: seed
                }
                })
                promptId = result.result.promptId

            } catch(error){
                console.error('获取promptId失败，使用备用图片')
                await this.updateMuskCosStats('cos');
                await simulateNormalGeneration()  
                const cosUrl = getCosImage(choiceKey)
                const tempFilePath = await downloadImage(cosUrl)
                // save 到云储存
                const timestamp = Date.now();
                const cloudPath = `showPool/${choiceKey}/${openid}_${choiceKey}_${timestamp}.png`;
                const uploadResult = await wx.cloud.uploadFile({
                    cloudPath: cloudPath,
                    filePath: tempFilePath
                });
        
                
                this.setData({
                    imageUrl: tempFilePath,
                    isLoading: false,
                    currentStage: 3
                })
                await db.collection('users').where({
                    _openid: openid
                }).update({
                    data: {
                        generateCount: db.command.inc(1),
                        lastUpdatedAt: db.serverDate()
                    }
                })

                await db.collection('showPool_files').add({
                    data: {
                        fileID: uploadResult.fileID,
                        createTime: db.serverDate(),
                        fileName: cloudPath.split('/').pop()
                    }
                })
    
                // 创建对应的点赞记录
                await db.collection('like_dataset').add({
                    data: {
                        image_id: cloudPath.split('/').pop(),
                        count: 0,
                        like_openid: []
                    }
                })

                const updatedUserRecord = await db.collection('users').where({
                    _openid: openid
                }).get()
                const newGenerateCount = updatedUserRecord.data[0].generateCount
                
                return
            }
        }
            // 5. Get Url by CloudFunction
            let MuskUrl
            let retryCount = 0
                try {
                    const maxRetries = 9
                   
                    while (retryCount < maxRetries) {
                        console.log('轮询次数:', retryCount)
                        const queryResult = await wx.cloud.callFunction({
                            name: 'DescribeMuskPrompts',
                            data: {
                                promptId: promptId
                            }
                        })
                        
                        const taskStatus = queryResult.result.data.MuskPromptInfos[0].Status
                        
    
                    if (taskStatus === 1) {   
                        //musk 返回成功，获得 url ，更新 count
                        MuskUrl = queryResult.result.imageUrl[0]
                        await this.updateMuskCosStats('musk');
                        break 
                    } else if (taskStatus === 3) {  // 失败
                        throw new Error('生成失败')
                    }
    
                    await new Promise(resolve => setTimeout(resolve, 1000))
                    retryCount++
                    
                    if (retryCount >= maxRetries) {
                        throw new Error('生成超时')
                    }
                } 
            } catch (error) {
                console.error('获取图片URL失败，使用备用图片')
                await this.updateMuskCosStats('cos');
                const remainingTime = 11000 - (retryCount * 1000)  
                if (remainingTime > 0) {
                    await new Promise(resolve => setTimeout(resolve, remainingTime))
                }
                const cosUrl = getCosImage(choiceKey)
                const tempFilePath = await downloadImage(cosUrl)
                // save 到云储存
                const timestamp = Date.now();
                const cloudPath = `showPool/${choiceKey}/${openid}_${choiceKey}_${timestamp}.png`;
                const uploadResult = await wx.cloud.uploadFile({
                    cloudPath: cloudPath,
                    filePath: tempFilePath
                });
        
                
                this.setData({
                    imageUrl: tempFilePath,
                    isLoading: false,
                    currentStage: 3
                })
                await db.collection('users').where({
                    _openid: openid
                }).update({
                    data: {
                        generateCount: db.command.inc(1),
                        lastUpdatedAt: db.serverDate()
                    }
                })

                await db.collection('showPool_files').add({
                    data: {
                        fileID: uploadResult.fileID,
                        createTime: db.serverDate(),
                        fileName: cloudPath.split('/').pop()
                    }
                })
    
                // 创建对应的点赞记录
                await db.collection('like_dataset').add({
                    data: {
                        image_id: cloudPath.split('/').pop(),
                        count: 0,
                        like_openid: []
                    }
                })

                const updatedUserRecord = await db.collection('users').where({
                    _openid: openid
                }).get()
                const newGenerateCount = updatedUserRecord.data[0].generateCount
                
                return
            }
        // 6. Get Image by Url 
        try {
            
            
            const tempFilePath = await downloadImage(MuskUrl)
            // save 到云储存
            const timestamp = Date.now();
            const cloudPath = `showPool/${choiceKey}/${openid}_${choiceKey}_${timestamp}.png`;
            const uploadResult = await wx.cloud.uploadFile({
                cloudPath: cloudPath,
                filePath: tempFilePath
            });
    
            
            this.setData({
                imageUrl: tempFilePath,
                isLoading: false,
                currentStage: 3
                
            })
            await db.collection('users').where({
                _openid: openid
            }).update({
                data: {
                    generateCount: db.command.inc(1),
                    lastUpdatedAt: db.serverDate()
                }
            })
        
            await db.collection('showPool_files').add({
                data: {
                    fileID: uploadResult.fileID,
                    createTime: db.serverDate(),
                    fileName: cloudPath.split('/').pop()
                }
            })

            // 创建对应的点赞记录
            await db.collection('like_dataset').add({
                data: {
                    image_id: cloudPath.split('/').pop(),
                    count: 0,
                    like_openid: []
                }
            })

            const updatedUserRecord = await db.collection('users').where({
                _openid: openid
            }).get()
            const newGenerateCount = updatedUserRecord.data[0].generateCount
            
        } catch (error) {
            console.error('使用 Url下载图片失败，使用备用图片')
            const remainingTime = 11000 - (retryCount * 1000)  // 计算剩余等待时间
            await this.updateMuskCosStats('cos');
            if (remainingTime > 0) {
                await new Promise(resolve => setTimeout(resolve, remainingTime))
            }
            const cosUrl = getCosImage(choiceKey)
            const tempFilePath = await downloadImage(cosUrl)
            // save 到云储存
            const timestamp = Date.now();
            const cloudPath = `showPool/${choiceKey}/${openid}_${choiceKey}_${timestamp}.png`;
            const uploadResult = await wx.cloud.uploadFile({
                cloudPath: cloudPath,
                filePath: tempFilePath
            });
    
            

            this.setData({
                imageUrl: tempFilePath,
                isLoading: false,
                currentStage: 3
            })
            await db.collection('users').where({
                _openid: openid
            }).update({
                data: {
                    generateCount: db.command.inc(1),
                    lastUpdatedAt: db.serverDate()
                }
            })

            await db.collection('showPool_files').add({
                data: {
                    fileID: uploadResult.fileID,
                    createTime: db.serverDate(),
                    fileName: cloudPath.split('/').pop()
                }
            })

            // 创建对应的点赞记录
            await db.collection('like_dataset').add({
                data: {
                    image_id: cloudPath.split('/').pop(),
                    count: 0,
                    like_openid: []
                }
            })

            const updatedUserRecord = await db.collection('users').where({
                _openid: openid
            }).get()
            const newGenerateCount = updatedUserRecord.data[0].generateCount
            
        }
    
    },
    handleSaveImage: function() {
        if (!this.data.imageUrl) {
            wx.showToast({
                title: '没有可保存的图片',
                icon: 'none'
            })
            return
        }

        // 保存图片到相册
        wx.saveImageToPhotosAlbum({
            filePath: this.data.imageUrl,
            success: () => {
                wx.showToast({
                    title: '保存成功',
                    icon: 'success'
                })
            },
            fail: (err) => {
                console.error('保存失败:', err)
                // 如果是权限问题，提示用户授权
                if (err.errMsg.indexOf('auth deny') >= 0) {
                    wx.showModal({
                        title: '提示',
                        content: '需要您授权保存到相册',
                        success: (res) => {
                            if (res.confirm) {
                                wx.openSetting({
                                    success: (settingRes) => {
                                       
                                    }
                                })
                            }
                        }
                    })
                } else {
                    wx.showToast({
                        title: '保存失败',
                        icon: 'none'
                    })
                }
            }
        })
    },
    
    handleImageClick: function() {
        this.setData({
            showEnlarged: true
        })
    },
    onShareAppMessage() {
        const promise = new Promise(resolve => {
            
            setTimeout(() => {
                resolve({  
                    title: '快来看看我在AI新春瑞兽生成的吉祥物！',
                    path: '/pages/index/index',
                    imageUrl: this.data.imageUrl
                })
            }, 500)  
        })
    
        return {
            title: '快来看看我在AI新春瑞兽生成的吉祥物！',  
            path: '/pages/index/index/',
            imageUrl: this.data.imageUrl,
            promise
        }
    },
    // 处理遮罩层点击（关闭放大图片）
    handleMaskTap: function() {
        this.setData({
            showEnlarged: false,
            enlargedImage: null
        })
    },

    // 防止点击图片时触发遮罩层的点击事件
    preventBubble: function(e) {
        if (e && typeof e.stop === 'function') {
            e.stop()  // 这里的 e 是微信小程序的自定义事件对象
        }  else if (e && typeof e.stopPropagation === 'function') {
            e.stopPropagation()
        }
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },
async updateMuskCosStats(type) {
    try {
        const db = wx.cloud.database();
        const _ = db.command;
        const today = new Date();
        today.setHours(0, 0, 0, 0);  // 设置为当天0点

        // 查找今天的记录
        const result = await db.collection('MuskCosCounting').where({
            date: today
        }).get();

        if (result.data.length > 0) {
            // 更新今天的计数
            await db.collection('MuskCosCounting').doc(result.data[0]._id).update({
                data: {
                    [type === 'cos' ? 'cosCount' : 'muskCount']: _.inc(1)
                }
            });
        } else {
            // 创建今天的新记录
            await db.collection('MuskCosCounting').add({
                data: {
                    date: today,
                    cosCount: type === 'cos' ? 1 : 0,
                    muskCount: type === 'musk' ? 1 : 0
                }
            });
        }
    } catch (error) {
        console.error('更新统计数据失败:', error);
    }
},

handleImageLongPress() {
    const that = this;
    wx.showActionSheet({
      itemList: ['保存图片'],
      success(res) {
        if (res.tapIndex === 0) {
          wx.getSetting({
            success(res) {
              if (!res.authSetting['scope.writePhotosAlbum']) {
                wx.authorize({
                  scope: 'scope.writePhotosAlbum',
                  success() {
                    that.saveImage();
                  },
                  fail() {
                    wx.showModal({
                      title: '提示',
                      content: '需要您授权保存图片到相册',
                      success(res) {
                        if (res.confirm) {
                          wx.openSetting();
                        }
                      }
                    });
                  }
                });
              } else {
                that.saveImage();
              }
            }
          });
        }
      }
    });
  },

  saveImage() {
    wx.showLoading({
      title: '保存中...',
    });

    this.handleSaveImage()
  },


})