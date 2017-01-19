function countdown(that) {
    let second = that.data.second;
    if (second == 0) {
        that.setData({
            second: 60,
            btnSend: "重新发送",
            isDisabled: false
        });
        return;
    }
    let time = setTimeout(function () {
        that.setData({
            btnSend: second - 1 + "s",
            second: second - 1,
            isDisabled: true,
        });
        countdown(that);
    }, 1000)
}

Page({
    data: {
        btnSend: "获取验证码",
        phoneNum: null,
        second: 60,
        isDisabled: false,
        smsCode: null
    },
    getSmsCode() {
        if (this.data.isDisabled) {
            return;
        }
        console.log(123);
        if (!!this.data.phoneNum) {
            countdown(this);
            let self = this;
            wx.request({
                url: 'https://api.wang-guanjia.com/phoneCode/getsmscode.api',
                data: { phone: self.data.phoneNum },
                method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                header: { "content-type": "application/x-www-form-urlencoded" }, // 设置请求的 header
                success: function (res) {
                    console.log(res)
                },
                fail: function () {
                    // fail
                },
                complete: function () {
                    // complete
                }
            })
        }
        else {
            wx.showToast({
                title: "您输入的手机号码有误！"
            })
        }
    },
    login() {
        let self = this;
        wx.request({
            url: 'https://api.wang-guanjia.com/users/login.api',
            data: { phone: self.data.phoneNum, msmcode: self.data.smsCode },
            method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            header: { "content-type": "application/x-www-form-urlencoded" }, // 设置请求的 header
            success: function (res) {
                if (res.data.statusCode == 200 || res.data.data != null) {
                    wx.showToast({
                        title: "登录成功"
                    }),
                        wx.setStorage({
                            key: 'userInfo',
                            data: res.data.data,
                        });
                        wx.navigateBack({
                          delta: 1, // 回退前 delta(默认为1) 页面
                        })

                }
                else {
                    wx.showToast({ title: "登录失败" })
                }
            },
            fail: function () {
                wx.showToast({ title: "网络请求失败,请重试！" })
            }
        })
    },
    smsCodeInput(e) {
        let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
        if (reg.test(e.detail.value)) {
            this.data.phoneNum = e.detail.value;
        }
    },
    receiveSmsCode(e) {
        console.log(e);
        this.data.smsCode = e.detail.value;
    },
})