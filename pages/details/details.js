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
        if (wx.getStorage({ key: 'userInfo' }) == undefined) {
            wx.showToast({
                title: "您还未登录~",
                success: function () {
                    wx.navigateTo({
                        url: '../login/login',
                    })
                }
            });
        }
        else {
            wx.requestPayment({
                timeStamp: 'String1',
                nonceStr: 'String2',
                package: 'String3',
                signType: 'MD5',
                paySign: 'String4',
                success: function (res) {
                    // success
                },
                fail: function () {
                    // fail
                },
                complete: function () {
                    // complete
                }
            })
        }
    },
    onLoad(params) {
        this.setData({
            goodsName: params.goodsName
        })
    }

})