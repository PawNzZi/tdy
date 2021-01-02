// pages/goods/goods.js
const network = require("../../utils/network.js");
const Bmob = require("../../utils/Bmob-2.2.2.min.js");
const query = Bmob.Query('appinfo');
const http = require("../../utils/request.js");
const MD5 = require('../../utils/md5.js');
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodInfo: {},
    tab: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let itemid = options.itemid;
    this.setData({
      itemid: itemid
    })
    this.getGoodDetail(itemid);
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
    let that = this;
    query.get('kcC8000P').then(res => {
      console.log(res);
      that.setData({
        tip: res.tip,
        btn_text: res.btn_text,
        copy_text: res.copy_text
      })
    }).catch(err => {
      console.log(err)
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

  },
  copyCode: function () {
    let that = this;
    let copy_text = this.data.copy_text;
    var apikey = 'royfwmeng';
    var itemid = this.data.itemid;
    var pid = 'mm_96548959_592600465_109118100473';
    var tb_name = 'mfw245920672';
    var get_taoword = 1;
    var title = '淘都匀·都匀人自己的优惠券平台';
    var data = {
      "apikey": apikey,
      "itemid": itemid,
      "pid": pid,
      "tb_name": tb_name,
      "get_taoword": get_taoword,
      "title": title,
    }
    network.requestPost('/ratesurl/apikey/{{你的apikey}}', {
      success(res) {
        console.log(res.data)
        wx.setClipboardData({
          data: res.data.taoword,
          success: function (res) {
            wx.getClipboardData({
              success: function (res) {
                wx.showToast({
                  title: copy_text
                })
              }
            })
          }
        })
      }
    }, data)
  },
  getGoodDetail: function (goodid) {
    let that = this;
    // var itemid = that.data.itemid ;
    console.log(goodid)
    var data = {};
    network.requestGet("/item_detail/apikey/{{你的apikey}}/itemid/" + goodid, {
      success(res) {
        console.log(res)
        that.setData({
          goodInfo: res.data
        })
      }
    }, data)
  },
  
})
