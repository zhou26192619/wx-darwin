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
    }
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