// pages/category/category.js
const network = require("../../utils/network.js")
const ADZONE = 109118100473

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current_scroll: "0",
    cid:"1",
    min_id:1,
    array:[],
    loadmore:true,
    tabInfo:[{key:"0",cid:"1"
    },
      {
        key: "1", cid: "3"
      },
      {
        key: "2", cid: "4"
      },
      {
        key: "3", cid: "11"
      },
      {
        key: "4", cid: "2"
      },
      {
        key: "5", cid: "6"
      },
      {
        key: "6", cid: "17"
      },]
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
    this.setData({
      current_scroll: detail.key,
      array: array,
      min_id: 1,
      cid:cid
    });
    this.searchGoodsForKey(cid);
  },
  toGoodsDetail: function (e) {
    let itemid = e.currentTarget.dataset.itemid;
    // this.createCode(item);
    wx.navigateTo({
      url: '/pages/goods/goods?itemid=' + itemid 
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.searchGoodsForKey(1)
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
    this.searchGoodsForKey(1)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    let array = this.data.array;
    array.length = 0
    this.setData({
      min_id: 1,
      cid: "1",
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
      min_id: 1,
      cid: "1",
      array: array,
      current_scroll: 0
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
    let loadmore = this.data.loadmore ;
    if(loadmore){
      let cid = this.data.cid;
      this.searchGoodsForKey(cid);
    }
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
  * 查询商品
  */
  searchGoodsForKey(key) {
    wx.showLoading({
      title: '加载中',
    })
    let that = this;
    var data = {
    }
    var min_id = this.data.min_id;
    network.requestGet("/column/apikey/royfwmeng/type/1/back/10/min_id/" + min_id + "/cid/" + key, {
      success(res) {
        if(res.code == 0){
          let array = that.data.array.concat(res.data);
          wx.showToast({
            title: '已经到底了，亲',
            icon:'none'
          })
          that.setData({
            array: array,
            min_id: 1,
            loadmore:false
          })
        }else{
          let array = that.data.array.concat(res.data);
          that.setData({
            array: array,
            min_id: res.min_id,
            loadmore: true
          })
        }
        
        wx.hideLoading();
      }
    }, data)
  },
})