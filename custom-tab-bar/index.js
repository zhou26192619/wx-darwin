Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/index/index",
      text: "首页"
    }, {
      pagePath: "/pages/contacts/contacts",
      text: "联系人"
    }, {
      pagePath: "/pages/about/about",
      text: "我"
    }]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      console.log(data);

      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
    }
  }
})