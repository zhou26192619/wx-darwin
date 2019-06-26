// component/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Array,
      value: []
    },
    currentIndex: {
      type: Number,
      value: 0
    },
    barStyle: {
      type: String,
      value: ""
    },
    itemStyle: {
      type: String,
      value: "color:#009999;background:white;"
    },
    itemSelectedStyle: {
      type: String,
      value: "color:white;background:#009999;"
    },

  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  options: {
    multipleSlots: true
  },
  attached: function() {},
  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(event) {
      if (this.data.currentIndex != event.currentTarget.dataset['item']) {
        this.setData({
          currentIndex: event.currentTarget.dataset['item']
        });
        this.triggerEvent("onClick", this.properties.data[event.currentTarget.dataset['item']]);
      } 
    }
  }
})