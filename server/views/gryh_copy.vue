<script>
import { renderChildren } from '@/mixins/base/util'
import viewModel from '@/model/1648656150155.json'
export default {
  name: 'view-gryh_copy',

  data() {
    return {
      componentData: viewModel
    }
  },

  render(h) {
    return h('div', {
      class: 'view-gryh_copy'
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