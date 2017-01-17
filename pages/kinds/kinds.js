var app = getApp()

Page({
    data: {
        listItems: [
            { name: "类别1" }, { name: "类别2"}, { name: "类别3" }, { name: "类别4" },
            { name: "类别5" }, { name: "类别6" }, { name: "类别7" }, { name: "类别8" }
        ],
        contentItems:[
         {id:0,items:[{name:"商品1"},{name:"商品2"},{name:"商品3"},{name:"商品4"},{name:"商品5"},{name:"商品6"},{name:"商品7"},{name:"商品8"},{name:"商品9"}]},
         {id:1,items:[{name:"商品1"}]},
         {id:2,items:[{name:"商品1"},{name:"商品2"},{name:"商品3"},]},
         {id:3,items:[{name:"商品1"},{name:"商品2"},{name:"商品3"},{name:"商品4"},{name:"商品5"}]},
         {id:4,items:[{name:"商品1"},{name:"商品2"},]},
         {id:5,items:[{name:"商品1"},{name:"商品2"},{name:"商品3"},{name:"商品4"}]},
         {id:6,items:[{name:"商品1"},{name:"商品2"},{name:"商品3"},{name:"商品4"},{name:"商品5"}]},
         {id:7,items:[{name:"商品1"},{name:"商品2"},{name:"商品3"},{name:"商品4"}]}   
        ],
        curId: 0
    },
    switchRightTab(e) {
        console.log(e.target);
        this.setData({
            curId: e.target.id
        });
    }
});