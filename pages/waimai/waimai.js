// pages/waimai/waimai.js
const Bmob = require("../../utils/Bmob-2.2.2.min.js");
const query = Bmob.Query('waimai');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'all',
    currentBar: 0,
    array: [],
    // all: [],
    // eleArray: [],
    // meituanArray: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var all = this.data.all;
    // this.setData({
    //   array: all
    // })
    this.getAllList();
    this.getTabarsList();
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

  },
  changeTabars: function (e) {
    console.log(e);
    // var all = this.data.all;
    // var ele = this.data.eleArray;
    // var meituan = this.data.meituanArray;
    var currentBar = e.currentTarget.dataset.currentbar;
    this.setData({
      currentBar: currentBar
    })
    console.log(currentBar);
    this.getOhterList(currentBar);
  },
  handleChange({
    detail
  }) {
    this.setData({
      current: detail.key
    });
  },
  toGetCounpon: function (e) {
    var currentBar = this.data.currentBar;
    console.log(currentBar)
    var index = e.currentTarget.dataset.index;
    console.log(index)
    var array = this.data.array;
    wx.navigateToMiniProgram({
      appId: array[index].miniapp_id,
      path: array[index].miniapp_path,
      success(res) {
        console.log("打开成功")
      }
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    var messages = [{
      title: '美团饿了么大额红包，每日可领！',
      path: '/pages/waimai/waimai'
    }, {
      title: '吃了这么多年外卖，你知道这个秘密吗？',
      path: '/pages/waimai/waimai'
    }, {
      title: '这样点外卖，一年省下一个亿',
      path: '/pages/waimai/waimai'
    }, {
      title: '点外卖前先领券，吃霸王餐',
      path: '/pages/waimai/waimai'
    }, {
      title: '美团饿了么内部优惠券，手慢无',
      path: '/pages/waimai/waimai'
    }, {
      title: '点外卖不用优惠券，你就out了',
      path: '/pages/waimai/waimai'
    }, {
      title: '外卖不为人知的秘密，点这解密',
      path: '/pages/waimai/waimai'
    }, {
      title: '震惊！小伙点外卖竟然花了1分钱',
      path: '/pages/waimai/waimai'
    }, {
      title: '从这点外卖，你也可以吃霸王餐',
      path: '/pages/waimai/waimai'
    }];
    return messages[Math.floor(Math.random() * messages.length)];
  },
  getTabarsList: function () {
    var _this = this;
    const query = Bmob.Query("tabars");
    query.find().then(res => {
      console.log(res)
      _this.setData({
        tabsArray: res
      })
    });
  },
  getAllList: function () {
    wx.showLoading({
      title: '加载中...',
    })
    var _this = this;
    query.equalTo("isopen", "==", "1");
    query.find().then(res => {
      console.log(res);
      _this.setData({
        all: res,
        array: res
      });
      wx.hideLoading({
        complete: (res) => {},
      })
    });
  },
  getOhterList: function (type) {
    wx.showLoading({
      title: '加载中...',
    })
    var _this = this;
    if (type != 0) {
      console.log("type:" + type)
      query.equalTo("type", "==", type);
    }
    query.equalTo("isopen", "==", "1");
    query.find().then(res => {
      console.log(res);
      _this.setData({
        array: res
      });
      wx.hideLoading({
        complete: (res) => {},
      })
    });
  },
})