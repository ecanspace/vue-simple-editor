<script>
import baseMixin from '@/mixins/base/index'
export default {
  name: 'v-wrapper',

  inject: ['viewport'],

  mixins: [baseMixin],

  render(h) {
    return (
      <div class="v-wrapper" style={this.baseStyle}>
        {this.renderBackgroundVideo(h)}
        {this.renderChildren(h)}
      </div>
    )
  },

  // created() {
  //   const coverMode = this.state.coverMode, newState = {}

  //   if (coverMode === 'horizontal' || coverMode === 'both') {
  //     newState.width = this.state.width < 1400 ? this.state.width : '100%'
  //   }

  //   if (coverMode === 'vertical' || coverMode === 'both') {
  //     newState.height = window.screen.availHeight
  //   }

  //   this.state = {
  //     ...this.state,
  //     ...newState
  //   }
  // },

  mounted() {
    if (this.state.coveredWidth !== undefined) {
      this.resizeWrapper()
    }
    // this.resizeWrapperBounding()
    // this.observeTarget()
  },

  // computed: {
  //   hoLock() {
  //     return this.state.coverMode === 'horizontal' || this.state.coverMode === 'both'
  //   },

  //   voLock() {
  //     return this.state.coverMode === 'vertical' || this.state.coverMode === 'both'
  //   }
  // },

  methods: {
    renderBackgroundVideo(h) {
      return this.state.backgroundVideo ? h('video', {
        class: 'v-wrapper__video',
        attrs: {
          src: this.state.backgroundVideo,
          autoplay: true,
          loop: true,
          muted: true,
          playsinline: true
        }
      }) : null
    },

    resizeWrapper() {
      const newState = {}

      if (this.state.coveredWidth) {
        const viewportElm = this.viewport.$el
        newState.width = viewportElm.clientWidth
        newState.left = -Math.ceil((newState.width - this.state.width) / 2)
      } else {
        newState.width = 1200
        newState.left = 0
      }

      this.state = {
        ...this.state,
        ...newState
      }
    }

    // observeTarget() {
    //   this.$viewport(this.$el, this.dispatchAnimation)
    // },

    // dispatchAnimation() {
    //   this.$children.forEach((component) => component.runAnimation())
    // },

    // resizeWrapperBounding(mode = this.state.coverMode) {
    //   if (!mode) return;

    //   let newState = {}, viewportElm = this.viewport.$el

    //   // if (this.state.width || this.state.height) {
    //   //   return false
    //   // }

    //   if (this.hoLock) {
    //     // newState.width = viewportElm.clientWidth - 2
    //     newState.width = '100%'
    //     newState.left = 0
    //     // newState.height = (
    //     //   this.state.height === '100%' ?  || 200
    //     // )
    //   }
      
    //   if (this.voLock) {
    //     // newState.height = viewportElm.clientHeight - 4
    //     newState.height = '100%'
    //     newState.top = 0
    //     // newState.width = this.state.width || viewportElm.clientWidth
    //   }

    //   this.state = {
    //     ...this.state,
    //     ...newState
    //   }
    // }
  }
}
</script>