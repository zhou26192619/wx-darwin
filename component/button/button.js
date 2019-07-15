Component({
  externalClasses: ['custom-class'],
  properties: {
    type: {
      type: String,
      value: ''
    },
    melody: {
      type: String,
      value: ''
    },
    loading: {
      type: Object,
      value: {
        show: false,
        percent: '50%'
      }
    },
    disabled: {
      type: Boolean,
      value: false
    },
  },
  options: {
    multipleSlots: true
  },
  data: {},
  methods: {
    handleTap(e) {
      !this.properties.disabled && this.triggerEvent("onClick", e);
    }
  }
})