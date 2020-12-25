//app.js
const Bmob = require("utils/Bmob-2.2.2.min.js");
Bmob.initialize("c2fb78e5ff7397cb", "245920");
const CLIENT_ID = "a4f3d873da4c4a7ab1fa42ec7e8c599b";
const CLIENT_SECRET = "f80ee2baba32dc6c4d32719005361af025c82834";
App({
  onLaunch: function () {
    // 获取小程序更新机制兼容
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager()
      updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function () {
            wx.showModal({
              title: '更新提示',
              content: '新版本已经准备好，是否重启应用？',
              success: function (res) {
                if (res.confirm) {
                  // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                  updateManager.applyUpdate()
                }
              }
            })
          })
          updateManager.onUpdateFailed(function () {
            // 新的版本下载失败
            wx.showModal({
              title: '已经有新版本了哟~',
              content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
            })
          })
        }
      })
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },
  globalData: {
    CLIENT_ID: "a4f3d873da4c4a7ab1fa42ec7e8c599b",
    CLIENT_SECRET: "f80ee2baba32dc6c4d32719005361af025c82834",
    PDD_PID:"14204449_184631258" ,
    GOOD_SEARCH: "pdd.ddk.goods.search",//搜索api
    GOOD_URL: "pdd.ddk.goods.promotion.url.generate",//链接转换api
    GOOD_DETAIL: "pdd.ddk.goods.detail",//商品详情api
    GOOD_GET: "pdd.ddk.goods.recommend.get" ,//分类查询api
    GOOD_ACTIVITY:"pdd.ddk.cms.prom.url.generate", //频道推荐api
    GOOD_BIG_ACTIVITY:"pdd.ddk.resource.url.gen" //频道推荐api
  }
})