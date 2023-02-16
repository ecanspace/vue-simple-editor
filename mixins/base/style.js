import { formatMargin, formatWidth } from './util'

export default {
  props: {
    // base
    width: String,
    height: String,
    padding: String,
    border: String,
    margin: String,
    backgroundColor: String,
    backgroundImage: String,
    borderRadius: String,
    color: String,
    fontSize: String,
    fontWeight: String,
    lineHeight: String,
    textAlign: String,
    // position
    top: String,
    right: String,
    bottom: String,
    left: String,
    zIndex: [String, Number],
    // flex
    direction: String,
    horizontal: String,
    vertical: String,
  },

  computed: {
    baseStyle() {
      return {
        width: formatWidth(this.width),
        height: formatWidth(this.height),
        padding: formatMargin(this.padding),
        margin: formatMargin(this.margin),
        backgroundColor: this.backgroundColor,
        backgroundImage: this.backgroundImage ? 'url(' + this.backgroundImage + ')' : '',
        borderRadius: formatWidth(this.borderRadius),
        color: this.color,
        fontSize: formatWidth(this.fontSize),
        fontWeight: this.fontWeight,
        lineHeight: this.lineHeight,
        textAlign: this.textAlign
      }
    },

    positionStyle() {
      const top = formatWidth(this.top)
      const right = formatWidth(this.right)
      const bottom = formatWidth(this.bottom)
      const left = formatWidth(this.left)
      const position = (top || right || bottom || left) ? 'absolute' : ''
      return {
        position,
        top,
        right,
        bottom,
        left,
        zIndex: this.zIndex
      }
    },

    flexClasses() {
      const classList = []

      if (this.direction || this.horizontal || this.vertical) {
        classList.push('v-flex')
        classList.push(this.direction, this.horizontal, this.vertical)
      }

      return classList
    },
  },
}
