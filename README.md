# tdy

#### 介绍
淘客小程序+外卖CPS，无后端版，简单配置，开箱即用。
原生小程序开发，目前淘客只有淘宝，后期会加上拼多多和京东；
外卖有饿了么+美团

**微信搜索小程序：淘都匀**，可查看完整演示


[![小程序参考](https://image.lingyikz.cn/gh_61880654aae9_258.jpg "小程序参考")](https://image.lingyikz.cn/gh_61880654aae9_258.jpg "小程序参考")

#### 第三方集成
因为是无后端，集成了一下第三方
1.  淘宝：采用好单库的api，自己上阿里妈妈申请淘客，然后到好单库授权，即可使用相关api；
2.  外卖：饿了么+美团借鉴 [https://github.com/zwpro/coupons](https://github.com/zwpro/coupons "https://github.com/zwpro/coupons")
3.  [Bmob 后端云](https://www.bmob.cn/ "Bmob 后端云")，因小程序禁止使用淘口令，为了骗取审核通过，需要用到动态数据；其次外卖跳转地址和appid可利用比目动态设置；详细参考代码。

#### 使用说明

**淘宝API**
- [申请淘客](https://pub.alimama.com/ "申请淘客")（如有请忽略）
- 注册[好单库](https://www.haodanku.com/ "好单库")账号，并授权淘宝。相关文档好单库官网有，按照官网操作即可。

**美团cps**
- [申请美团联盟](https://union.meituan.com/ "申请美团联盟")，目前只有企业资质才能注册，如果没有，可关注美团官方公众号《美团福利宝》《美团美天赚》获取自己的推广链接

**饿了么cps**
- 注册了淘宝联盟之后，可下载App淘宝联盟，banner有饿了么的推广链接；或登陆[淘宝联盟](https://pub.alimama.com "淘宝联盟")获取

**小程序内获取推广链接**
- 因饿了么和美团可分享的东西很多，可参考该文章获取path和小程序id。



#### 感谢

- zwpro大佬uniapp版的外卖CPS小程序给的灵感
