<script>
import { renderChildren } from '@/mixins/base/util'
import viewModel from '@/model/1648461292624.json'
export default {
  name: 'view-yc_zc',

  data() {
    return {
      componentData: viewModel
    }
  },

  render(h) {
    return h('div', {
      class: 'view-yc_zc'
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