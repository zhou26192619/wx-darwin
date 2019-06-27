const util = require('../utils/util.js')
const Fly = require("../lib/fly/wx.js")
let fly = new Fly;
let mod = "api";

fly.interceptors.request.use((request) => {
  request.timeout = 30000;

  let encryptMap = util.encrypt(request.body);
  for (let key in encryptMap) {
    request.body[key] = encryptMap[key];
  }

  request.headers = { //设置请求头
    'content-type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  }

  return request;
})

function post(url, params, callback, err) {
  fly.post(url, params).then(callback).catch(err);
}

function err(err) {
  wx.showToast({
    title: 'Errorr',
    icon: 'none',
    duration: 1000,
    mask: true
  })
}

module.exports = {
  post: post,
  login(params, callback) {
    post(util.urls.login, params, callback, err);
  }
}