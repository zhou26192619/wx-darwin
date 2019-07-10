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
  attached: function() {},
  methods: {
    handleTap(e) {
      this.triggerEvent("onClick", e);
    }
  }
})