<script>
import wrapper from '@/mixins/base/wrapper'

export default {
  name: 'v-container',

  mixins: [wrapper],

  props: {
    tagName: {
      type: String,
      default: 'div'
    }
  },

  render(h) {
    return h(this.tagName, {
      class: ['v-container', ...this.flexClasses],
      style: this.baseStyle
    }, [
      this.renderChildren(h)
    ])
  }
}
</script>

<style>
.v-container {
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>