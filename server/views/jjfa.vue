<script>
import { renderChildren } from '@/mixins/base/util'
import viewModel from '@/model/1648458354554.json'
export default {
  name: 'view-jjfa',

  data() {
    return {
      componentData: viewModel
    }
  },

  render(h) {
    return h('div', {
      class: 'view-jjfa'
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