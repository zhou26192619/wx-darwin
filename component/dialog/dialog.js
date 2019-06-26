Component({
  externalClasses: ['cover-class', 'dialog-class'],
  properties: {
    show: {
      type: Boolean,
      value: false,
      observer: function(nv, ov) {
        this.setData({
          'myShow': nv
        })
      }
    },
    option: {
      type: Object,
      value: {
        title: '这是标题',
        content: '这是内容',
        confirm: ' 确定 '
      }
    },
  },
  options: {
    multipleSlots: true
  },
  data: {
    myShow: false
  },
  methods: {
    handleCover(e) {
      this.handleClose(e);
    },
    handleClose(e) {
      this.setData({
        'myShow': false
      });
      this.triggerEvent("onClose", e);
    },
    handleConfirm(e) {
      this.triggerEvent("onConfirm", e);
    }
  }
})