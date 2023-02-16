<script>
import { renderChildren } from '@/mixins/base/util'
import viewModel from '@/model/1648607938808.json'
export default {
  name: 'view-qcpxq_copy_copy_copy',

  data() {
    return {
      componentData: viewModel
    }
  },

  render(h) {
    return h('div', {
      class: 'view-qcpxq_copy_copy_copy'
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