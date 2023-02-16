<script>
import { renderChildren } from '@/mixins/base/util'
import viewModel from '@/model/1648463451141.json'
export default {
  name: 'view-gszx',

  data() {
    return {
      componentData: viewModel
    }
  },

  render(h) {
    return h('div', {
      class: 'view-gszx'
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