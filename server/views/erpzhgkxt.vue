<script>
import { renderChildren } from '@/mixins/base/util'
import viewModel from '@/model/1648695336177.json'
export default {
  name: 'view-erpzhgkxt',

  data() {
    return {
      componentData: viewModel
    }
  },

  render(h) {
    return h('div', {
      class: 'view-erpzhgkxt'
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