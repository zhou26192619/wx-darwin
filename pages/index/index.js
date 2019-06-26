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
    }, ]
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
  methods: {
    handleTap(e) {
      console.log('handleTap');
    },
    initChart() {
      console.log('initChart');
      this.selectComponent('#mychart').init((canvas, width, height) => {
        // 初始化图表
        this.chart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        this.chart.on('click', (e) => {
          console.log(e);
        });
        let option = {
          title: {
            show: false
          },
          legend: {
            x: 'center',
            y: 'bottom',
            textStyle: {
              color: 'white',
              fontSize: '10'
            },
            itemHeight: '12',
            formatter: function(name) {
              return name.split('&')[0] + '(' + name.split('&')[1] + ')';
            }
          },
          grid: {
            y: 40,
            y2: 50,
            x: 40,
            x2: 50
          },
          tooltip: {
            trigger: 'axis',
            triggerOn: "click",
            confine: true,
            // position: function(point, params, dom, rect, size) {
            //   //其中point为当前鼠标的位置，size中有两个属性：viewSize和contentSize，分别为外层div和tooltip提示框的大小
            //   var x = point[0]; //
            //   var y = point[1];
            //   var viewWidth = size.viewSize[0];
            //   var viewHeight = size.viewSize[1];
            //   var boxWidth = size.contentSize[0];
            //   var boxHeight = size.contentSize[1];
            //   var posX = 0; //x坐标位置
            //   var posY = 0; //y坐标位置
            //   if (x < boxWidth) { //左边放不开
            //     posX = 5;
            //   } else { //左边放的下
            //     posX = x - boxWidth;
            //   }
            //   if (y < boxHeight) { //上边放不开
            //     posY = 5;
            //   } else { //上边放得下
            //     posY = y - boxHeight;
            //   }
            //   console.log(posX, posY);
            //   return [posX, posY];
            // },
            formatter: function(params) {
              let result = '';
              for (let i in params) {
                if (i == 0) {
                  result += (params[i].name + ' :');
                  result += ('\n' + params[i].seriesName.split('&')[0] + ' : ' + (params[i].value.toFixed(2)) + ' ' + params[i].seriesName.split('&')[1]);
                } else {
                  result += ('\n' + params[i].seriesName.split('&')[0] + ' : ' + (params[i].value.toFixed(2)) + ' ' + params[i].seriesName.split('&')[1]);
                }
              }
              return result;
            }
          },
          xAxis: [{
            show: true,
            type: 'category',
            color: '#fff',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLabel: {
              textStyle: {
                color: '#fff'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            }
          }],
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [1, 2, 5, 7, 8, 9],
            type: 'line'
          }]
        };
        this.chart.setOption(option);
        // 注意这里一定要返回chart实例，否则会影响事件处理等
        return this.chart;
      })
    },
    handleTabbarClick(event) {
      this.setData({
        currentIndex: event.detail.index
      })
    },
    handJump() {
      wx.navigateTo({
        url: '/pages/forget/forget',
      })
    },
    handScan() {
      wx.scanCode({
        success: (res) => {
          console.log(res);
        },
        fail: (res) => {
          console.log(res);
        },
        complete: (res) => {
          console.log(res);
        }
      })
    },
    pay() {
      wx.navigateToMiniProgram({
        appId: 'wx4322e95683918be0', //要打开的小程序 appId
        path: '', //打开的页面路径，如果为空则打开首页
        extraData: {
          foo: 'bar' //需要传递给目标小程序的数据，目标小程序可在 App.onLaunch，App.onShow 中获取到这份数据
        },
        envVersion: 'develop', //要打开的小程序版本。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。
        success(res) {
          // 打开成功
        },
        fail() {
          console.log('fail');
        }
      })

      // wx.chooseImage({
      //   sizeType: ['original', 'compressed'], //可选择原图或压缩后的图片
      //   sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      //   success: res => {
      //     const images = this.data.images.concat(res.tempFilePaths)
      //     // 限制最多只能留下3张照片
      //     this.data.images = images.length <= 3 ? images : images.slice(0, 3)
      //     $digest(this)
      //   }
      // });

      // wx.login({
      //   success(res) {
      //     if (res.code) {
      //       console.log(res);
      //       // res.code请求后台换取openid

      //       let secretId = '14b90e2dc0f769bad1a8bffe437c6b06';
      //       console.log(MD5('appId=wxd678efh567hg6787&nonceStr=5K8264ILTKCH16CQ2502SI8ZNMTM67VS&package=prepay_id=wx2017033010242291fcfe0db70013231072&signType=MD5&timeStamp=1490840662&key=qazwsxedcrfvtgbyhnujmikolp111111'));
      //       wx.requestPayment({
      //         'timeStamp': '',
      //         'nonceStr': '',
      //         'package': '',
      //         'signType': 'MD5',
      //         'paySign': ('appId = wxd678efh567hg6787 & nonceStr=5K8264ILTKCH16CQ2502SI8ZNMTM67VS & package=prepay_id = wx2017033010242291fcfe0db70013231072 & signType=MD5 & timeStamp=1490840662 & key=qazwsxedcrfvtgbyhnujmikolp111111'),
      //         'success': function(res) {
      //           console.log('success' + res);
      //         },
      //         'fail': function(res) {
      //           console.log('fail' + res);
      //         },
      //         'complete': function(res) {
      //           console.log('complete' + res);
      //         }
      //       })

      //     } else {
      //       console.log('登录失败！' + res.errMsg)
      //     }
      //   }
      // })

    },
  }
})