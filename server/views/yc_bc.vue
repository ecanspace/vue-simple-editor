<script>
import { renderChildren } from '@/mixins/base/util'
import viewModel from '@/model/1648460885899.json'
export default {
  name: 'view-yc_bc',

  data() {
    return {
      componentData: viewModel
    }
  },

  render(h) {
    return h('div', {
      class: 'view-yc_bc'
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