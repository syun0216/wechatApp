const app = getApp();
Page({
    data: {
        userInfo: {},
        isLogin:null
    },
    showTopTips(e) {
        wx.showToast({
            title: "成功",
            icon: "success",
            duration: 1000
        })
    },
    onLoad() {
        this.setData({ userInfo: app.globalData.userInfo });
        console.log(this.data.userInfo);
    },
    //onShow方法是当页面展示的时候就会触发
    onShow() {
        var self = this;
        wx.getStorage({
          key: 'userInfo',
          success: function(res){
            self.setData({
                isLogin:true
            })
          },
          fail: function() {
            self.setData({isLogin:false})
          },
          complete: function() {
            // complete
          }
        })
    }
})