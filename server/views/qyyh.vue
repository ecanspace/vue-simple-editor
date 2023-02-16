<script>
import { renderChildren } from '@/mixins/base/util'
import viewModel from '@/model/1648460852810.json'
export default {
  name: 'view-qyyh',

  data() {
    return {
      componentData: viewModel
    }
  },

  render(h) {
    return h('div', {
      class: 'view-qyyh'
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