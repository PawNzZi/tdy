// pages/index/pdd/pdd.js
const http = require('../../../utils/request.js') ;
const MD5 = require('../../../utils/md5.js') ;
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current_scroll: "0",
    cid:8439,
    page:1,
    array:[],
    params:{
      client_id :'',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
      timestamp: '',
      type: '',
    },
    tabInfo:[{key:"0",cid:"8439"
    },
      {
        key: "1", cid: "239"
      },
      {
        key: "2", cid: "18482"
      },
      {
        key: "3", cid: "19298"
      },
      {
        key: "4", cid: "8538"
      },
      {
        key: "5", cid: "6398"
      },
      {
        key: "6", cid: "8583"
      },
      {
        key: "7", cid: "16288"
      },
     ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBannerList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.searchGoodList(1,8439);
  },
  handleChangeScroll({ detail }) {
    let array = this.data.array;
    let tabInfo = this.data.tabInfo ;
    array.length = 0;
    console.log(detail.key);
    let cid ;
    for (var i = 0; i < tabInfo.length;i++){
      if(tabInfo[i].key == detail.key){
        cid = tabInfo[i].cid
      }
    }
    console.log("cid:"+cid);
    this.setData({
      current_scroll: detail.key,
      array: array,
      cid:cid,
      page:1
    });
    this.searchGoodList(1,cid);
  },
  successFun:function(res,souceObj){
    wx.hideLoading();
    console.log(res.goods_search_response.goods_list);
    var page = souceObj.data.page ;
    page = page + 1 ;
    console.log("page:"+page) ;
    var array = souceObj.data.array ;
    array = array.concat(res.goods_search_response.goods_list) ;
    souceObj.setData({array:array,page:page}) ;
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    let array = this.data.array;
    array.length = 0
    this.setData({
      page:1,
      cid: "8439",
      array:array,
      current_scroll:0
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    let array = this.data.array;
    array.length = 0
    this.setData({
      page:1,
      cid: "8439",
      array:array,
      current_scroll:0
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom===Begin")
    var page = this.data.page ;
    var cid = this.data.cid ;
      this.searchGoodList(page,cid);
    console.log("onReachBottom===End")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
/**
  * 分类查询商品
  */
  searchGoodList:function(page,key){
    wx.showLoading({
      title: '加载中',
    })
    var params = this.data.params;
    var timestamp = new Date().getTime();
    timestamp = String(timestamp) ;
    timestamp = timestamp.substr(0,10) ;
    params.timestamp = timestamp ;
    params.cat_id = Number(key);
    params.client_id = App.globalData.CLIENT_ID ;
    params.type = App.globalData.GOOD_SEARCH;
    params.page_size = 10,
    params.sort_type = 2;
    params.with_coupon = true;
    params.page = page;
    console.log("timestamp:"+timestamp) ;
    var sign_str =  App.globalData.CLIENT_SECRET  + 'cat_id'+ key +'client_id' + App.globalData.CLIENT_ID + 'page' + page + 'page_size'+ 10 
                    + 'sort_type' + 2 +'timestamp' + timestamp + 'type' + params.type + 'with_coupon' + true + App.globalData.CLIENT_SECRET ;
    console.log("sign_str:"+sign_str) ;
    var sign = MD5.hex_md5(sign_str);
    sign = sign.toUpperCase();
    console.log("sign:"+sign) ;
    params.sign = sign ;
    http.requestPostApi("",params,this,this.successFun,this.failFun,this.completeFun);
  },
  /**
   * 获取banner数据
   */
  getBannerList:function(){
    var params = {};
    var timestamp = new Date().getTime();
    timestamp = String(timestamp) ;
    timestamp = timestamp.substr(0,10) ;
    params.timestamp = timestamp ;
    params.client_id = App.globalData.CLIENT_ID ;
    params.type = App.globalData.GOOD_GET;
    params.channel_type = 7 ;
    params.limit = 6 ;
    params.pid = App.globalData.PDD_PID;
    var sign_str = App.globalData.CLIENT_SECRET + 'channel_type' + 7 +'client_id' + App.globalData.CLIENT_ID + 'limit' + 6 
                  + 'pid' + App.globalData.PDD_PID + 'timestamp' + timestamp + 'type' + App.globalData.GOOD_GET 
                  + App.globalData.CLIENT_SECRET ;
    console.log("sign_str:"+ sign_str) ;
    var sign = MD5.hex_md5(sign_str);
    sign = sign.toUpperCase();
    console.log("sign:"+sign) ;
    params.sign = sign ;
    http.requestPostApi("",params,this,this.bannerSuccessFun,this.bannerFailFun,this.bannerCompleteFun);
  },
  bannerSuccessFun:function(res,souceObj){
    console.log("bannerSuccessFun");
    console.log(res);
    souceObj.setData({bannerLists:res.goods_basic_detail_response.list})
  },
  toGoodsDetail: function (e) {
    let goods_sign = e.currentTarget.dataset.itemid;
    console.log("goods_sign=" + goods_sign)
    // this.createCode(item);
    wx.navigateTo({
      url: '/pages/goods/goods?itemid=' + goods_sign + '&mall=pdd'
    })
  },
})