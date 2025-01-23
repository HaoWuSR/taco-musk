Page({
    data: {
        // 
        bannerImages: [
            'cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/main_page_top/IMG_4769.JPG',
            "cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/main_page_top/IMG_4770.JPG",
            'cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/main_page_top/IMG_4771.JPG',
            'cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/main_page_top/IMG_4772.JPG',
            'cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/main_page_top/IMG_4773.JPG',
            'cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/main_page_top/IMG_4774.JPG',
            'cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/main_page_top/IMG_4775.JPG',
            "cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/main_page_top/IMG_4776.JPG",
            'cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/main_page_top/IMG_4777.JPG',
            'cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/main_page_top/IMG_4778.JPG',
            'cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/main_page_top/IMG_4779.JPG',
            'cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/main_page_top/IMG_4780.JPG',
            'cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/main_page_top/IMG_4781.JPG',
            'cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/main_page_top/IMG_4782.JPG',
            'cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/main_page_top/IMG_4783.JPG',
            'cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/main_page_top/IMG_4784.JPG',
            'cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/main_page_top/IMG_4785.JPG',
        ],
        currentBannerImage: '',
      cards: [
        {
          id: 1,
          title: '专属生成',
          image: 'cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/cards/cards0.png',
          path: '/pages/user-prompt-1/user-prompt-1'  
        },
        {
          id: 2,
          title: '随机生成',
          image: 'cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/cards/cards1.png',
          path: '/pages/random-prompt-gen/random-prompt-gen'    
        }
      ],
      images: [],
      preImagesURL: [
        "cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/预生成/Chinesedragon_gold_ice mountains_0.jpg",
        "cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/预生成/Chinesedragon_gold_lakeside_0.jpg",
        "cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/预生成/Chinesedragon_red_ice mountains_0.jpg",
        "cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/预生成/Chinesedragon_red_lakeside_0.jpg",
        "cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/预生成/Chinesedragon_silver-white_ice mountains_0.jpg",
        "cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/预生成/Chinesedragon_silver-white_lakeside_0.jpg",
        "cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/预生成/Chinesedragon_sky-blue_ice mountains_0.jpg",
        "cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/预生成/Chinesedragon_sky-blue_lakeside_0.jpg",
        "cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/预生成/snake_gold_ice mountains_0.jpg",
        "cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/预生成/snake_gold_lakeside_0.jpg",
        "cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/预生成/snake_red_ice mountains_0.jpg",
        "cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/预生成/snake_red_lakeside_0.jpg",
        "cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/预生成/snake_silver-white_ice mountains_0.jpg",
        "cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/预生成/snake_silver-white_lakeside_0.jpg",
        "cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/预生成/snake_sky-blue_ice mountains_0.jpg",
        "cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/预生成/snake_sky-blue_lakeside_0.jpg"
      ],
      pageSize: 6,
      currentPage: 1,
      isAllLoaded: false,
      showEnlarged: false,
      enlargedImage: null,
      openid:null,
      isLoggedIn:false,
      isLoading: false,
      isPullingUp: false,
      startY: 0,  // 记录触摸开始的Y坐标
      moveY: 0,   // 记录移动的Y坐标
      isNearBottom: false,  // 新增：是否接近底部
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

// 监听页面滚动
onPageScroll: function(e) {
    wx.createSelectorQuery()
        .selectViewport()
        .scrollOffset()
        .exec((res) => {
            const scrollTop = e.scrollTop
            const windowHeight = wx.getWindowInfo().windowHeight
            const documentHeight = res[0].scrollHeight
            
            // 增加到底部的距离阈值到200px
            const isNearBottom = (documentHeight - scrollTop - windowHeight) < 200
            
            if (isNearBottom !== this.data.isNearBottom) {
                this.setData({ isNearBottom: isNearBottom })
            }
        })
},

// 触摸开始
handleTouchStart: function(e) {
    // 只在接近底部时记录触摸起始位置
    if (this.data.isNearBottom) {
        this.setData({
            startY: e.touches[0].clientY
        })
    } 
    },
    // 触摸移动
    handleTouchMove: function(e) {
        if (this.data.isNearBottom && this.data.startY) {
            const moveY = e.touches[0].clientY
            const diff = this.data.startY - moveY

            // 增加触发提示的距离到80px
            if (diff > 80) {
                this.setData({ 
                    isPullingUp: true,
                    moveY: moveY
                })
            } else {
                this.setData({ 
                    isPullingUp: false,
                    moveY: moveY
                })
            }
        }
    },

    // 触摸结束
    handleTouchEnd: async function() {
        if (this.data.isPullingUp && this.data.isNearBottom) {
            this.setData({ 
                isPullingUp: false,
                startY: 0
            })
            if (this.data.isAllLoaded) {
                // 已加载完全部，执行刷新
                await this.loadImagesFromCloud()
                wx.pageScrollTo({
                    scrollTop: 0,
                    duration: 300
                })
            } else {
                // 还有更多内容，加载更多
                this.loadMore()
            }
        }



    },

    onShow: async function() {

        const randomIndex = Math.floor(Math.random() * this.data.bannerImages.length)
        this.setData({
          currentBannerImage: this.data.bannerImages[randomIndex]
        })

        await this.loadImagesFromCloud()

      },

    // 从云存储获取图片并加载点赞信息
    async loadImagesFromCloud() {
        try {
            this.setData({ images:[], isLoading: true})
            
            // 1. 获取随机文件列表 (限制为18个以提高加载速度)
            const db = wx.cloud.database()
            const { list: files } = await db.collection('showPool_files')
                .aggregate()
                .sample({
                    size: 18
                })
                .end()
                
            if (!files || files.length === 0) {
                throw new Error('No files found')
            }



            
            // 2. 批量获取文件URL和点赞信息
            const fileIds = files.map(file => file.fileID)
            const fileNames = fileIds.map(id => id.split('/').pop())


            // 并行执行这两个操作以节省时间
            const [tempUrlResult, likeResult] = await Promise.all([
                wx.cloud.getTempFileURL({ fileList: fileIds }),
                db.collection('like_dataset')
                    .where({
                        image_id: db.command.in(fileNames)
                    })
                    .get()
            ])


            // 3. 创建点赞信息映射


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
            // 6. 更新状态
            this.setData({
                images: sortedImages.slice(0, this.data.pageSize),
                allImages: sortedImages,
                currentPage: 1,
                isAllLoaded: sortedImages.length <= this.data.pageSize,
                isLoading: false
            })
        } catch (error) {
            console.error('加载图片失败:', error)
            wx.showToast({
                title: '加载失败',
                icon: 'none'
            })
        } finally {

            this.setData({ isLoading: false })
            wx.hideLoading()
        }
    },

    // 处理点赞
    async handleLike(e) {
        if (!this.checkLogin()) return
        
        const { index } = e.currentTarget.dataset
        const originalImage = this.data.images[index]
        // 先更新本地状态
        const newIsLiked = !originalImage.isLiked
        const newImages = [...this.data.images]
        newImages[index] = {
            ...originalImage,
            isLiked: newIsLiked,
            likeCount: newIsLiked ? originalImage.likeCount + 1 : originalImage.likeCount - 1
        }
        
        this.setData({ images: newImages })
        
        try {
            const db = wx.cloud.database()
            const _ = db.command
            
            // 先获取当前记录
            const record = await db.collection('like_dataset').where({
                image_id: originalImage.id
            }).get()
            
            if (record.data.length === 0) {
                // 如果记录不存在，创建新记录
                await db.collection('like_dataset').add({
                    data: {
                        image_id: originalImage.id,
                        count: 1,
                        like_openid: [this.data.openid]
                    }
                })
            } else {
                // 如果记录存在，更新记录
                const currentRecord = record.data[0]
                const currentLikeOpenids = currentRecord.like_openid || []
                
                let newLikeOpenids
                if (newIsLiked) {
                    // 添加点赞
                    newLikeOpenids = [...new Set([...currentLikeOpenids, this.data.openid])]
                } else {
                    // 取消点赞
                    newLikeOpenids = currentLikeOpenids.filter(id => id !== this.data.openid)
                }
                
                // 更新数据库，确保count等于like_openid的长度
                await db.collection('like_dataset').where({
                    image_id: originalImage.id
                }).update({
                    data: {
                        like_openid: newLikeOpenids,
                        count: newLikeOpenids.length
                    }
                })
            }
            
        } catch (error) {
            console.error('点赞操作失败:', error)
            // 完全恢复到原始状态
            newImages[index] = {
                ...originalImage,
                isLiked: originalImage.isLiked,
                likeCount: originalImage.likeCount
            }
            this.setData({ images: newImages })
            
            wx.showToast({
                title: '操作失败',
                icon: 'none'
            })
        }
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

        onShareAppMessage() {
            const promise = new Promise(resolve => {
                setTimeout(() => {
                    resolve({  
                        title: '快来看看我发现的宝藏小程序！',
                        path: '/pages/index/index'
                    })
                }, 500)  
            })
        
            return {
                title: '快来看看我发现的宝藏小程序！',  
                path: '/pages/index/index/',

                promise
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
            
            console.log("this.data.enlargedImage.url: ", this.data.enlargedImage.url)
        
            wx.downloadFile({
              url: this.data.enlargedImage.url,
              success: (res) => {
                if (res.statusCode === 200) {
                  wx.saveImageToPhotosAlbum({
                    filePath: res.tempFilePath,
                    success: () => {
                      wx.hideLoading();
                      wx.showToast({
                        title: '保存成功',
                        icon: 'success'
                      });
                    },
                    fail: () => {
                      wx.hideLoading();
                      wx.showToast({
                        title: '保存失败',
                        icon: 'none'
                      });
                    }
                  });
                }
              },
              fail: () => {
                wx.hideLoading();
                wx.showToast({
                  title: '下载失败',
                  icon: 'none'
                });
              }
            });
          },
          })
        

