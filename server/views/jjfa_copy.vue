<script>
import { renderChildren } from '@/mixins/base/util'
import viewModel from '@/model/1648478288827.json'
export default {
  name: 'view-jjfa_copy',

  data() {
    return {
      componentData: viewModel
    }
  },

  render(h) {
    return h('div', {
      class: 'view-jjfa_copy'
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