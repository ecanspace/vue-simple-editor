<script>
import { renderChildren } from '@/mixins/base/util'
import viewModel from '@/model/1648447456981.json'
export default {
  name: 'view-sbdjada',

  data() {
    return {
      componentData: viewModel
    }
  },

  render(h) {
    return h('div', {
      class: 'view-sbdjada'
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