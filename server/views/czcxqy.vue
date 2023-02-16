<script>
import { renderChildren } from '@/mixins/base/util'
import viewModel from '@/model/1648461913256.json'
export default {
  name: 'view-czcxqy',

  data() {
    return {
      componentData: viewModel
    }
  },

  render(h) {
    return h('div', {
      class: 'view-czcxqy'
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