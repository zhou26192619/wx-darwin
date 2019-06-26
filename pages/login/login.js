//index.js
//获取应用实例
const app = getApp()
const api = require('../../api/api.js')
const {rpx2px} = require('../../utils/util.js')

Page({
  data: {
    navHeight: 30,
    language: null,
    username: null,
    password: null
  },
  onLoad: function() {
    this.setData({
      language: wx.T.getLanguage("login")
    })
    this.computeMarginTop();
    if (wx.getStorageSync('user').username != null) {
      let role = wx.getStorageSync('role').substring(0, 32);
      switch (role) {
        case '4029817264d9b2690164d9b269da0002':
          wx.setStorageSync('userLevel', 'station');
          wx.redirectTo({
            url: '/pages/station/index/index'　　 // 电站用户首页面
          })
          break;
        case '4029817264d9b2690164d9b269da0001':
        case '4029817264d9b9f00164d9b9f05a0001':
          wx.setStorageSync('userLevel', 'company');
          wx.redirectTo({
            url: '/pages/company/index/index'　　 // 组织机构首页面
          })
          break;
        case '4029817264d9b2690164d9b269da0000':
        case '4029817264d9b2690164d9b269da0100':
        case '4029817264d9b2690164d9b269da0101':
        case '4029817264d9b2690164d9b269da0102':
          wx.setStorageSync('userLevel', 'system');
          wx.redirectTo({
            url: '/pages/company/index/index'　　 // 组织机构首页面
          })
          break;
      }
    }
  },
  computeMarginTop() {
    console.log(wx.getSystemInfoSync());
    let px = rpx2px(34) + wx.getSystemInfoSync().statusBarHeight;
    this.setData({
      navHeight: px
    })
  },
  usernameInput: function(e) {
    this.setData({
      username: e.detail.value
    })
  },
  passwordInput: function(e) {
    this.setData({
      password: e.detail.value
    })
  },
  login() {
    let username = this.data.username;
    let password = this.data.password;
    if (username != null && password != null && username != '' && password != '') {
      api.login({
        "username": this.data.username,
        "password": this.data.password
      }, response => {
        if (response.data.code == '1') {
          if (response.data.flag == '1') {
            wx.setStorageSync("userNP", {
              username: username,
              password: password,
            })
            let role = response.data.role[0].substring(0, 32);
            let stationId = response.data.role[0].substring(32, 64);
            switch (role) {
              case '4029817264d9b2690164d9b269da0002':
                wx.setStorageSync('userLevel', 'station');
                wx.redirectTo({
                  url: '/pages/station/index/index'　　 // 电站用户首页面
                })
                break;
              case '4029817264d9b2690164d9b269da0001':
              case '4029817264d9b9f00164d9b9f05a0001':
                wx.setStorageSync('userLevel', 'company');
                wx.redirectTo({
                  url: '/pages/company/index/index'　　 // 组织机构首页面
                })
                break;
              case '4029817264d9b2690164d9b269da0000':
              case '4029817264d9b2690164d9b269da0100':
              case '4029817264d9b2690164d9b269da0101':
              case '4029817264d9b2690164d9b269da0102':
                wx.setStorageSync('userLevel', 'system');
                wx.redirectTo({
                  url: '/pages/company/index/index'　　 // 组织机构首页面
                })
                break;
            }
            wx.setStorageSync("user", response.data.user);
            wx.setStorageSync("role", role);
            wx.setStorageSync("stationId", stationId);
            wx.setStorageSync("companyId", response.data.user.companyId);
          } else if (response.data.flag == '2') {
            wx.showToast({
              title: this.data.language.userErr,
              icon: 'none',
              duration: 2000 //持续的时间
            })
          } else {
            wx.showToast({
              title: this.data.language.pwdErr,
              icon: 'none',
              duration: 2000 //持续的时间
            })
          }
        } else {

        }
      });
    } else {
      wx.showToast({
        title: this.data.language.emptyErr,
        icon: 'none',
        duration: 2000 //持续的时间
      })
    }


    // wx.redirectTo({
    //   url: '../company/index/index',
    // });  
  }
})