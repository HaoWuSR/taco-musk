Page({
  data: {
    feedbackTypes: ['功能建议', '问题反馈', '其他'],
    typeIndex: 0,
    contact: '',
    content: '',
    email: 'taco_musk@tencent.com',
    qq: '892325525'
  },

  handleTypeChange(e) {
    this.setData({
      typeIndex: e.detail.value
    })
  },

  handleSubmit() {
    const { feedbackTypes, typeIndex, contact, content } = this.data

    if (!contact.trim()) {
      wx.showToast({
        title: '请输入联系方式',
        icon: 'none'
      })
      return
    }

    if (!content.trim()) {
      wx.showToast({
        title: '请输入反馈内容',
        icon: 'none'
      })
      return
    }

    // 这里添加提交反馈的逻辑


    const db = wx.cloud.database()

    // 添加反馈记录
    db.collection('feedback').add({
      data: {
        type: feedbackTypes[typeIndex],
        contact: contact.trim(),
        content: content.trim(),
        createdAt: db.serverDate(),
      }
    }).then(res => {
      // 提交成功
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000,
        success: () => {
          // 清空表单
          this.setData({
            typeIndex: 0,
            contact: '',
            content: ''
          })
        }
      })
    }).catch(error => {
      console.error('提交反馈失败:', error)
      wx.showToast({
        title: '提交失败，请重试',
        icon: 'none'
      })
    })
  },

  handleCopy(e) {
    const text = e.currentTarget.dataset.text
    wx.setClipboardData({
      data: text,
      success: () => {
        wx.showToast({
          title: '已复制',
          icon: 'success'
        })
      }
    })
  }
}) 