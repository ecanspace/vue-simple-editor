<script>
import { renderChildren } from '@/mixins/base/util'
import viewModel from '@/model/1648459011229.json'
export default {
  name: 'view-cjchxqy',

  data() {
    return {
      componentData: viewModel
    }
  },

  render(h) {
    return h('div', {
      class: 'view-cjchxqy'
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