//index.js
//获取应用实例
const app = getApp()
const network = require("../../utils/network.js")

Page({ 
  data: {
    banner: [],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    hotLists: [],
    fastBuyLists:[],
    hot_min_id:1,
    sh_min_id:1
  },
  
  // toNvZhuang:function(){
  //   wx.navigateTo({
  //     url: "/pages/search/search"
  //   })
  // },
  toGoodsDetail:function(e){
    let itemid = e.currentTarget.dataset.itemid;
    wx.navigateTo({
      url: '/pages/goods/goods?itemid=' + itemid
    })
  },
  getInputText: function (e) {
    console.log(e)
    this.setData({
      key: e.detail.value
    })
  },
  searchGoods: function () {
    let key = this.data.key ;
    wx.navigateTo({
      url: "/pages/search/search?key="+key,
    })
  }
,
  changeOne:function(e){
    let type = e.currentTarget.dataset.type;
    if(type === "0"){
      let hotLists = this.data.hotLists;
      hotLists.length = 0;
      this.setData({
        hotLists: hotLists,
      })
      this.getHotGoods();
    }else if(type === "1"){
      let fastBuyLists = this.data.fastBuyLists;
      fastBuyLists.length = 0;
      this.setData({
        fastBuyLists: fastBuyLists,
      })
      this.getFastBuy();
    }
  },
  onShow:function(){
    //热门请求
    // this.getHotGoods();
    //整点快抢
    // this.getFastBuy();
    //列表请求
    this.everyday();
},
  onLoad: function () {
    this.getBannerGoods();
    //热门请求
    this.getHotGoods();
    //整点快抢
    this.getFastBuy();
    //列表请求
    // this.everyday();

  },
  /**
   * 每日上新接口
   */
  everyday:function(){
    let that = this ;
    var data = {};
    network.requestGet('/column/apikey/royfwmeng/type/1/back/20/min_id/1',{
      success(res){
        that.setData({
          array:res.data
        })
      }
    },data)
  },
  /**
   * 抽纸
   */
  getFastBuy:function(){
    let that = this ;
    var data = {};
    let sh_min_id = this.data.sh_min_id;
    network.requestGet("/get_keyword_items/apikey/royfwmeng/keyword/" + "抽纸" + "/back/5/min_id/" + sh_min_id, {
      success(res) {
        console.log(res)
        let array = res.data;
        array = array.slice(0,4)
        that.setData({
          fastBuyLists: array,
          sh_min_id: res.min_id
        })
      }
    }, data)
  },
  /**
   * 热门接口
   */
  getHotGoods:function(){
    let that = this;
    var data = {};
    let hot_min_id = this.data.hot_min_id ;
    network.requestGet('/low_price_Pinkage_data/apikey/royfwmeng/type/1/min_id/' + hot_min_id, {
      success(res) {
        console.log("getHotGoods")
        console.log(res)
        let array = res.data;
        array = array.slice(0, 4)
        that.setData({
          hotLists: array,
          hot_min_id: res.min_id
        })
      }
    }, data)
  },
  /**
   * banner接口
   */
  getBannerGoods: function () {
    let that = this;
    var data = {};
    network.requestGet('/column/apikey/royfwmeng/type/11/back/5/min_id/1', {
      success(res) {
        console.log(res)
        that.setData({
          bannerLists: res.data,
        })
      }
    }, data)
  },
  /**
   * 
   */
  // getCurrentTime:function(){
  //   var myDate = new Date();
  //   var time = myDate.getHours();
  //   console.log(time);
  //   let key ;
  //   if (time>0 && time <10){
  //     key = 7;
  //   } else if (time >= 10 && time < 12){
  //     key = 8;
  //   } else if (time >= 12 && time < 15){
  //     key = 9;
  //   } else if (time >= 15 && time < 20) {
  //     key = 10;
  //   }else{
  //     key = 12;
  //   }
  //   //banner
  //   this.getBannerGoods(1);
  // }
})
