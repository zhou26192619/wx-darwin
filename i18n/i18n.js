import locales from './locales'

const T = {
  locale: wx.getStorageSync('language') || wx.getSystemInfoSync().language,
  locales: locales,
  langCodes: ['zh_CN', 'en']
}

T.registerLocale = function(locales) {
  T.locales = locales;
}

T.setLocale = function(code) {
  T.locale = code;
  wx.setStorageSync('language', code);
}


T.getLanguage = function(mod) {
  //预处理一些设备上的字体表示不统一
  let localeId = T.locale === 'zh' ? T.langCodes[0] : T.locale;
  let l = T.locales[localeId];
  if (!l) l = T.locales['en'];
  if (mod) {
    return l[mod]
  } else {
    return l
  }
}

export default T