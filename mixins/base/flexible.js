export default {
  props: {
    direction: String,
    horizontal: String,
    vertical: String,
  },

  computed: {
    flexClasses() {
      const classList = []
      const { direction, horizontal, vertical } = this.currentProps

      if (direction || horizontal || vertical) {
        classList.push('v-flex')
        classList.push(direction, horizontal, vertical)
      }

      return classList
    }
  },
}
