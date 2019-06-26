// component/tabbar/tabbar.js
const app = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder: {
      type: String,
      value: '请输入关键字'
    },
    placeholderStyle: {
      type: String,
      value: ''
    },
    icon: {
      type: String,
      value: "",
    },
    list: {
      type: Array,
      value: []
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},
  /**
   * 组件的方法列表
   */
  methods: {
    handleInput(event) {
      this.triggerEvent("onInput", event.detail.value);
    }
  }
})