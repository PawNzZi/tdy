const App = getApp();
var HOST_URL = 'https://v2.api.haodanku.com'
var requestHandler = {
  success:function(res){},
  fail:function(res){},
}

//GET请求
function requestGet(url, requestHandler, data){
  requestget(url, requestHandler, data);
}
function requestget(url, requestHandler, data)
{
  wx.request({
    url: HOST_URL+url,
    data: data,
    method: 'GET',
    header: { 'content-type': 'application/x-www-form-urlencoded'},
    success:function(res){
      requestHandler.success(res.data);
    },
    fail:function(res){
      requestHandler.fail(res.data);
    },
    complete:function(){},
  })
}
//POST请求
function requestPost(url, requestHandler, data){
  requestpost(url, requestHandler, data);
}
function requestpost(url,requestHandler,data) {
  
  wx.request({
    url: HOST_URL + url,
    data: data,
    method: 'POST',
    header: { 'content-type': 'application/x-www-form-urlencoded' },
    success: function (res) {
      console.log(res)
      if(res.data.code == 500)
      {
        // App._showFail("网络异常")
        requestHandler.fail()
        return false;
      }
      else{
        requestHandler.success(res.data);
    }
    },
    fail: function () {
      // App._showFail("网络异常")
      requestHandler.fail();
    },
    complete: function () {},
  })
}
module.exports = {
  requestGet: requestGet,
  requestPost: requestPost
}

