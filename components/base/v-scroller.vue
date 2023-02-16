<script>
import baseMixin from '@/mixins/base/index'
export default {
  name: 'v-scroller',

  mixins: [baseMixin],

  provide() {
    return {
      viewport: this
    }
  },

  render(h) {
    const scrollerContent = h('div', {
      class: 'v-scroller__content',
      style: this.contentStyle
    }, [
      this.renderChildren(h)
    ])

    const scroller = h('div', {
      class: 'v-scroller'
    }, [
      scrollerContent
    ])
    
    return scroller
  },

  computed: {
    contentStyle() {
      return {
        height: this.state.height + 'px',
        backgroundColor: this.state.backgroundColor
      }
    }
  },
}
</script>