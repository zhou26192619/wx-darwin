//index.js
//获取应用实例
const app = getApp()
const api = require('../../api/api.js')
const util = require('../../utils/util.js')

Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
    }
  },
  data: {
    navHeight: app.data.navHeight,
    language: {}
  },
  onLoad: function(options) {
    console.log(options);
    this.setData({
      language: app.data.language.about
    });
  },
  ready() {
    console.log(getCurrentPages())
  },
  onShareAppMessage(options) {
    console.log(options.webViewUrl)
  }
})