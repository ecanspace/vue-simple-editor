import contextmenu from './service'
import { copied } from '../../base/util'
// Contextmenu Mixin
export default {
  mounted() {
    this.$el.addEventListener('contextmenu', this.contextmenuHandler)
  },

  beforeDestroy() {
    this.$el.removeEventListener('contextmenu', this.contextmenuHandler)
  },

  methods: {
    contextmenuHandler(event) {
      event.preventDefault()
      event.stopPropagation()

      contextmenu.show({
        pageX: event.pageX,
        pageY: event.pageY,
        onRemove: this.remove,
        onCopy: this.copy,
      })

      document.addEventListener('mousedown', this.contextmenuHideHandler)
    },

    contextmenuHideHandler(event) {
      contextmenu.hide()
      document.removeEventListener('mousedown', this.contextmenuHideHandler)
    },

    remove() {
      this.$parent.model.splice(this.index, 1)
      this.removeModel()
    },

    copy() {
      const nextModel = copied(this.viewModel)
      const nextProps = nextModel.props

      nextProps.left += 20, nextProps.top += 20

      this.$parent.model.splice(this.index + 1, 0, nextModel)
    }
  }
}
