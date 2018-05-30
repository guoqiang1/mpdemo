//index.js
// var qcloud = require('')
// var config = require('../../config')
var util = require('../../utils/util.js')
var Base64 = require('../../utils/base64.js').Base64
var userInfo = ""
// console.log(getApp().globalData.userInfo)


Page({
    data: {
        userInfo: {},
        logged: false,
        takeSession: false,
        requestResult: '',
        tester:"发起会话",
    },

    userInfoHandler:function(e){
      console.log("userinfoHandler");
      // this.setData({
      //   userInfo:getApp().globalData.userInfo
      // })

    },
    onShow: function () {
      console.log("onShow");
      var that = this;
      // 查看是否授权
      wx.getSetting({
        success: function (res) {

          var uInfo = {}

          if (res.authSetting['scope.userInfo']) {

            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function (res) {
                uInfo = res.userInfo;
                console.log(uInfo);
                getApp().globalData.userInfo = uInfo;
                that.setData({ userInfo: uInfo });

              }
            })
          } else {
            console.log("no auth")
          }
        },
        error: function (e) {
          console.log(e);
        }
      });
      console.log("afterShow");
    },
    bindGetUserInfo: function (e) {
      console.log("bindGetUserInfo");
      
    },

    onReady: function(){
      console.log("onReady");
      var that = this;
      // 查看是否授权
      wx.getSetting({
        success: function (res) {

          var uInfo = {}

          if (res.authSetting['scope.userInfo']) {
           
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function (res) {
                uInfo = res.userInfo;
                getApp().globalData.userInfo = uInfo;
                that.setData({userInfo:uInfo});

              }
            })
          } else {
            console.log("no auth")
          }
        },
        error: function (e) {
          console.log(e);
        }
      })
      console.log("after ready");
    },

    onLoad:function(options){
      console.log(options.name);
    }
});
