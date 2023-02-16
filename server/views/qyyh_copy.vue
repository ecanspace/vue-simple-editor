<script>
import { renderChildren } from '@/mixins/base/util'
import viewModel from '@/model/1648462277190.json'
export default {
  name: 'view-qyyh_copy',

  data() {
    return {
      componentData: viewModel
    }
  },

  render(h) {
    return h('div', {
      class: 'view-qyyh_copy'
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