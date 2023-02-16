<script>
import { renderChildren } from '@/mixins/base/util'
import viewModel from '@/model/1648460352837.json'
export default {
  name: 'view-yc_wyzc',

  data() {
    return {
      componentData: viewModel
    }
  },

  render(h) {
    return h('div', {
      class: 'view-yc_wyzc'
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