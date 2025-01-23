Page({
    // 页面的初始数据
    data: {
      selectedOption: '',
      currentSwiperIndex: 0, // 默认选中第一个选项（居中显示）
      options: [
        {
          id: 1,
          value: 'A',
          text: 'A. 红色',
          image: 'cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/选项2/red1.jpg'
        },
        {
          id: 2,
          value: 'B',
          text: 'B. 天蓝色',
          image: 'cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/选项2/sky-blue1.jpg'
        },
        {
          id: 3,
          value: 'C',
          text: 'C. 金色',
          image: 'cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/选项2/gold1.jpg'
        },
        {
          id: 4,
          value: 'D',
          text: 'D. 银白色',
          image: 'cloud://taco-musk-2gnz7e935499fab9.7461-taco-musk-2gnz7e935499fab9-1337769146/小程序素材/选项2/silver-white1.jpg'
        }
      ],
      pageIndex: 2
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
  


      handleConfirm: function() {
        if (!this.data.selectedOption) {
          wx.showToast({
            title: '请先选择一个风格',
            icon: 'none',
            duration: 2000 
          })
          return
        }
        const app = getApp()
          
      // 确保全局数组已初始化
      if (!app.globalData.selectedStyles) {
          app.globalData.selectedStyles = ['A', 'A', 'A', 'A', 'A']
      }
      
      const currentChoice = this.data.selectedOption
      const pages = getCurrentPages().length -1 

      if (this.data.pageIndex === 2) {
          app.globalData.selectedStyles[this.data.pageIndex-1] = currentChoice
      }else {
        
              app.globalData.selectedStyles.push(currentChoice)
      }
      

      wx.redirectTo({
          url: '/pages/user-prompt-3/user-prompt-3'
      })
     
      
      },
  
      navigateTo: function(e) {
        const page = e.currentTarget.dataset.page;
        const pageMap = {
          'type': '/pages/user-prompt-1/user-prompt-1',
          'background': '/pages/user-prompt-3/user-prompt-3',
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
    
        if (this.data.pageIndex === 2) {
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

      }

  },
    // // 用户点击右上角分享
    // onShareAppMessage: function() {
    //   return {
    //     title: '选择你喜欢的风格',
    //     path: '/pages/selfie/selfie'
    //   }
    // }
  })
  
  