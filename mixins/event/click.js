export default {
  mounted() {
    this.$el.addEventListener('click', this.clickHandler)
  },

  beforeDestroy() {
    this.$el.removeEventListener('click', this.clickHandler)
  },

  methods: {
    clickHandler(event) {
      event.stopPropagation()
      this.$emit('click', event)
    }
  }
}
