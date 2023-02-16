<script>
import { renderChildren } from '@/mixins/base/util'
import viewModel from '@/model/1648457638102.json'
export default {
  name: 'view-qcpxq',

  data() {
    return {
      componentData: viewModel
    }
  },

  render(h) {
    return h('div', {
      class: 'view-qcpxq'
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