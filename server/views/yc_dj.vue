<script>
import { renderChildren } from '@/mixins/base/util'
import viewModel from '@/model/1648462244099.json'
export default {
  name: 'view-yc_dj',

  data() {
    return {
      componentData: viewModel
    }
  },

  render(h) {
    return h('div', {
      class: 'view-yc_dj'
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