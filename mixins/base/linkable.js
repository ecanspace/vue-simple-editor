import { isUrl, navigateTo } from './util'

export default {
  computed: {
    linkStyle() {
      return {
        cursor: this.state.linkUrl ? 'pointer' : ''
      }
    }
  },

  mounted() {
    if (this.state.linkUrl) {
      this.$on('click', this.handleLink)
    }
  },

  methods: {
    handleLink(event) {
      event.stopPropagation()
      const url = this.state.linkUrl
      isUrl(url) ? navigateTo(url) : window.$nuxt.context.redirect(url)
    }
  }
}