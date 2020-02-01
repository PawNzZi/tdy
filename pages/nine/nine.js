// pages/nine/nine.js
const network = require("../../utils/network.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'tab1',
    nArray: [],
    tab:{},
    min_id:'1',
    loadmore: true,
  },
  handleChange({ detail }) {
    let array = this.data.nArray;
    array.length = 0;
    this.setData({
      current: detail.key,
      nArray: array,
      min_id: '1'
    });
    if (detail.key === 'tab2'){
      this.twtyGoods()
    } else{
      this.ninePointNine()
    }
  },
  toGoodsDetail: function (e) {
    let itemid = e.currentTarget.dataset.itemid;

    wx.navigateTo({
      url: '/pages/goods/goods?itemid='+itemid 
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // this.getTitle();
      // this.ninePointNine()
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
    this.ninePointNine()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    let array = this.data.nArray;
    array.length = 0;
    this.setData({
      min_id: '1',
      nArray:array,
      current: 'tab1'
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    let array = this.data.nArray;
    array.length = 0;
    this.setData({
      min_id: '1',
      nArray: array,
      current: 'tab1'
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
    let loadmore = this.data.loadmore;
    if (loadmore){
      let current = this.data.current;
      if (current === 'tab1') {
        this.ninePointNine()
      } else {
        this.twtyGoods()
      }
    }
    
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  ninePointNine:function(nPage)
  {
    wx.showLoading({
      title: '加载中',
    })
    let that = this;
    var data = {
    }
    var min_id = this.data.min_id ;
    network.requestGet('/column/apikey/royfwmeng/type/2/back/10/min_id/' + min_id,{
      success(res){
        if (res.code == 0) {
          let nArray = that.data.array.concat(res.data);
          wx.showToast({
            title: '已经到底了，亲',
            icon: 'none'
          })
          that.setData({
            nArray: nArray,
            min_id: 1,
            loadmore: false
          })
         } else{
          let nArray = that.data.nArray.concat(res.data)
          that.setData({
            nArray: nArray,
            min_id: res.min_id
          })
          }
       
        wx.hideLoading();
      }
    },data)
  },
  twtyGoods: function (nPage) {
    wx.showLoading({
      title: '加载中',
    })
    let that = this;
    var data = {
      // adzone: ADZONE,
      // page: nPage,
      // size: 30
    }
    var min_id = this.data.min_id;
    network.requestPost('/column/apikey/royfwmeng/type/3/back/10/min_id/' + min_id, {
      success(res) {
        let nArray = that.data.nArray.concat(res.data);
        
        that.setData({
          nArray: nArray,
          min_id: res.min_id
        })
        wx.hideLoading();
      }
    }, data)
  },


})