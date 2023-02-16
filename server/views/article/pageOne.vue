<script>
import { renderChildren } from '@/mixins/base/util'
import viewModel from '@/model/1648436684020.json'
export default {
  name: 'view-article-pageOne',

  data() {
    return {
      componentData: viewModel
    }
  },

  render(h) {
    return h('div', {
      class: 'view-article-pageOne'
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