const app = getApp();

Component({
  externalClasses: ['main-class', 'title-class', 'holder-class', 'text-class', 'icon-class'],
  properties: {
    type: {
      type: String,
      value: 'text'
    },
    placeholder: {
      type: String,
      value: ''
    },
    icon: {
      type: String,
      value: null,
    },
    title: {
      type: String,
      value: null
    },
    maxlength: {
      type: Number,
      value: 140
    },
  },
  data: {
    inValue: null,
    isFocus: false
  },
  methods: {
    hindleFocus(e) {
      this.setData({
        isFocus: true
      })
    },
    handleBlur(e) {
      this.setData({
        isFocus: false
      })
      this.triggerEvent("onBlur", event.detail.value);
    },
    handleInput(event) {
      this.setData({
        inValue: event.detail.value
      })
      this.triggerEvent("onInput", event.detail.value);
    }
  }
})