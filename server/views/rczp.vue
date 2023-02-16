<script>
import { renderChildren } from '@/mixins/base/util'
import viewModel from '@/model/1648463777493.json'
export default {
  name: 'view-rczp',

  data() {
    return {
      componentData: viewModel
    }
  },

  render(h) {
    return h('div', {
      class: 'view-rczp'
    }, [
      this.renderChildren(h)
    ])
  },

  methods: {
    renderChildren(h) {
      return renderChildren.call(this, h, 'v', this.componentData)
    }
  }
}
</script>