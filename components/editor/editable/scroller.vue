<script>
import vscroller from '@/components/base/v-scroller.vue'
import baseMixin from '@/mixins/editor/base'
import droppable from '@/mixins/editor/dragdrop/drop'
import { getActived } from '@/mixins/editor/functional/index'
export default {
  name: 'editable-scroller',

  extends: vscroller,

  mixins: [baseMixin, droppable],

  render(h) {
    const scrollerContent = h('div', {
      class: 'v-scroller__content',
      style: this.contentStyle
    }, [
      this.renderChildren(h),
      this.renderBottomZoomLine(h)
    ])

    const scroller = h('div', {
      class: 'v-scroller editable-scroller'
    }, [
      scrollerContent
    ])
    
    return scroller
  },

  mounted() {
    this._height = this.$el.clientHeight

    this.updateState({
      height: this.state.height || this._height - 5
    })

    document.addEventListener('keydown', this.keydownHandler)
  },

  beforeDestroy() {
    document.removeEventListener('keydown', this.keydownHandler)
  },

  methods: {
    renderBottomZoomLine(h) {
      return h('zoom-point', {
        props: {
          direction: 's',
          visible: true
        },
        on: {
          moving: this.updateHeight
        }
      })
    },

    updateHeight(newState) {
      const currentHeight = this.state.height
      this.updateState({
        height: Math.max(this._height, currentHeight + (newState.height - currentHeight >= 0 ? 5 : -5)) 
      })
    },

    keydownHandler(event) {
      // event.preventDefault()
      const instance = getActived()
      
      if (instance) {
        const code = event.code
        instance.doTranslate(
          code === 'ArrowLeft' ? -1 : code === 'ArrowRight' ? 1 : 0,
          code === 'ArrowUp' ? -1 : code === 'ArrowDown' ? 1 : 0,
        )
      }
    },
  }
}
</script>

<style>
.editable-scroller {
  padding: 2px;
}
.editable-scroller .v-scroller__content {
  outline: 1px dashed #409EFF;
}
</style>