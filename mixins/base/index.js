import { formatMargin, formatWidth, renderChildren } from './util'
import clickMixin from '../event/click'
import linkable from './linkable'
// import animate from './animate'
export default {
  mixins: [clickMixin, linkable],
  
  props: {
    name: String,
    props: Object,
    value: Array,
    animation: Array,
    index: Number,
  },

  // beforeCreate() {
  //   this.editable = this.$options.name.includes('editable')
  // },

  data() {
    return {
      state: this.props || {},
      model: this.value || [],
      currentAnimation: this.animation || []
    }
  },

  // created() {
  //   if (!this.editable && this.state.left) {
  //     const left = Math.round(this.state.left * (window.screen.availWidth / 1440))
  //     this.state.left = left
  //   }
  // },

  computed: {
    baseStyle() {
      const state = this.state
      return {
        ...this.linkStyle,
        padding: formatMargin(state.padding),
        margin: formatMargin(state.margin),
        backgroundColor: state.backgroundColor,
        backgroundImage: state.backgroundImage ? 'url(' + state.backgroundImage + ')' : '',
        backgroundPosition: 'center',
        backgroundSize: 'auto',
        borderRadius: formatWidth(state.borderRadius),
        color: state.color,
        fontSize: formatWidth(state.fontSize),
        fontWeight: state.fontWeight,
        lineHeight: formatWidth(state.lineHeight),
        textAlign: state.textAlign,
        textIndent: formatWidth(state.textIndent),
        outline: state.outline,
        position: 'absolute',
        width: formatWidth(state.width),
        height: formatWidth(state.height),
        left: formatWidth(state.left),
        top: formatWidth(state.top),
        zIndex: state.zIndex,
      }
    },

    flexClasses() {
      const state = this.state, classList = []

      if (state.direction || state.horizontal || state.vertical) {
        classList.push('v-flex')
        classList.push(state.direction, state.horizontal, state.vertical)
      }

      return classList
    },
  },

  // watch: {
  //   props(newProps) {
  //     this.state = newProps
  //   }
  // },

  methods: {
    renderTarget: () => null,
    
    renderChildren(h) {
      return renderChildren.call(this, h, 'v')
    }
  }
}
