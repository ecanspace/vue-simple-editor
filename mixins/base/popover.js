import baseMixin from './index'
import hoverMixin from '../event/hover'
export default {
  name: 'v-popover',

  mixins: [baseMixin, hoverMixin],

  data() {
    return {
      visible: false
    }
  },

  created() {
    this.$on('mouseenter', this.handleMouseenter)
    this.$on('mouseleave', this.handleMouseleave)
  },

  computed: {
    direction() {
      return this.state.direction || 'bottom'
    },

    triggerImage() {
      return this.state.triggerImage || this.defaultTriggerImage
    },

    contentImage() {
      return this.state.contentImage || this.defaultContentImage
    },

    triggerStyle() {
      return {
        width: this.state.triggerWidth + 'px',
        height: this.state.triggerHeight + 'px',
      }
    },

    imageStyle() {
      return {
        marginLeft: this.state.triggerImageLeft + 'px',
        marginTop: this.state.triggerImageTop + 'px',
      }
    },

    contentStyle() {
      return {
        width: this.state.contentImageWidth + 'px',
        height: this.state.contentImageHeight + 'px',
      }
    }
  },

  methods: {
    handleMouseenter(event) {
      this.visible = true
    },

    handleMouseleave(event) {
      this.visible = false
    }
  }
}
