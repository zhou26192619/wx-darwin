Component({
  externalClasses: ['custom-class'],
  properties: {
    src: {
      type: String,
      value: '',
      observer: function(nv, ov) {
        this.setData({
          'mySrc': nv
        })
      }
    },
    mode: {
      type: String,
      value: 'scaleToFill'
    },
    'lazy-load': {
      type: Boolean,
      value: false
    },
    longpress: {
      type: Boolean,
      value: false
    },
    defaultSrc: {
      type: String,
      value: null
    },
  },
  data: {
    mySrc: ''
  },
  methods: {
    handleErr(event) {
      this.setData({
        mySrc: this.properties.defaultPath
      })
    }
  }
})