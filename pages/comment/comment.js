Page({
    data:{
        isCommentPage:null
    },
    onLoad(params){
        console.log(params);
       wx.setNavigationBarTitle({
         title: params.title,
       })
       this.setData({
           isCommentPage:params.id === "1"
       })
    }
});