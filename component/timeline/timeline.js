Component({
  externalClasses: [],
  relations: {
    '../timeline-item/timeline-item': {
      type: 'child', // 关联的目标节点应为子节点
      linked: function(target) {
        // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
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
    mode: {
      type: String, //both,left,right
      value: 'right'
    }
  },
  options: {
    multipleSlots: true
  },
  data: {},
  ready() {
    let nodes = this.getRelationNodes('../timeline-item/timeline-item');
    if (nodes) {
      //最后一个不显示线
      nodes[nodes.length - 1].setData({
        myShowLine: false
      });
      //设置显示方向和模式
      for (let i = 0; i < nodes.length; i++) {
        let mode;
        let direction;
        if (this.properties.mode == 'both') {
          direction = i % 2 == 0 ? 'left' : 'right';
          mode = this.properties.mode;
        } else {
          direction = this.properties.mode;
          mode = 'unilateral'
        }
        nodes[i].setData({
          myMode: mode,
          myDirection: direction
        });
      }
    }
  },
  methods: {}
})