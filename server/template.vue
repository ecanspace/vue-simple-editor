<script>
import { renderChildren } from '@/mixins/base/util'
import viewModel from '@/model/<%=code%>.json'
export default {
  name: 'view-<%=name%>',

  data() {
    return {
      componentData: viewModel
    }
  },

  render(h) {
    return h('div', {
      class: 'view-<%=name%>'
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