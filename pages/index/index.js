import * as echarts from '../../lib/ec-canvas/echarts';
// let MD5 = require('js-md5');
Page({
  data: {
    language: null,
    ec: {
      lazyLoad: true
    },
    tabs: [{
      text: '苏州'
    }, {
      text: '杭州'
    }, {
      text: '美洲'
    }, {
      text: '兰州'
    }, {
      text: '大洋洲'
    }, {
      text: '白粥'
    }, {
      text: '皮蛋瘦肉粥'
    }, {
      text: '黑米粥'
    }],
    loading: {
      show: true,
      percent: '50%'
    },
    showDialog: false,
    dialogOption: {
      title: '这是标题',
      confirm: ' 确定 '
    },
    timeline: [{
      "arrive": true,
      "time": "2018-8-8",
      "text": "neirong"
    }, {
      "arrive": true,
      "time": "2018-8-9",
      "text": "内容"
    }, {
      "arrive": true,
      "time": "2018-8-10",
      "text": "xxxxx"
    }, {
      "time": "2018-18-18",
      "text": "xxxxx"
    }, ],
    inputValue: 'aaa'
  },
  onReady: function() {
    this.setData({
      language: {}
    });
    setInterval(() => {
      let p = parseFloat(this.data.loading.percent) + 10;
      p = p > 100 ? 0 : p;
      this.setData({
        'loading.percent': p + '%'
      })
    }, 1000);
  },
  show() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  onPullDownRefresh(e) {
    console.log(e);
    setInterval(function() {
      wx.stopPullDownRefresh();
    }, 2000)
  },
  onPageScroll(e) {
    // console.log(e);
  },
  handleDialogConfirm() {
    this.setData({
      'showDialog': false
    })
  },
  handleDialogClose() {
    this.setData({
      'showDialog': false
    })
  },
  handleDialog() {
    this.setData({
      'showDialog': true
    })
  },
  handleTap(e) {
    console.log('handleTap');
  },
  handleInput(e) {
    console.log(e);
    this.setData({
      inputValue: e.detail
    })
  }
})