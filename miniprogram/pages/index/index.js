Page({
    data: {
        bannerImages: [
            'cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/main_page_top/IMG_4769.JPG',
            "cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/main_page_top/IMG_4770.JPG",
            'cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/main_page_top/IMG_4771.JPG',
            'cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/main_page_top/IMG_4772.JPG',
            'cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/main_page_top/IMG_4773.JPG',
            'cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/main_page_top/IMG_4774.JPG',
            'cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/main_page_top/IMG_4775.JPG',
            "cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/main_page_top/IMG_4776.JPG",
            'cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/main_page_top/IMG_4777.JPG',
            'cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/main_page_top/IMG_4778.JPG',
            'cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/main_page_top/IMG_4779.JPG',
            'cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/main_page_top/IMG_4780.JPG',
            'cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/main_page_top/IMG_4781.JPG',
            'cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/main_page_top/IMG_4782.JPG',
            'cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/main_page_top/IMG_4783.JPG',
            'cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/main_page_top/IMG_4784.JPG',
            'cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/main_page_top/IMG_4785.JPG',
        ],
        currentBannerImage: '',
      cards: [
        {
          id: 1,
          title: '专属生成',
          image: 'cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/cards/cards0.png',
          path: '/pages/user-prompt-1/user-prompt-1'  
        },
        {
          id: 2,
          title: '随机生成',
          image: 'cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/cards/cards1.png',
          path: '/pages/random-prompt-gen/random-prompt-gen'    
        }
      ],
      images: [],
      preImagesURL: [
        "cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/预生成/Chinesedragon_gold_ice mountains_0.jpg",
        "cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/预生成/Chinesedragon_gold_lakeside_0.jpg",
        "cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/预生成/Chinesedragon_red_ice mountains_0.jpg",
        "cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/预生成/Chinesedragon_red_lakeside_0.jpg",
        "cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/预生成/Chinesedragon_silver-white_ice mountains_0.jpg",
        "cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/预生成/Chinesedragon_silver-white_lakeside_0.jpg",
        "cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/预生成/Chinesedragon_sky-blue_ice mountains_0.jpg",
        "cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/预生成/Chinesedragon_sky-blue_lakeside_0.jpg",
        "cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/预生成/snake_gold_ice mountains_0.jpg",
        "cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/预生成/snake_gold_lakeside_0.jpg",
        "cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/预生成/snake_red_ice mountains_0.jpg",
        "cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/预生成/snake_red_lakeside_0.jpg",
        "cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/预生成/snake_silver-white_ice mountains_0.jpg",
        "cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/预生成/snake_silver-white_lakeside_0.jpg",
        "cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/预生成/snake_sky-blue_ice mountains_0.jpg",
        "cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/预生成/snake_sky-blue_lakeside_0.jpg"
      ],
      pageSize: 6,
      currentPage: 1,
      isAllLoaded: false,
      showEnlarged: false,
      enlargedImage: null,
      openid:null,
      isLoggedIn:false,
      isLoading: false,
    },
  
    handleCardTap: function(e) {
      const { path } = e.currentTarget.dataset.item
      wx.navigateTo({
        url: path,
        fail: (err) => {
          console.error('页面跳转失败：', err)
          wx.showToast({
            title: '页面跳转失败',
            icon: 'none'
          })
        }
      })
    
    },
    onLoad: async function() {
        await this.autoLogin()
        const randomIndex = Math.floor(Math.random() * this.data.bannerImages.length)
        this.setData({
        currentBannerImage: this.data.bannerImages[randomIndex]
        })
        
        //   this.loadImages()
        // 从云存储获取图片
        console.time('loadImagesFromCloud');
        await this.loadImagesFromCloud()
        console.timeEnd('loadImagesFromCloud');
    },
     
   // 自动登录
   autoLogin: async function() {
    // Get openID
    const { result: { openid } } = await wx.cloud.callFunction({
      name: 'getOpenId'
    })
    console.log('当前用户 openid:', openid)
    return new Promise((resolve, reject) => {
      wx.login({
        success: (res) => {
          if (res.code) {
            console.log('登录成功，code:', res.code)

            this.setData({
              isLoggedIn: true,
              openid: openid
            })

            // 存储到全局数据
            getApp().globalData.isLoggedIn = true
            getApp().globalData.openid = this.data.openid

            resolve()
          } else {
            console.error('登录失败:', res.errMsg)
            reject(new Error('登录失败'))
          }
        },
        fail: (error) => {
          console.error('wx.login 调用失败:', error)
          reject(error)
        }
      })
    })
  },

    // 检查登录状态
    checkLogin: function() {
        if (!this.data.isLoggedIn) {
        wx.showToast({
            title: '请先登录',
            icon: 'none'
        })
        return false
        }
        return true
    },
    loadImages: function() {
      const totalImages = 16;
      const newImages = [];
      const startIndex = (this.data.currentPage - 1) * this.data.pageSize;
      const endIndex = Math.min(startIndex + this.data.pageSize, totalImages);

      for (let i = startIndex; i < endIndex; i++) {
        newImages.push({
          id: i,
          url: this.data.preImagesURL[i],
          isEnlarged: false
        });
      }

      this.setData({
        images: [...this.data.images, ...newImages],
        isAllLoaded: endIndex >= totalImages
      });
    },

    loadMore: function() {
        if (!this.data.isAllLoaded && !this.data.isLoading) {
            const startIndex = this.data.currentPage * this.data.pageSize
            const newImages = this.data.allImages.slice(
                startIndex,
                startIndex + this.data.pageSize
            )
            
            this.setData({
                images: [...this.data.images, ...newImages],
                currentPage: this.data.currentPage + 1,
                isAllLoaded: startIndex + this.data.pageSize >= this.data.allImages.length
            })
      }
    },

    handleImageTap: function(e) {
      const index = e.currentTarget.dataset.index;
      this.setData({
        showEnlarged: true,
        enlargedImage: this.data.images[index]
      });
    },

    handleMaskTap: function() {
      this.setData({
        showEnlarged: false,
        enlargedImage: null
      });
    },

    preventBubble: function(e) {
        if (e && e.stop) {
            e.stop()
        }
    },

    onReachBottom: function() {
      this.loadMore();    
    },
    //TODO 
    onUnload: async function() {
        console.log('Onunload:')

    },

    onShow: async function() {

        const randomIndex = Math.floor(Math.random() * this.data.bannerImages.length)
        this.setData({
          currentBannerImage: this.data.bannerImages[randomIndex]
        })
        console.log()
        await this.loadImagesFromCloud()

      },

    // 从云存储获取图片并加载点赞信息
    async loadImagesFromCloud() {
        const timePoints = {
            start: Date.now(),
            getFiles: 0,
            getUrlsAndLikes: 0,
            processData: 0,
            end: 0
        };
        try {
            //TODO 
            this.setData({ images:[], isLoading: true })
            
            // 1. 获取随机文件列表 (限制为20个以提高加载速度)
            console.time('获取文件列表');
            timePoints.getFilesStart = Date.now();
            const db = wx.cloud.database()
            const { list: files } = await db.collection('showPool_files')
                .aggregate()
                .sample({
                    size: 20
                })
                .end()
                
            if (!files || files.length === 0) {
                throw new Error('No files found')
            }
            timePoints.getFiles = Date.now();
            console.timeEnd('获取文件列表');
            console.log(`获取文件列表耗时: ${timePoints.getFiles - timePoints.getFilesStart}ms`);


            
            // 2. 批量获取文件URL和点赞信息
            const fileIds = files.map(file => file.fileID)
            const fileNames = fileIds.map(id => id.split('/').pop())
            console.time('获取URL和点赞信息');
            timePoints.getUrlsAndLikesStart = Date.now();

            // 并行执行这两个操作以节省时间
            const [tempUrlResult, likeResult] = await Promise.all([
                wx.cloud.getTempFileURL({ fileList: fileIds }),
                db.collection('like_dataset')
                    .where({
                        image_id: db.command.in(fileNames)
                    })
                    .get()
            ])
            timePoints.getUrlsAndLikes = Date.now();
            console.timeEnd('获取URL和点赞信息');
            console.log(`获取URL和点赞信息耗时: ${timePoints.getUrlsAndLikes - timePoints.getUrlsAndLikesStart}ms`);

            // 3. 创建点赞信息映射
            console.time('处理点赞数据');
            timePoints.processDataStart = Date.now();

            const likeMap = new Map(
                likeResult.data.map(item => [item.image_id, item])
            )

            // 4. 组装最终数据
            const processedImages = tempUrlResult.fileList.map(file => {
                const fileName = file.fileID.split('/').pop()
                const likeInfo = likeMap.get(fileName) || { count: 0, like_openid: [] }
                
                return {
                    id: fileName,
                    url: file.tempFileURL,
                    likeCount: likeInfo.count || 0,
                    isLiked: likeInfo.like_openid?.includes(this.data.openid) || false
                }
            })

            // 5. 排序：用户点赞的优先，然后按点赞数排序
            const sortedImages = processedImages.sort((a, b) => {
                if (a.isLiked !== b.isLiked) return b.isLiked ? 1 : -1
                return b.likeCount - a.likeCount
            })
        timePoints.processData = Date.now();
        console.timeEnd('处理数据');
        console.log(`处理数据耗时: ${timePoints.processData - timePoints.processDataStart}ms`);


        console.time('更新状态');
        timePoints.updateStateStart = Date.now();

            // 6. 更新状态
            this.setData({
                images: sortedImages.slice(0, this.data.pageSize),
                allImages: sortedImages,
                currentPage: 1,
                isAllLoaded: sortedImages.length <= this.data.pageSize,
                isLoading: false
            })
        timePoints.updateState = Date.now();
        console.timeEnd('更新状态');
        console.log(`更新状态耗时: ${timePoints.updateState - timePoints.updateStateStart}ms`);

        } catch (error) {
            console.error('加载图片失败:', error)
            wx.showToast({
                title: '加载失败',
                icon: 'none'
            })
        } finally {
            timePoints.end = Date.now();
        
            // 输出完整的性能报告
            console.log('性能报告:', {
                总耗时: `${timePoints.end - timePoints.start}ms`,
                获取文件列表: `${timePoints.getFiles - timePoints.getFilesStart}ms`,
                获取URL和点赞信息: `${timePoints.getUrlsAndLikes - timePoints.getUrlsAndLikesStart}ms`,
                处理数据: `${timePoints.processData - timePoints.processDataStart}ms`,
                更新状态: `${timePoints.updateState - timePoints.updateStateStart}ms`
            });
            this.setData({ isLoading: false })
            wx.hideLoading()
        }
    },

    // 获取 showPool 目录下的文件
    async getShowPoolFiles() {
        try {
            const db = wx.cloud.database()
            const _ = db.command
            const MAX_TOTAL = 40 // 最大总数
            const BATCH_SIZE = 20 // 每批次获取数量
            const BATCH_COUNT = Math.ceil(MAX_TOTAL / BATCH_SIZE) // 需要获取的批次数

            // 1. 分批获取随机文件
            let allRandomFiles = []
            for (let i = 0; i < BATCH_COUNT && allRandomFiles.length < MAX_TOTAL; i++) {
                const { list: batchFiles } = await db.collection('showPool_files')
                    .aggregate()
                    .sample({
                        size: BATCH_SIZE
                    })
                    .end()

                if (batchFiles && batchFiles.length > 0) {
                    // 确保不重复添加相同的文件
                    const newFiles = batchFiles.filter(newFile => 
                        !allRandomFiles.some(existingFile => 
                            existingFile.fileID === newFile.fileID
                        )
                    )
                    allRandomFiles = [...allRandomFiles, ...newFiles]
                }

                console.log(`Batch ${i + 1} files: ${batchFiles?.length || 0}, Total unique files: ${allRandomFiles.length}`)
            }

            // 如果获取的文件数量超过了MAX_TOTAL，只保留MAX_TOTAL个
            if (allRandomFiles.length > MAX_TOTAL) {
                allRandomFiles = allRandomFiles.slice(0, MAX_TOTAL)
            }

            console.log('Total random files selected:', allRandomFiles.length)

            if (allRandomFiles.length === 0) {
                throw new Error('No files found')
            }

            // 2. 获取这些文件的点赞信息
            const fileIds = allRandomFiles.map(file => file.fileID.split('/').pop())
            const likeInfo = await db.collection('like_dataset')
                .where({
                    image_id: _.in(fileIds)
                })
                .get()

            // 3. 构建点赞信息Map
            const likeMap = new Map(likeInfo.data.map(item => [
                item.image_id,
                {
                    count: item.count || 0,
                    likedByUser: (item.like_openid || []).includes(this.data.openid)
                }
            ]))

            // 4. 为文件添加权重信息
            const weightedFiles = allRandomFiles.map(file => {
                const fileName = file.fileID.split('/').pop()
                const likeData = likeMap.get(fileName) || { count: 0, likedByUser: false }
                return {
                    fileID: file.fileID,
                    weight: Math.log(likeData.count + 1) + 1,
                    isLiked: likeData.likedByUser
                }
            })

            // 5. 分离用户点赞的文件和其他文件
            const likedFiles = weightedFiles.filter(file => file.isLiked)
            const otherFiles = weightedFiles.filter(file => !file.isLiked)

            // 6. 从其他文件中加权随机选择
            const remainingCount = MAX_TOTAL - likedFiles.length
            const selectedOtherFiles = remainingCount > 0 
                ? this.weightedRandomSelect(otherFiles, remainingCount)
                : []

            // 7. 合并并返回结果
            return [...likedFiles, ...selectedOtherFiles]

        } catch (error) {
            console.error('获取文件列表失败:', error)
            console.log('错误详情:', error.stack)
            // 发生错误时返回预生成的图片
            return this.data.preImagesURL.map(url => ({
                fileID: url
            }))
        }
    },

    // 加权随机选择函数
    weightedRandomSelect(items, count) {
        const selected = new Set()
        const result = []
        
        // 计算总权重
        const totalWeight = items.reduce((sum, item) => sum + item.weight, 0)
        
        while (result.length < count && result.length < items.length) {
            let random = Math.random() * totalWeight
            let sum = 0
            
            for (let i = 0; i < items.length; i++) {
                if (selected.has(i)) continue
                
                sum += items[i].weight
                if (random <= sum) {
                    selected.add(i)
                    result.push({
                        fileID: items[i].fileID,
                        isLiked: false
                    })
                    break
                }
            }
            
            // 如果没有选中任何项（可能由于舍入误差），随机选择一个未选中的项
            if (result.length < selected.size) {
                const remaining = items.filter((_, i) => !selected.has(i))
                if (remaining.length > 0) {
                    const randomItem = remaining[Math.floor(Math.random() * remaining.length)]
                    result.push({
                        fileID: randomItem.fileID,
                        isLiked: false
                    })
                }
            }
        }
        
        return result
    },
    // 启用下拉刷新
    onPullDownRefresh: async function() {
        try {
            await this.loadImagesFromCloud()
        } finally {
            // 停止下拉刷新动画
            wx.stopPullDownRefresh()
        }
    },
    // 处理点赞
    async handleLike(e) {
        if (!this.checkLogin()) return
        
        const { index } = e.currentTarget.dataset
        const image = this.data.images[index]
        
        try {
            const db = wx.cloud.database()
            const _ = db.command
            
            // 更新点赞状态
            const newIsLiked = !image.isLiked
            const updateData = {
                count: newIsLiked ? _.inc(1) : _.inc(-1)
            }
            
            if (newIsLiked) {
                updateData.like_openid = _.addToSet(this.data.openid)
            } else {
                updateData.like_openid = _.pull(this.data.openid)
            }
            
            // 更新数据库
            await db.collection('like_dataset').where({
                image_id: image.id
            }).update({
                data: updateData
            })
            
            // 如果记录不存在，创建新记录
            const result = await db.collection('like_dataset').where({
                image_id: image.id
            }).get()
            
            if (result.data.length === 0) {
                await db.collection('like_dataset').add({
                    data: {
                        image_id: image.id,
                        count: 1,
                        like_openid: [this.data.openid]
                    }
                })
            }
            
            // 更新本地状态
            const newImages = [...this.data.images]
            newImages[index] = {
                ...image,
                isLiked: newIsLiked,
                likeCount: newIsLiked ? image.likeCount + 1 : image.likeCount - 1
            }
            
            this.setData({ images: newImages })
            
        } catch (error) {
            console.error('点赞操作失败:', error)
            wx.showToast({
                title: '操作失败',
                icon: 'none'
            })
        }
    },
  })
