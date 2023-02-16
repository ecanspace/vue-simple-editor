import { formatMargin, formatWidth } from './util'

export default {
  props: {
    width: [String, Number],
    height: [String, Number],
    padding: String,
    border: String,
    margin: String,
    backgroundColor: String,
    backgroundImage: String,
    borderRadius: [String, Number],
  },

  computed: {
    boxStyle() {
      const props = this.currentProps

      const width = formatWidth(props.width)
      const height = formatWidth(props.height)

      const padding = formatMargin(props.padding)
      const margin = formatMargin(props.margin)

      const backgroundImage = props.backgroundImage
        ? 'url(' + props.backgroundImage + ')'
        : undefined

      const borderRadius = formatWidth(props.borderRadius)

      return {
        width,
        height,
        padding,
        margin,
        backgroundColor: props.backgroundColor,
        backgroundImage,
        borderRadius,
      }
    }
  },
}
