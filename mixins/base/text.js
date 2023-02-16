import { formatWidth } from './util'

export default {
  props: {
    color: String,
    fontSize: [String, Number],
    fontWeight: [String, Number],
    lineHeight: String,
    textAlign: String
  },

  computed: {
    textStyle() {
      const props = this.currentProps

      return {
        color: props.color,
        fontSize: formatWidth(props.fontSize),
        fontWeight: props.fontWeight,
        lineHeight: props.lineHeight,
        textAlign: props.textAlign
      }
    }
  }
}
