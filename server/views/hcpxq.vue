<script>
import { renderChildren } from '@/mixins/base/util'
import viewModel from '@/model/1648458615673.json'
export default {
  name: 'view-hcpxq',

  data() {
    return {
      componentData: viewModel
    }
  },

  render(h) {
    return h('div', {
      class: 'view-hcpxq'
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