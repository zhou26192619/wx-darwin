import * as echarts from '../../lib/ec-canvas/echarts';
const app = getApp()
Page({
  data: {
    language: null,
    navHeight: app.data.navHeight,
    navbar: {},
    ec: {
      lazyLoad: true
    }
  },
  onReady: function() {
    this.setData({
      language: app.data.language['company']['index'],
      tabbars: app.data.language['company']['tabbar'],
    });
    this.initChart();
  },
  initChart() {
    this.selectComponent('#mychart').init((canvas, width, height) => {
      // 初始化图表
      this.chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      // let option = {
      //   title: {
      //     show: false
      //   },
      //   legend: {
      //     x: 'center',
      //     y: 'bottom',
      //     textStyle: {
      //       color: 'white',
      //       fontSize: '10'
      //     },
      //     itemHeight: '12',
      //     formatter: function(name) {
      //       return name.split('&')[0] + '(' + name.split('&')[1] + ')';
      //     }
      //   },
      //   grid: {
      //     y: 40,
      //     y2: 50,
      //     x: 40,
      //     x2: 50
      //   },
      //   tooltip: {
      //     trigger: 'axis',
      //     position: function(point, params, dom, rect, size) {
      //       //其中point为当前鼠标的位置，size中有两个属性：viewSize和contentSize，分别为外层div和tooltip提示框的大小
      //       var x = point[0]; //
      //       var y = point[1];
      //       var viewWidth = size.viewSize[0];
      //       var viewHeight = size.viewSize[1];
      //       var boxWidth = size.contentSize[0];
      //       var boxHeight = size.contentSize[1];
      //       var posX = 0; //x坐标位置
      //       var posY = 0; //y坐标位置
      //       if (x < boxWidth) { //左边放不开
      //         posX = 5;
      //       } else { //左边放的下
      //         posX = x - boxWidth;
      //       }
      //       if (y < boxHeight) { //上边放不开
      //         posY = 5;
      //       } else { //上边放得下
      //         posY = y - boxHeight;
      //       }
      //       return [posX, posY];
      //     },
      //     formatter: function(params) {
      //       let result = '';
      //       for (let i in params) {
      //         if (i == 0) {
      //           result += (params[i].name + ' :');
      //           result += ('\n' + params[i].seriesName.split('&')[0] + ' : ' + (params[i].value.toFixed(2)) + ' ' + params[i].seriesName.split('&')[1]);
      //         } else {
      //           result += ('\n' + params[i].seriesName.split('&')[0] + ' : ' + (params[i].value.toFixed(2)) + ' ' + params[i].seriesName.split('&')[1]);
      //         }
      //       }
      //       return result;
      //     }
      //   },
      //   xAxis: [{
      //     show: true,
      //     type: 'category',
      //     color: '#fff',
      //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      //     axisLabel: {
      //       textStyle: {
      //         color: '#fff'
      //       }
      //     },
      //     axisLine: {
      //       lineStyle: {
      //         color: '#fff'
      //       }
      //     }
      //   }],
      //   yAxis: {
      //     type: 'value'
      //   },
      //   series: [{
      //     data: [1, 2, 5, 7, 8, 91, 2, 5, 7, 8, 1, 2, 5, 7, 8, 1, 2, 5, 7, 8, 1, 2, 5, 7, 8, 1, 2, 5, 7, 8, 1, 2, 5, 7, 8],
      //     type: 'line'
      //   }]
      // };
      // this.chart.setOption(option);
      // 注意这里一定要返回chart实例，否则会影响事件处理等
      return this.chart;
    })
  },
  handleTabbarClick(event) {
    this.setData({
      currentIndex: event.detail.index
    })
  },
  handOption() {
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
        position: function(point, params, dom, rect, size) {
          //其中point为当前鼠标的位置，size中有两个属性：viewSize和contentSize，分别为外层div和tooltip提示框的大小
          var x = point[0]; //
          var y = point[1];
          var viewWidth = size.viewSize[0];
          var viewHeight = size.viewSize[1];
          var boxWidth = size.contentSize[0];
          var boxHeight = size.contentSize[1];
          var posX = 0; //x坐标位置
          var posY = 0; //y坐标位置
          if (x < boxWidth) { //左边放不开
            posX = 5;
          } else { //左边放的下
            posX = x - boxWidth;
          }
          if (y < boxHeight) { //上边放不开
            posY = 5;
          } else { //上边放得下
            posY = y - boxHeight;
          }
          return [posX, posY];
        },
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
  },
  handOption2() {
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
        position: function(point, params, dom, rect, size) {
          //其中point为当前鼠标的位置，size中有两个属性：viewSize和contentSize，分别为外层div和tooltip提示框的大小
          var x = point[0]; //
          var y = point[1];
          var viewWidth = size.viewSize[0];
          var viewHeight = size.viewSize[1];
          var boxWidth = size.contentSize[0];
          var boxHeight = size.contentSize[1];
          var posX = 0; //x坐标位置
          var posY = 0; //y坐标位置
          if (x < boxWidth) { //左边放不开
            posX = 5;
          } else { //左边放的下
            posX = x - boxWidth;
          }
          if (y < boxHeight) { //上边放不开
            posY = 5;
          } else { //上边放得下
            posY = y - boxHeight;
          }
          return [posX, posY];
        },
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
      yAxis: [{
          type: 'value',
          name: 'energy',
          splitNumber: 4,
          "axisLine": {
            "show": false
          },
          "axisTick": {
            "show": false
          },
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
          },
          nameTextStyle: {
            color: '#fff'
          }
        },
        {
          type: 'value',
          name: 'irra',
          splitNumber: 4,
          "axisLine": {
            "show": false
          },
          "axisTick": {
            "show": false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
          },
          nameTextStyle: {
            color: '#fff'
          }
        }
      ],
      series: [{
        data: [8, 7, 6, 5, 4, 38, 7, 6, 5, 4, 38, 7, 6, 5, 4, 38, 7, 6, 5, 4, 3],
        type: 'line'
      }]
    };
    this.chart.setOption(option);
  },
  handJump() {
    wx.navigateTo({
      url: '/pages/forget/forget',
    })
  },
  onHide(){
    wx.showToast({
      title: 'onHide',
    })
  },
  onUnload() {
    wx.showToast({
      title: 'onUnload',
    })
  }
})