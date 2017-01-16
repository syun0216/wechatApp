Page({
    data:{
        btnSend:"获取验证码",
        phoneNum:""
    },
   
    getSmsCode(){
        wx.request({
          url: 'https://api.wang-guanjia.com/phoneCode/getsmscode.api',
          data: {},
          method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    },
     smsCodeInput:function(e){
        let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
        if(reg.test(e.detail.value)){
            this.setData({
                phoneNum:e.detail.value
            })
        }
    }
})