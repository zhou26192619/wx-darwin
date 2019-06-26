Component({
  externalClasses: [],
  relations: {
    '../timeline/timeline': {
      type: 'parent', // 关联的目标节点应为子节点
      linked: function(target) {
        // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
        console.log(target);
      },
      linkChanged: function(target) {
        // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
      },
      unlinked: function(target) {
        // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
      }
    }
  },
  properties: {
    node: {
      type: Object,
      value: {
        deviation: 8,
        dot: {
          normal: 'background:#aaa;',
          arrive: 'background:green;'
        },
        line: {
          normal: 'background:#aaa;',
          arrive: 'background:green;'
        }
      }
    },
    showLine: {
      type: Boolean,
      value: true,
      observer: function(nv, ov) {
        console.log(nv, ov);
        this.setData({
          myShowLine: nv
        })
      }
    },
    mode: {
      type: String, //left,right
      value: 'right',
      observer: function(nv, ov) {
        this.setData({
          myMode: nv
        })
      }
    },
    status: {
      type: Boolean,
      value: false
    }
  },
  options: {
    multipleSlots: true
  },
  data: {
    myShowLine: true,
    myMode: 'unilateral',
    myDirection: 'right'
  },
  methods: {
    handleClick(e) {
      this.triggerEvent("onClick", e.currentTarget.dataset.item);
    }
  }
})