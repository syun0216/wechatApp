const app = getApp();
Page({
    data: {
        userInfo: {}
    },
    showTopTips(e) {
        wx.showToast({
            title: "成功",
            icon: "success",
            duration: 1000
        })
    },
    onLoad(){
        this.setData({userInfo:app.globalData.userInfo});
        console.log(this.data.userInfo);
    }
})