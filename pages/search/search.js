// pages/search/search.js
const network = require("../../utils/network.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    min_id:1,
    array:[]
  },
  toGoodsDetail:function(e){
    let itemid = e.currentTarget.dataset.itemid;
    wx.navigateTo({
      url: '/pages/goods/goods?itemid=' + itemid
    })
  },
 
  getInputText: function (e) {
    console.log(e)
    this.setData({
      key:e.detail.value
    })
  },
  
  searchGoods: function () {
    console.log("searchGoods");
    let key = this.data.key;
    let array = this.data.array ;
    array.length = 0 ;
    this.setData({
      array:array
    })
    if (key) {
      this.searchGoodsForKey(key)
    }
  }
  ,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var key = options.key ;
    this.setData({
      key:key
    })
    if (key) {
      this.searchGoodsForKey(key)
    }
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
    // let key = this.data.key ;
    // if (key) {
    //   this.searchGoodsForKey(key)
    // }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // this.setData({
      // min_id:1
    // })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.setData({
      min_id: 1
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

    let key = this.data.key;
    this.searchGoodsForKey(key)
  },
  /**
   * 查询商品
   */
  searchGoodsForKey(key)
  {
    wx.showLoading({
      title: '加载中',
    })
    let that = this;
    var data = {
    }
    let min_id = this.data.min_id ;
    network.requestGet("/supersearch/apikey/{{你的apikey}}/keyword/" + key + "/back/10/min_id/" + min_id + "/sort/2",{
      success(res){
        let array = that.data.array.concat(res.data);
        that.setData({
          array: array,
          min_id: res.min_id
        })
        wx.hideLoading();
      }
    },data)
  },

})
