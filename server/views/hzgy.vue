<script>
import { renderChildren } from '@/mixins/base/util'
import viewModel from '@/model/1648461276415.json'
export default {
  name: 'view-hzgy',

  data() {
    return {
      componentData: viewModel
    }
  },

  render(h) {
    return h('div', {
      class: 'view-hzgy'
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