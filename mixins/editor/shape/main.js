import clickoutside from 'element-ui/lib/utils/clickoutside'
import moveMixin from '@/mixins/editor/mouse/move'
import ShapePoint from './point'
export default {
  name: 'Shape',

  components: { ShapePoint },

  directives: { clickoutside },

  mixins: [moveMixin],

  provide() {
    return {
      shape: this
    }
  },

  data() {
    return {
      selected: false,
      points: ['n', 'e', 's', 'w', 'nw', 'ne', 'se', 'sw'],
    }
  },

  created() {
    this.$on('click', () => this.selected = true)
  },

  mounted() {
    const { clientWidth, clientHeight, offsetTop, offsetLeft } = this.$el
    this.updateState({
      width: clientWidth,
      height: clientHeight,
      top: offsetTop,
      left: offsetLeft,
    })
  },

  render(h) {
    return h('div', {
      class: ['smartable-shape', this.selected ? 'is-selected' : ''],
      style: this.currentStyle,
      directives: [{
        name: 'clickoutside',
        value: this.handleClickoutside
      }]
    }, [
      this.renderTarget(h),
      this.renderShapePoints(h)
    ])
  },

  methods: {
    renderShapePoints(h) {
      return this.points.map((value) => (
        <shape-point key={value} props={{ direction: value }}></shape-point>
      ))
    },

    handleClickoutside() {
      this.selected = false
    },

    doTranslate(moveX, moveY) {
      this.updateState({
        left: this.state.left + moveX,
        top: this.state.top + moveY,
      })
    }
  }
}