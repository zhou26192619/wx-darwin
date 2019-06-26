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

  request.headers = {//设置请求头
    'content-type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  }

  return request;
})

function post(url, params, callback, err) {
  fly.post(url, params).then(callback).catch(err);
}

function err(err) {
  console.log(err);
  wx.showToast({
    title: wx.T.getLanguage(mod)['netErr'],
    icon: 'none',
    duration: 1000,
    mask: true
  })
}

module.exports = {
  post: post,
  login(params, callback) {
    post(util.urls.login, params, callback, err);
  }, 
  //组织机构首页面
  getCompanyInfo(params, callback) {
    fly.post(util.urls.getCompanyInfo, params).then(callback).catch(err);
  },
  getValidAlarmNumAndValidMaintenanceNumForCompany(flag, params, callback) {
    if (flag) {
      fly.post(util.urls.getValidAlarmNumAndValidMaintenanceNumForCompany, params).then(callback).catch(err);
    } else {
      fly.post(util.urls.getValidAlarmNumAndValidMaintenanceNumForSystem, {}).then(callback).catch(err);
    }
  },
  getStationConstructionForCompany(flag, params, callback) {
    if (flag) {
      fly.post(util.urls.getStationConstructionForCompany, params).then(callback).catch(err);
    } else {
      fly.post(util.urls.getStationConstructionForSystem, {}).then(callback).catch(err);
    }
  },
  getStatisticsForCompany(flag, params, callback) {
    if (flag) {
      fly.post(util.urls.getStatisticsForCompany, params).then(callback).catch(err);
    } else {
      fly.post(util.urls.getStatisticsForSystem, {}).then(callback).catch(err);
    }
  },
  //组织机构-电站列表
  getStationInfoWithAlarmAndTodayEnergyListForCompany(params, callback) {
    fly.post(util.urls.getStationInfoWithAlarmAndTodayEnergyListForCompany, params).then(callback).catch(err);
  },
  //组织机构起始日期
  getBDForCompany(params, callback) {
    fly.post(util.urls.getBDForCompany, params).then(callback).catch(err);
  },
  //组织机构-图表
  getDailyEnergyWithIrradiationInPeriodForCompany(flag, params, callback) {
    if (flag) {
      fly.post(util.urls.getDailyEnergyWithIrradiationInPeriodForCompany, params).then(callback).catch(err);
    } else {
      fly.post(util.urls.getDailyEnergyWithIrradiationInPeriodForSystem, params).then(callback).catch(err);
    }
  },
  getMonthlyEnergyWithIrradiationInLast12MonthForCompany(flag, params, callback) {
    if (flag) {
      fly.post(util.urls.getMonthlyEnergyWithIrradiationInLast12MonthForCompany, params).then(callback).catch(err);
    } else {
      fly.post(util.urls.getMonthlyEnergyWithIrradiationInLast12MonthForSystem, params).then(callback).catch(err);
    }
  },
  getYearlyEnergyWithIrradiationForCompany(flag, params, callback) {
    if (flag) {
      fly.post(util.urls.getYearlyEnergyWithIrradiationForCompany, params).then(callback).catch(err);
    } else {
      fly.post(util.urls.getYearlyEnergyWithIrradiationForSystem, {}).then(callback).catch(err);
    }
  },
  //电站首页面
  getValidMaintenanceNumForStation(params, callback) {
    fly.post(util.urls.getValidMaintenanceNumForStation, params).then(callback).catch(err);
  },
  getProductionForStation(params, callback) {
    fly.post(util.urls.getProductionForStation, params).then(callback).catch(err);
  },
  getAllDeviceAlarmInfoByStationId(params, callback) {
    fly.post(util.urls.getAllDeviceAlarmInfoByStationId, params).then(callback).catch(err);
  },
  getStationInfo(params, callback) {
    fly.post(util.urls.getStationInfo, params).then(callback).catch(err);
  },
  //电站起始日期
  getBDForStation(params, callback) {
    fly.post(util.urls.getBDForStation, params).then(callback).catch(err);
  },
  //电站汇总信息
  getDayPowerWithIrraForStation(params, callback) {
    fly.post(util.urls.getDayPowerWithIrraForStation, params).then(callback).catch(err);
  },
  getDailyEnergyInPeriodForStation(params, callback) {
    fly.post(util.urls.getDailyEnergyInPeriodForStation, params).then(callback).catch(err);
  },
  getMonthlyEnergyInLast12MonthForStation(params, callback) {
    fly.post(util.urls.getMonthlyEnergyInLast12MonthForStation, params).then(callback).catch(err);
  },
  getLast12MonthlyIrradiationForStation(params, callback) {
    fly.post(util.urls.getLast12MonthlyIrradiationForStation, params).then(callback).catch(err);
  },
  getYearlyEnergyForStation(params, callback) {
    fly.post(util.urls.getYearlyEnergyForStation, params).then(callback).catch(err);
  },
  getYearlyIrradiationForStation(params, callback) {
    fly.post(util.urls.getYearlyIrradiationForStation, params).then(callback).catch(err);
  },
  getDailyIrradiationInPeriodForStation(params, callback) {
    fly.post(util.urls.getDailyIrradiationInPeriodForStation, params).then(callback).catch(err);
  },
  //电站组件信息
  getAllStringInfoForStation(params, callback) {
    fly.post(util.urls.getAllStringInfoForStation, params).then(callback).catch(err);
  },
  getDayProductionDetailForString(params, callback) {
    fly.post(util.urls.getDayProductionDetailForString, params).then(callback).catch(err);
  },
  getLastPowerForDcDeviceBelowStringInverter(params, callback) {
    fly.post(util.urls.getLastPowerForDcDeviceBelowStringInverter, params).then(callback).catch(err);
  },
  getDailyEnergyForString(params, callback) {
    fly.post(util.urls.getDailyEnergyForString, params).then(callback).catch(err);
  },
  getYearlyEnergyForString(params, callback) {
    fly.post(util.urls.getYearlyEnergyForString, params).then(callback).catch(err);
  },
  getMonthlylyEnergyorString(params, callback) {
    fly.post(util.urls.getMonthlylyEnergyorString, params).then(callback).catch(err);
  },
}