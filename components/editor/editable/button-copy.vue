<script>
import baseMixin from '@/mixins/editor/base'
export default {
  name: 'editable-button',

  mixins: [baseMixin],

  beforeCreate() {
    this.points = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w']
  },

  created() {
    this.updateState({
      width: 100,
      height: 40,
      left: 300,
      top: 200,
    })
  },

  render(h) {
    return h('a', {
      class: ['editable-button', this.actived ? 'is-active' : ''],
      style: this.baseStyle
    }, [
      this.state.text,
      this.renderZoomPoints(h, this.points)
    ])
  },

  methods: {
    // doTranslate(moveX, moveY) {
    //   this.updateState({
    //     left: Math.max(0, this.state.left + moveX),
    //     top: Math.max(0, this.state.top + moveY)
    //   })
    // },
  }
}
</script>

<style>
.editable-button {
  appearance: none;
  outline: none;
  user-select: none;
  display: inline-block;
  margin: 0;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 40px;
  text-align: center;
  background-color: #409eff;
  border-radius: 4px;
  white-space: nowrap;
  cursor: pointer;
}
.editable-button:hover {
  border-color: #66b1ff;
  background-color: #66b1ff;
  color: #fff;
}
.editable-button.is-active {
  outline: 1px solid #409EFF;
}
</style>