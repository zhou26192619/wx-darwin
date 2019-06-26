Component({
  properties: {
    placeholder: {
      type: String,
      value: '请输入关键字'
    },
    placeholderStyle: {
      type: String,
      value: ''
    },
    preIcon: {
      type: String,
      value: null
    },
    sufIcon: {
      type: String,
      value: null
    },

  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的初始数据
   */
  data: {
    range: ['1rewrewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww', '3', '2'],
    rangeKey: '',
    isOpon: false,
    value: ''
  },
  attached: function() {},
  /**
   * 组件的方法列表
   */
  methods: {
    handleInput(e) {
      this.setData({
        value: e.detail.value
      })
    },
    handleChange(e) {
      this.setData({
        value: this.data.range[e.detail.value]
      })
      this.handleCancel();
    },
    handleCancel(e) {
      this.setData({
        isOpon: false
      })
    },
    handleShow(e) {
      this.setData({
        isOpon: true
      })
    }
  }
})