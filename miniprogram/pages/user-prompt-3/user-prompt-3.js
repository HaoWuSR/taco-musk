Page({
    // 页面的初始数据
    data: {
      selectedOption: '',
      currentSwiperIndex: 0, // 默认选中第一个选项（居中显示）
      options: [
        {
          id: 1,
          value: 'A',
          text: 'A. 宁静湖畔',
          image: 'cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/选项3/lakeside0.jpg'
        },
        {
          id: 2,
          value: 'B',
          text: 'B. 茂密树林',
          image: 'cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/选项3/forest0.jpg'
        },
        {
          id: 3,
          value: 'C',
          text: 'C. 皑皑雪山',
          image: 'cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/选项3/snowy mountain0.jpg'
        },
        {
          id: 4,
          value: 'D',
          text: 'D. 温暖室内',
          image: 'cloud://musk-clouddev-5g028di82f9a906c.6d75-musk-clouddev-5g028di82f9a906c-1336131283/小程序素材/选项3/indoors0.jpg'
        }
      ],
      pageIndex: 3
    },
  
    // 处理选项选择
    handleOptionSelect: function(e) {
        const option = e.currentTarget.dataset.option;
        const index = e.currentTarget.dataset.index;
        const app = getApp();
        
        if (!app.globalData.selectedStyles) {
          app.globalData.selectedStyles = [];
        }
  
        this.setData({
          selectedOption: option,
          currentSwiperIndex: index
        });
    },
  
    handleSwiperChange: function(e) {
      const { current } = e.detail;
      const option = this.data.options[current].value;
      
      this.setData({
        selectedOption: option,
        currentSwiperIndex: current
      });
    },
  
    // // 处理确认选择
    // handleConfirm: function() {
    //   if (!this.data.selectedOption) {
    //     wx.showToast({
    //       title: '请先选择一个风格',
    //       icon: 'none',
    //       duration: 2000 // 等待 2s 时间
    //     })
    //     return
    //   }
    //   const app = getApp()
        
    // // 确保全局数组已初始化
    // // if (!app.globalData.selectedStyles) {
    // //     app.globalData.selectedStyles = []
    // // }
    // app.globalData.selectedStyles = []
    // const currentChoice = this.data.selectedOption
  
    // //TODO 按照当前方式，redirect 到 prompt-1 page时候，pages 参数不会 reset，按照当前逻辑会有 bug，需要 fix。考虑 add Global counter或者写死，或者添加一个页面 index 
    // //添加了页面 index
    
    // if (this.data.pageIndex === 1) {
    //     app.globalData.selectedStyles[this.data.pageIndex-1] = currentChoice
    // }else {
    //         app.globalData.selectedStyles.push(currentChoice)
    // }
    
    // console.log('当前所有选择：', app.globalData.selectedStyles)
  
    // //TODO 根据当前问题索引决定跳转到哪个页面
    // //由于微信只能跳转 10次 pages，故在 user-prompt-gen 中的跳转用 wx.relaunch 来代替
    //     wx.navigateTo({
    //         url: '/pages/user-prompt-4/user-prompt-4'
    //     })
  
        
    //     console.log('当前所有选择：', app.globalData.selectedStyles)
    
    
      
    // },
  
      // 处理确认选择
      handleConfirm: function() {
        if (!this.data.selectedOption) {
          wx.showToast({
            title: '请先选择一个风格',
            icon: 'none',
            duration: 2000 // 等待 2s 时间
          })
          return
        }
        const app = getApp()
          
      // 确保全局数组已初始化
      if (!app.globalData.selectedStyles) {
          app.globalData.selectedStyles = []
      }
      const currentChoice = this.data.selectedOption
      const pages = getCurrentPages().length -1 
      const currentIndex = pages.length - 1
      console.log("currentIndex",currentIndex)
      if (this.data.pageIndex === 3) {
    
          app.globalData.selectedStyles[this.data.pageIndex-1] = currentChoice
      }else {
       
              app.globalData.selectedStyles.push(currentChoice)
      }
      
      
      console.log('当前所有选择：', app.globalData.selectedStyles)
  
      // 根据当前问题索引决定跳转到哪个页面
      // if (questionIndex === 2) {
          wx.redirectTo({
              url: '/pages/user-prompt-4/user-prompt-4'
          })
      // } else {
          // 如果是第二个问题，可以跳转到结果页面或其他页面
          // wx.navigateTo({
          //     url: '/pages/user-prompt-gen/user-prompt-gen'
          // })
      
      
      },
  
      navigateTo: function(e) {
        const page = e.currentTarget.dataset.page;
        const pageMap = {
          'type': '/pages/user-prompt-1/user-prompt-1',
          'color': '/pages/user-prompt-2/user-prompt-2',
          'element': '/pages/user-prompt-4/user-prompt-4',
          'decoration': '/pages/user-prompt-5/user-prompt-5'
        };
    
        const app = getApp()
          // 确保全局数组已初始化
        if (!app.globalData.selectedStyles) {
            app.globalData.selectedStyles = ['A', 'A', 'A', 'A', 'A']
        }
        // app.globalData.selectedStyles = []
        const currentChoice = this.data.selectedOption
    
        //TODO 按照当前方式，redirect 到 prompt-1 page时候，pages 参数不会 reset，按照当前逻辑会有 bug，需要 fix。考虑 add Global counter或者写死，或者添加一个页面 index 
        //添加了页面 index
    
        if (this.data.pageIndex === 3) {
            app.globalData.selectedStyles[this.data.pageIndex-1] = currentChoice
        }else {
                app.globalData.selectedStyles.push(currentChoice)
        }
        wx.redirectTo({
          url: pageMap[page]
        });
      },
  
    // 生命周期函数--监听页面加载
    onLoad: function(options) {
      const app = getApp()
      
      // // 从页面栈判断当前是第几个问题
      // const pages = getCurrentPages()
      // const currentQuestionIndex = pages.length - 1
  
      this.setData({
          currentQuestionIndex: this.data.pageIndex,
          selectedOption: this.data.options[0].value // 默认选中第一个选项
      })
  
      // 如果这个位置之前有选择，显示之前的选择
      if (app.globalData.selectedStyles && 
          app.globalData.selectedStyles[this.data.pageIndex - 1] !== undefined) {
          const currentChoice = app.globalData.selectedStyles[this.data.pageIndex - 1];
          this.setData({
            selectedOption: currentChoice
        });
          // 根据选项值找到对应的索引
          const currentIndex = this.data.options.findIndex(
            option => option.value === currentChoice
          );
          
          // 设置当前轮播图索引
          this.setData({
            currentSwiperIndex: currentIndex
          });
  
          console.log('显示之前的选择：', this.data.selectedOption)
      }
  
      console.log('页面加载，当前问题索引：', this.data.pageIndex)
      console.log('当前所有选择：', app.globalData.selectedStyles)
  },
    // // 用户点击右上角分享
    // onShareAppMessage: function() {
    //   return {
    //     title: '选择你喜欢的风格',
    //     path: '/pages/selfie/selfie'
    //   }
    // }
  })
  
  