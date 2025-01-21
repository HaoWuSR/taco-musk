// utils/counter.js
const Counter = {

    async getCurrentCount() {
        const db = wx.cloud.database()
        try {
            // 直接尝试获取文档
            const result = await db.collection('counters').doc('main').get()
            return result.data
        } catch (error) {
            // 文档不存在，尝试创建
            try {
                await db.collection('counters').add({
                    data: {
                        _id: 'main',
                        processing: 0
                    }
                })
                return { processing: 0 }
            } catch (createError) {
                // 如果是重复创建错误，重新获取文档
                if (createError.errCode === -502001) {
                    const retryResult = await db.collection('counters').doc('main').get()
                    return retryResult.data
                }
                throw createError
            }
        }
      },
    // 增加处理中的数量
    async incrementProcessing() {
      const db = wx.cloud.database()
      const _ = db.command
      
      try {
        // 获取或创建计数器记录
        await db.collection('counters').doc('main').get()
          .catch(async () => {
            // 如果不存在就创建
            await db.collection('counters').add({
              data: {
                _id: 'main',
                processing: 0,
    
              }
            })
          })
  
        // processing + 1
        await db.collection('counters').doc('main').update({
          data: {
            processing: _.inc(1)
          }
        })
  
        // 返回更新后的计数
        const updated = await db.collection('counters').doc('main').get()
        return updated.data
      } catch (error) {
        console.error('增加处理中计数失败:', error)
        throw error
      }
    },
  
    // 减少处理中的数量
    async decrementProcessing() {
      const db = wx.cloud.database()
      const _ = db.command
      
      try {
        await db.collection('counters').doc('main').update({
          data: {
            processing: _.inc(-1)
          }
        })
      } catch (error) {
        console.error('减少处理中计数失败:', error)
        throw error
      }
    },
  
    // 增加完成数量
    async incrementEnd() {
      const db = wx.cloud.database()
      const _ = db.command
      
      try {
        await db.collection('counters').doc('main').update({
          data: {
            end: _.inc(1)
          }
        })
      } catch (error) {
        console.error('增加完成计数失败:', error)
        throw error
      }
    }
  }
  
  export default Counter