const app = getApp()
Page({
    data: {
        goodsName: "",
        swiperData: [
            { name: "../../images/banner.png", id: 2, bgColor: 'red' },
            { name: "../../images/组-10.png", id: 3, bgColor: 'yellow' },
            { name: "../../images/flower.jpg", id: 4, bgColor: 'white' },
        ],
    },
    buying() {
        let userInfo = null;
        wx.getStorage({
            key: 'userInfo',
            success: function (res) {
                userInfo = res.data;
                if (!!userInfo) {
                   wx.showToast({
                       title:"正在加载支付，请稍候..."
                   })
                }
                else {
                    wx.showToast({
                        title: "您还未登录~",
                        success: function () {
                            wx.navigateTo({
                                url: '../login/login',
                            })
                        }
                    });
                }
            },
        })

    },
    onLoad(params) {
        this.setData({
            goodsName: params.goodsName
        })
    }

})