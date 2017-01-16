Page({
    data:{
        userInfo:{}
    },
    getMyInfo(){
        let self = this;
        wx.getUserInfo({
            success(res){
                console.log(res.userInfo);
                self.setData({
                    userInfo:res.userInfo
                })
            }
        })
    }
})