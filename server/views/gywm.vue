<script>
import { renderChildren } from '@/mixins/base/util'
import viewModel from '@/model/1648462519640.json'
export default {
  name: 'view-gywm',

  data() {
    return {
      componentData: viewModel
    }
  },

  render(h) {
    return h('div', {
      class: 'view-gywm'
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