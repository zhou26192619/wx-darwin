const CryptoJS = require('crypto-js');

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

function rpx2px(rpx) {
  return rpx / 750 * wx.getSystemInfoSync().windowWidth
}

function px2rpx(px) {
  return px * 750 / wx.getSystemInfoSync().windowWidth
}

module.exports = {
  urls: urls
}