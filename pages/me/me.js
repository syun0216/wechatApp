Page({
    data: {
        userInfo: {},
        commentTitle:"意见反馈",
        aboutUs:"关于我们"
    },
    getMyInfo() {
        let self = this;
        wx.getUserInfo({
            success(res) {
                console.log(res.userInfo);
                self.setData({
                    userInfo: res.userInfo
                })
            }
        })
    },
    location() {
        wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success: function (res) {
                var latitude = res.latitude
                var longitude = res.longitude
                wx.openLocation({
                    latitude: latitude,
                    longitude: longitude,
                    scale: 28
                })
            }
        })
    },
    openConfirm() {
        wx.showModal({
            title: "提示",
            content: "拨打电话给miro这个傻逼:180****9789",
            confirmText: "确定",
            cancelText: "取消",
            success: function (res) {
                if (res.confirm) {
                    wx.makePhoneCall({
                        phoneNumber: '18022129789',
                        success: function (res) {
                            return null;
                        },
                        fail: function () {
                            alert("拨打电话失败")
                        }
                    })
                } else {
                    return null;
                }
            }
        })
    },
    onShareAppMessage() {
    return {
      title: '分享本小程序？',
      desc: '...',
      path: '/page/index/index'
    }
  },
  logout(){
      wx.showModal({
          title:"提示",
          content:"您确定退出登录吗?",
          confirmText:"确定",
          cancelText:"取消",
          confirmColor:"#ff5858",
          success:function(res){
              return null;
          }
      })
  },
    onLoad() {
        this.getMyInfo();
    }
})