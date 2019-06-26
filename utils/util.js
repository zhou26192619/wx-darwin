const CryptoJS = require('crypto-js');
const app = getApp();
const apiuser = "admin";
const access_token = "4029817264d4821d0164d4821dd80000";
const host = 'https://api.dpv.siemens.com.cn';
const port = '8443'
const url = '/APIForCloudy'
const urls = {

}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return [year, month, day].map(formatNumber).join('-')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getDateBefore(date, days) {
  let dateStr = date.replace(/-/g, "/");
  let dateObject = new Date(dateStr)

  let lw = new Date(dateObject - 1000 * 60 * 60 * 24 * days);
  let lastY = lw.getFullYear();
  let lastM = lw.getMonth() + 1;
  let lastD = lw.getDate();
  let startdate = lastY + "-" + (lastM < 10 ? "0" + lastM : lastM) + "-" + (lastD < 10 ? "0" + lastD : lastD);
  return startdate;
}

function nullTurnZeroArray(array) {
  for (let i in array) {
    if (array[i] == null || array[i] == '') {
      array[i] = 0;
    }
  }
  return array;
}

function nullTurnZero(data) {
  if (data == null || data == '') {
    return 0;
  }
  return data;
}

function toThousands(num) {
  num = (num || 0).toString();
  let point = num.split('.')[1];
  num = num.split('.')[0];
  var result = '';
  while (num.length > 3) {
    result = ',' + num.slice(-3) + result;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  if (point != null) {
    return result + '.' + point;
  } else {
    return result;
  }
}

function toThousandsInt(num) {
  if (num > 0 && num < 0.1) {
    return toThousands(num.toFixed(2));
  } else if (num >= 0.1 && num < 1) {
    return toThousands(num.toFixed(1));
  } else {
    return toThousands(parseInt(num));
  }
}

function turnNull(string) {
  if (string == null || string == '') {
    return "-";
  } else {
    return string;
  }
}

function wrapString(str, num) {
  if (wx.T.locale == 'en') {
    return str.replace(/(.{30})/g, '$1\n');
  } else {
    return str.replace(/(.{15})/g, '$1\n');
  }
}

function changeUnit(num) {
  if (typeof(num) == 'number') {
    // if (wx.T.locale == 'en') {
    if (num < 1000) {
      return num;
    } else if (1000 <= num && num < 1000000) {
      return toThousands((num / 1000).toFixed(1)) + 'K';
    } else if (1000000 <= num && num < 1000000000) {
      return toThousands((num / 1000000).toFixed(1)) + 'M';
    } else {
      return toThousands((num / 1000000000).toFixed(1)) + 'G';
    }
    // } else {
    //   if (num < 10000) {
    //     return toThousands(num);
    //   } else if (10000 <= num && num < 100000000) {
    //     return toThousands((num / 10000).toFixed(1)) + '万';
    //   } else {
    //     return toThousands((num / 100000000).toFixed(1)) + '亿';
    //   }
    // }
  } else {
    return num;
  }
}

function getMonthsByStart(start, num) {
  let monthArray = [start.substring(0, 4) + '-' + start.substring(4, 6)];
  let year = start.substring(0, 4);
  let month = start.substring(4, 6);
  for (let i = 1; i < num; i++) {
    let monthItem = parseInt(month) + i;
    let yearItem = parseInt(year);
    if (monthItem > 12) {
      monthItem = monthItem % 12;
      yearItem = yearItem + Math.ceil(monthItem / 12);
      monthArray.push(yearItem + '-' + formatNumber(monthItem));
    } else {
      monthArray.push(yearItem + '-' + formatNumber(monthItem));
    }
  }
  return monthArray;
}

function getMonthsByStartShort(start, num) {
  let monthArray = [parseInt(start.substring(4, 6))];
  let year = start.substring(0, 4);
  let month = start.substring(4, 6);
  for (let i = 1; i < num; i++) {
    let monthItem = parseInt(month) + i;
    let yearItem = parseInt(year);
    if (monthItem > 12) {
      monthItem = monthItem % 12;
      yearItem = yearItem + Math.ceil(monthItem / 12);
      monthArray.push(monthItem);
    } else {
      monthArray.push(monthItem);
    }
  }
  return monthArray;
}

function encodeUtf8(s1) {
  var s = escape(s1);
  var sa = s.split("%");
  var retV = "";
  if (sa[0] != "") {
    retV = sa[0];
  }
  for (var i = 1; i < sa.length; i++) {
    if (sa[i].substring(0, 1) == "u") {
      retV += Hex2Utf8(Str2Hex(sa[i].substring(1, 5)));

    } else retV += "%" + sa[i];
  }

  return retV;
}

//API请求规则
function encrypt(data) {
  let language = '';
  if (wx.T.locale == 'zh_CN') {
    language = 'zh_CN';
  } else {
    language = 'en_US';
  }
  data["apiuser"] = apiuser;
  data["access_token"] = access_token;
  data["language"] = language;
  let keyList = [];
  for (let key in data) {
    //遍历
    keyList.push(key);
  }

  for (let i = 0; i < keyList.length; i++) {
    for (let j = i + 1; j < keyList.length; j++) {
      let compareFlag = compareTwoString(keyList[i], keyList[j]);
      if (!compareFlag) {
        let temp = keyList[i];
        keyList[i] = keyList[j];
        keyList[j] = temp;
      }
    }
  }

  let result = "";
  for (let key in keyList) {
    result += keyList[key];
    result += data[keyList[key]];
  }

  let toUtf = encodeURIComponent(result, "UTF-8");
  //encodeURIComponent方法 ！'()~ 不转，需要手动转换
  toUtf = toUtf.replace(/!/g, "%21");
  toUtf = toUtf.replace(/\'/g, "%27");
  toUtf = toUtf.replace(/\(/g, "%28");
  toUtf = toUtf.replace(/\)/g, "%29");
  toUtf = toUtf.replace(/~/g, "%7E");

  let keyString = CryptoJS.HmacSHA1(toUtf, "aps2018");

  let resultMap = {
    "checkcode": keyString.toString().toUpperCase(),
    "apiuser": apiuser,
    "access_token": access_token,
    "language": language
  }

  return resultMap;
}

function getChartMarginLeftByMax(max) {
  if (max <= 0.05) {
    return 34;
  } else if (max <= 0.5) {
    return 27;
  } else if (max <= 1) {
    return 10;
  } else if (max <= 5) {
    return 30;
  } else if (max <= 10) {
    return 17;
  } else if (max <= 100) {
    return 24;
  } else if (max <= 1000) {
    return 30;
  } else if (max <= 10000) {
    return 35;
  } else if (max <= 100000) {
    return 40;
  } else if (max <= 1000000) {
    return 50;
  } else if (max <= 10000000) {
    return 28;
  } else if (max <= 100000000) {
    return 28;
  }
}

function getChartMarginLeft(dataList) {
  if (dataList == null) {
    return 0;
  }
  let max = 0;
  let tempList = nullTurnZeroArray(dataList);
  for (var i in tempList) {
    if (tempList[i] > max) {
      max = tempList[i];
    }
  }
  if (max / 4 * 5 < 1) {
    max = max / 4 * 5;
  } else {
    max = Math.ceil(max / 4 * 5);
  }
  let left1 = getChartMarginLeftByMax(max);
  let left2 = getChartMarginLeftByMax(max / 2);
  return left1 > left2 ? left1 : left2;
}

function getChartMarginRightByMax(max) {
  if (max <= 0.05) {
    return 41;
  } else if (max <= 0.5) {
    return 34;
  } else if (max <= 1) {
    return 30;
  } else if (max <= 5) {
    return 30;
  } else if (max <= 10) {
    return 17;
  } else if (max <= 100) {
    return 22;
  } else if (max <= 1000) {
    return 31;
  } else if (max <= 10000) {
    return 35;
  } else if (max <= 100000) {
    return 47;
  } else if (max <= 1000000) {
    return 59;
  } else if (max <= 10000000) {
    return 40;
  } else if (max <= 100000000) {
    return 35;
  }
}

function getChartMarginRight(dataList) {
  if (dataList == null) {
    return 0;
  }
  let max = 0;
  let tempList = nullTurnZeroArray(dataList);
  for (var i in tempList) {
    if (tempList[i] > max) {
      max = tempList[i];
    }
  }
  if (max / 4 * 5 < 1) {
    max = max / 4 * 5;
  } else {
    max = Math.ceil(max / 4 * 5);
  }
  let right1 = getChartMarginRightByMax(max);
  let right2 = getChartMarginRightByMax(max / 2);
  return right1 > right2 ? right1 : right2;
}

//格式化图表数据
function getOption(legend, xAxis, yAxis, series, x, x2) {
  let option = {
    title: {
      show: false
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: legend,
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
      x: x,
      x2: x2
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
            result += ('\n' + params[i].seriesName.split('&')[0] + ' : ' + toThousands(params[i].value.toFixed(2)) + ' ' + params[i].seriesName.split('&')[1]);
          } else {
            result += ('\n' + params[i].seriesName.split('&')[0] + ' : ' + toThousands(params[i].value.toFixed(2)) + ' ' + params[i].seriesName.split('&')[1]);
          }
        }
        return result;
      }
    },
    xAxis: [{
      show: true,
      type: 'category',
      color: '#fff',
      data: xAxis,
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
    yAxis: yAxis,
    series: series
  };
  return option;
}

//x轴map图表
function getOptionForSpecialX(legend, xAxis, yAxis, series) {
  let option = {
    title: {
      show: false
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: legend,
      textStyle: {
        color: 'white'
      },
      formatter: function(name) {
        return name.split('&')[0] + '(' + name.split('&')[1] + ')';
      }
    },
    grid: {
      y: 50,
      x: 50,
      x2: 50,
      left: '18%',
      right: '18%'
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
            result += ('\n' + params[i].seriesName.split('&')[0] + ' : ' + toThousands(params[i].value.toFixed(2)) + ' ' + params[i].seriesName.split('&')[1]);
          } else {
            result += ('\n' + params[i].seriesName.split('&')[0] + ' : ' + toThousands(params[i].value.toFixed(2)) + ' ' + params[i].seriesName.split('&')[1]);
          }
        }
        return result;
      }
    },
    xAxis: xAxis,
    yAxis: yAxis,
    series: series
  };
  return option;
}

