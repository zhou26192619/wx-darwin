Component({
  externalClasses: ['custem-class'],
  properties: {
    defaultIndex: {
      type: Array,
      value: [0],
      observer: function(nv, ov) {
        this.setData({
          myDefaultIndex: nv
        })
      }
    },
    list: {
      type: Array,
      value: [],
      observer: function(nv, ov) {
        this.organize(this.properties.defaultIndex);
        this.findRealObj(this.properties.defaultIndex);
      }
    },
    mode: {
      type: String,
      value: 'multiSelector'
    },
    rangeKey: {
      type: String,
      value: NaN
    },
    /**
     * 是否首次触发
     */
    firstTrigger: {
      type: Boolean,
      value: false
    },
    option: {
      type: Object,
      value: {
        color: 'white'
      }
    }
  },
  data: {
    myList: [],
    myDefaultIndex: [],
    selector: '',
    isTriggered: false,
  },
  ready() {
    this.trigger();
  },
  methods: {
    trigger() {
      if (!this.data.isTriggered && this.properties.firstTrigger) {
        this.findRealObj(this.properties.defaultIndex);
      }
    },
    /**
     * 根据位置查找相应的数组
     */
    organize(mutiIndex) {
      let temp = this.properties.list;
      if (temp.length == 0) return;
      let list = [];
      for (let i = 0; i < mutiIndex.length; i++) {
        //遍历当前层级组成，相应列数组数据
        let colList = [];
        list.push(colList);
        if (!(temp && temp.length > 0)) {
          break;
        }
        for (let j = 0; j < temp.length; j++) {
          let obj = {};
          obj[this.properties.rangeKey] = temp[j][this.properties.rangeKey]
          colList.push(obj);
        }
        temp = temp[mutiIndex[i]].children
      }
      this.setData({
        myList: list
      })
    },
    findRealObj(mutiIndex) {
      let obj = this.properties.list;
      if (obj.length == 0) return;
      for (let i = 0; i < mutiIndex.length; i++) {
        if (i < mutiIndex.length - 1) {
          obj = obj[mutiIndex[i]].children
        } else {
          obj = obj[mutiIndex[i]]
        }
      }
      this.setData({
        selector: obj[this.properties.rangeKey]
      })
      this.triggerEvent("onChange", {
        value: obj,
        index: mutiIndex
      });
      this.data.isTriggered = true;
      return obj
    },
    handleChange(e) {
      let r = this.findRealObj(e.detail.value);
      // this.triggerEvent("onChange", {
      //   value: r,
      //   index: e.detail.value
      // });
    },
    handleColumnChange(e) {
      // { column: 0, value: 1 }
      this.data.myDefaultIndex[e.detail.column] = e.detail.value;
      for (let i = e.detail.column + 1; i < this.data.myDefaultIndex.length; i++) {
        this.data.myDefaultIndex[i] = 0;
      }
      if (e.detail.column < this.data.myDefaultIndex.length - 1) {
        //修改数组
        this.organize(this.data.myDefaultIndex);
      }
    }
  }
})