const api = require('../../api/api.js')

Page({
  data: {
    language: null,
    email: null
  },
  onLoad: function() {
    this.setData({
      language: {}
    })
  },
  emailInput: function(e) {
    this.setData({
      email: e.detail.value
    })
  },
  cancel() {
    wx.navigateBack({
      delta: 1
    })
  },
  submit() {
    wx.navigateTo({
      url: '/pages/scend/scend',
    })
  }
})