//双X轴
function getXsOption(legend, xAxis, yAxis, series) {
  let option = {
    title: {
      show: false
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: legend,
      textStyle: {
        color: 'white'
      },
      formatter: function(name) {
        return name.split('&')[0] + '(' + name.split('&')[1] + ')';
      }
    },
    grid: {
      y: 50,
      x: 50,
      x2: 50,
      left: '18%',
      right: '18%'
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
            result += ('\n' + params[i].seriesName.split('&')[0] + ' : ' + toThousands(params[i].value.toFixed(2)) + ' ' + params[i].seriesName.split('&')[1]);
          } else {
            result += ('\n' + params[i].name + ' :');
            result += ('\n' + params[i].seriesName.split('&')[0] + ' : ' + toThousands(params[i].value.toFixed(2)) + ' ' + params[i].seriesName.split('&')[1]);
          }
        }
        return result;
      }
    },
    xAxis: xAxis,
    yAxis: yAxis,
    series: series
  };
  return option;
}

function copy(obj) {
  if (typeof obj !== 'object') return;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

function compareTwoString(str1, str2) {
  let letter = "abcdefghijklmnopqrstuvwxyz";
  let str1length = str1.length;
  let str2length = str2.length;
  let index1 = 0;
  let index2 = 0;
  if (str1length <= str2length) {
    for (let i = 0; i < str1length; i++) {
      index1 = letter.indexOf(str1.substring(i, i + 1));
      index2 = letter.indexOf(str2.substring(i, i + 1));
      if (index1 < index2) {
        return true;
      } else if (index1 > index2) {
        return false;
      }
    }
    //如果str1前面的字母顺序都和str2前面的字母顺序一样，那么str1长度要短，那么就str1在前面
    return true;
  } else {
    for (let i = 0; i < str2length; i++) {
      index1 = letter.indexOf(str1.substring(i, i + 1));
      index2 = letter.indexOf(str2.substring(i, i + 1));
      if (index1 < index2) {
        return true;
      } else if (index1 > index2) {
        return false;
      }
    }
    return false;
  }

}

function rpx2px(rpx) {
  return rpx / 750 * wx.getSystemInfoSync().windowWidth
}

function px2rpx(px) {
  return px * 750 / wx.getSystemInfoSync().windowWidth
}

module.exports = {
  urls: urls
}