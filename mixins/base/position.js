import { formatWidth } from './util'

export default {
  props: {
    top: String,
    right: String,
    bottom: String,
    left: String,
    zIndex: [String, Number],
  },

  computed: {
    positionStyle() {
      const props = this.currentProps

      const top = formatWidth(props.top)
      const right = formatWidth(props.right)
      const bottom = formatWidth(props.bottom)
      const left = formatWidth(props.left)

      const position = (top || right || bottom || left) ? 'absolute' : undefined

      return {
        position,
        top,
        right,
        bottom,
        left,
        zIndex: props.zIndex
      }
    }
  },
}
