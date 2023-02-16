<script>
import { renderChildren } from '@/mixins/base/util'
import viewModel from '@/model/1648462629505.json'
export default {
  name: 'view-gryh',

  data() {
    return {
      componentData: viewModel
    }
  },

  render(h) {
    return h('div', {
      class: 'view-gryh'
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