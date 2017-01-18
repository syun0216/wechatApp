//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    swiperData: [
      { name: "../../images/YZDP-H5-750x2445_01.jpg", id: 1},
      { name: "../../images/banner.png", id: 2, bgColor: 'red' },
      { name: "../../images/组-10.png", id: 3, bgColor: 'yellow' },
      { name: "../../images/flower.jpg", id: 4, bgColor: 'white' },
    ],
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    userInfo: {},
    goodsKindDetails1: [
      {
        name: "kind1",
        img: "img1"
      },
      {
        name: "kind2",
        img: "img2"
      },
      {
        name: "kind3",
        img: "img3"
      }
    ],
    goodsKindDetails2: [
      {
        name: "kind4",
        img: "img4"
      },
      {
        name: "kind5",
        img: "img5"
      },
      {
        name: "kind6",
        img: "img6"
      }
    ],
    longItemList: []
  },
  onPullDownRefresh() {
    wx.showToast({
      title: '正在加载中...'
    })
  },
  getLocation() {
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
  setLongItemList() {
    let items = [];
    for (let i = 0; i <= 1000; i++) {
      items.push({ name: "item" + i })
    };
    this.setData({
      longItemList: items
    });
  },
  onLoad() {
    this.setLongItemList();
  },
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  }


  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // onLoad: function () {
  //   console.log('onLoad')
  //   var that = this
  //   //调用应用实例的方法获取全局数据
  //   app.getUserInfo(function(userInfo){
  //     //更新数据
  //     that.setData({
  //       userInfo:userInfo
  //     })
  //   })
  // }
})
