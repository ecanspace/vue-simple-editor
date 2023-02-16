<script>
import vwrapper from '@/components/base/v-wrapper.vue'
import baseMixin from '@/mixins/editor/base'
import droppable from '@/mixins/editor/dragdrop/drop'
import { numberBetween } from '@/assets/js/utils/index'
export default {
  name: 'editable-wrapper',

  extends: vwrapper,

  mixins: [baseMixin, droppable],

  created() {
    if (this.state.width === undefined) {
      this.updateState({
        width: 1200,
        height: 200,
        left: 0
      })
    }
    
    this.$watch('state.coveredWidth', this.resizeWrapper)
    // this.$watch('state.transform', this.transformHandler)
  },

  render(h) {
    return h('div', {
      class: 'v-wrapper editable-wrapper',
      style: this.baseStyle
    }, [
      this.renderBackgroundVideo(h),
      this.renderChildren(h),
      this.renderZoomPoints(h, this.currentPoints)
    ])
  },

  computed: {
    currentPoints() {
      const { transform } = this.state, points = []

      if (transform === 'horizontal' || transform === 'both') {
        points.push('e')
      }

      if (transform === 'vertical' || transform === 'both') {
        points.push('s')
      }

      return points
    }
  },

  methods: {
    doTranslate(moveX, moveY) {
      const { transform } = this.state, 
      
      parentElm = this.$el.parentElement,
      
      newState = {}

      if (transform === 'horizontal' || transform === 'both') {
        newState.left = numberBetween(0, this.state.left + moveX, parentElm.clientWidth - this.state.width)
      }

      if (transform === 'vertical' || transform === 'both') {
        newState.top = numberBetween(0, this.state.top + moveY, parentElm.clientHeight - this.state.height)
      }
      
      this.updateState(newState)
    },

    // transformHandler(val) {
    //   let newState = {}

    //   if (val === 'horizontal' || val === 'both') {
    //     newState.width = Math.min(this.state.width, 1200)
    //   }

    //   this.updateState(newState)
    // }
  }
}
</script>

<style>
.editable-wrapper {
  outline: 1px dashed #409EFF;
  position: relative;
}
</style>