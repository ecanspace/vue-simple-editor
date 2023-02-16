<script>
import { renderChildren } from '@/mixins/base/util'
import viewModel from '@/model/1648462357437.json'
export default {
  name: 'view-tqcxq',

  data() {
    return {
      componentData: viewModel
    }
  },

  render(h) {
    return h('div', {
      class: 'view-tqcxq'
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