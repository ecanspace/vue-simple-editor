<script>
import { renderChildren } from '@/mixins/base/util'
import viewModel from '@/model/1648696814325.json'
export default {
  name: 'view-zfhsydw',

  data() {
    return {
      componentData: viewModel
    }
  },

  render(h) {
    return h('div', {
      class: 'view-zfhsydw'
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