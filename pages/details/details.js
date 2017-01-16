const app = getApp()
Page({
    data: {
        goodsName: "",
        swiperData: [
            { name: "item2", id: 2, bgColor: 'red' },
            { name: "item3", id: 3, bgColor: 'yellow' },
            { name: "item4", id: 4, bgColor: 'white' },
        ],
    },
    onLoad(params) {
        this.setData({
            goodsName: params.goodsName
        })
    }

})