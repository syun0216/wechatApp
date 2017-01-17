Page({
    data:{
        userInfo:{}
    },
    showTopTips(e){
       wx.showToast({
           title:"成功",
           icon:"success",
           duration:1000
       })
    },
    onLoad(){
        var that = this;
        wx.getStorage({
          key: 'userInfo',
          success: function(res){
           console.log(res);           
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    }
})