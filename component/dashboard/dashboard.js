Component({
  properties: {
    canvasId: {
      type: String,
      value: ''
    },
    data: {
      type: Object,
      value: {
        total: 100,
        current: 99,
        title: 'PR'
      },
      observer: function(newV, oldV) {
        this.draw();
      }
    },
    look: {
      type: Object,
      value: {
        circle: {
          lineWidth: 8,
          lineCap: "round",
          start: 0.125,
          end: 0.875,
          shadow: {
            width: 6
          },
          colors: ['rgb(92,111,255) 0', 'rgb(0,192,255) 0.5', 'rgb(250,165,10) 1'],
        },
        scale: {
          distance: 10,
          step: 0.02,
          spacing: 0.01,
          width: 3,
          lineCap: 'butt'
        },
        title: {
          color: '#ffffff',
          fontSize: 30
        },
        value: {
          color: '#ffffff',
          fontSize: 16,
          fixed: 0,
          offsetX: 0,
          offsetY: 8
        },
        animate: {
          duration: 2000
        }
      }
    }
  },
  data: {
    myData: {},
    height: 0,
    width: 0,
    center: {
      x: 0,
      y: 0
    },
    r: 0,
    startAngle: 0,
    endAngle: 0,
    count: 0,
    colors: [],
    progressStepAngle: 0, //进度条的步距
    spacingAngle: 0,
    stepAngle: 0, //刻度的步距
    timer: null
  },
  ready(e) {
    this.init();
  },
  methods: {
    gradientColor(step, colors) {
      let colorArr = [];
      for (let index = 0; index < colors.length - 1; index++) {
        let startColor = colors[index].split(' ');
        let endColor = colors[index + 1].split(' ');
        let start = [];
        startColor[0].replace(/\d{1,3}/g, function(kw) { //提取rgb数字
          start.push(parseInt(kw));
        });
        let startR = start[0];
        let startG = start[1];
        let startB = start[2];
        let end = [];
        endColor[0].replace(/\d{1,3}/g, function(kw) { //提取rgb数字
          end.push(parseInt(kw));
        });
        let endR = end[0];
        let endG = end[1];
        let endB = end[2];
        let ds = ((parseFloat(endColor[1]) - parseFloat(startColor[1])) * step);
        let sR = (endR - startR) / ds;
        let sG = (endG - startG) / ds;
        let sB = (endB - startB) / ds;
        for (let i = 0; i < ds; i++) {
          colorArr.push('rgb(' + parseInt((sR * i + startR)) + ',' + parseInt((sG * i + startG)) + ',' + parseInt((sB * i + startB)) + ')');
        }
      }
      return colorArr;
    },

    drawDisc() {
      // 绘制刻度盘
      let ctx = wx.createCanvasContext(this.properties.canvasId, this);
      ctx.setStrokeStyle('#004b55');
      ctx.setShadow(0, 0, this.properties.look.circle.shadow.width, 'rgba(0,0,0,0.35)')
      ctx.setLineWidth(this.properties.look.circle.lineWidth);
      ctx.setLineCap(this.properties.look.circle.lineCap);
      ctx.beginPath();
      ctx.arc(this.data.center.x, this.data.center.y, this.data.r, this.data.startAngle, this.data.endAngle, false);
      ctx.stroke();
      ctx.closePath();
      ctx.save();

      // 绘制刻度
      let scaleR = this.data.r - this.properties.look.scale.distance;
      ctx.setLineWidth(this.properties.look.scale.width);
      for (let i = 0; i < this.data.count; i++) {
        ctx.beginPath();
        ctx.setStrokeStyle(this.data.colors[Math.floor(this.properties.data.total * this.properties.look.scale.step * i)]);
        ctx.setLineCap(this.properties.look.scale.lineCap);
        ctx.arc(this.data.center.x, this.data.center.y, scaleR, this.data.startAngle + this.data.stepAngle * i,
          this.data.startAngle + this.data.stepAngle * (i + 1) - this.data.spacingAngle, false);
        ctx.stroke();
        ctx.closePath();
        ctx.save();
      }

      ctx.beginPath();
      ctx.setFontSize(this.properties.look.title.fontSize);
      let cg = ctx.createCircularGradient(this.data.center.x, this.data.center.y, scaleR);
      cg.addColorStop(0, 'rgba(6,168,220,1)');
      cg.addColorStop(0.5, 'rgba(13,147,187,0.7)');
      cg.addColorStop(1, 'rgba(18,124,152,0)');
      ctx.setFillStyle(cg);
      ctx.arc(this.data.center.x, this.data.center.y, scaleR, 0, Math.PI * 2, false);
      let scaleX = 1;
      let scaleY = 0.6;
      ctx.translate(this.data.center.x * (1 - scaleX), this.data.center.y * (1 - scaleY));
      ctx.scale(scaleX, scaleY);
      ctx.fill();
      ctx.closePath();
      ctx.restore();

      //绘制文字
      ctx.beginPath();
      ctx.setFillStyle(this.properties.look.title.color);
      ctx.setFontSize(this.properties.look.title.fontSize);
      ctx.fillText(this.properties.data.title, this.data.width / 2 - ctx.measureText(this.properties.data.title).width / 2, this.data.height / 2 + this.properties.look.title.fontSize * 0.4);
      ctx.fill();
      ctx.stroke();
      ctx.save();

      ctx.draw();
    },
    drawProgress(current) {
      // 绘制进度条
      let ctx = wx.createCanvasContext(this.properties.canvasId + "2", this);
      for (let i = 0; i < current; i++) {
        ctx.beginPath();
        ctx.setStrokeStyle(this.data.colors[i]);
        ctx.setLineWidth(this.properties.look.circle.lineWidth);
        ctx.setLineCap(this.properties.look.circle.lineCap);
        ctx.arc(this.data.center.x, this.data.center.y, this.data.r, this.data.startAngle + this.data.progressStepAngle * i,
          this.data.startAngle + this.data.progressStepAngle * (i + 1), false);
        ctx.stroke();
        ctx.closePath();
        ctx.save();
      }

      ctx.beginPath();
      let persent = Math.round(current / this.properties.data.total * 10000 / 100).toFixed(this.properties.look.value.fixed) + '%';
      ctx.setFillStyle(this.properties.look.value.color);
      ctx.setFontSize(this.properties.look.value.fontSize);
      ctx.fillText(persent, this.data.width / 2 - ctx.measureText(persent).width / 2 + this.properties.look.value.offsetX, this.data.height - this.properties.look.title.fontSize / 2)
      ctx.stroke();
      ctx.closePath();
      ctx.save();

      ctx.draw();
    },
    draw() {
      let i = 0;
      if (this.data.timer) clearInterval(this.data.timer);
      this.data.timer = setInterval(() => {
        if (i > this.properties.data.current) {
          clearInterval(this.data.timer);
        } else {
          this.drawProgress(i);
          i++;
        }
      }, this.properties.look.animate.duration / this.properties.data.current);
    },
    init() {
      wx.createSelectorQuery().in(this).select('#' + this.properties.canvasId).boundingClientRect().exec((res) => {
        if (res[0]) {
          let r = Math.min(res[0].width, res[0].height) / 2 - this.properties.look.circle.lineWidth / 2 - this.properties.look.circle.shadow.width;
          let center = {
            x: res[0].width / 2,
            y: res[0].height / 2
          };
          let startAngle = Math.PI * 2 * this.properties.look.circle.start + 0.5 * Math.PI;
          let endAngle = Math.PI * 2 * this.properties.look.circle.end + 0.5 * Math.PI;
          let count = 1 / this.properties.look.scale.step;
          let colors = this.gradientColor(this.properties.data.total, this.properties.look.circle.colors);
          let progressStepAngle = (endAngle - startAngle) / this.properties.data.total;
          let spacingAngle = (endAngle - startAngle) * this.properties.look.scale.spacing;
          let stepAngle = (endAngle - startAngle + spacingAngle) * this.properties.look.scale.step;

          this.setData({
            height: res[0].height,
            width: res[0].width,
            center: center,
            count: count,
            colors: colors,
            spacingAngle: spacingAngle,
            stepAngle: stepAngle,
            progressStepAngle: progressStepAngle,
            r: r,
            startAngle: startAngle,
            endAngle: endAngle
          }, () => {
            this.drawDisc();
          })
        }
      });
    }
  }
})