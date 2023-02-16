// Drag Mixin
export default {
  mounted() {
    this.$el.draggable = true
    this.$el.addEventListener('dragstart', this.dragstartHandler)
    // this.$el.addEventListener('drag', this.dragHandler)
    this.$el.addEventListener('dragend', this.dragendHandler)
  },

  beforeDestroy() {
    this.$el.removeEventListener('dragstart', this.dragstartHandler)
    // this.$el.removeEventListener('drag', this.dragHandler)
    this.$el.removeEventListener('dragend', this.dragendHandler)
  },

  methods: {
    dragstartHandler(event) {
      // console.log('dragstart')
      // event.target.style.cursor = 'grabbing'
      // event.dataTransfer.cursor = 'grabbing'
      event.dataTransfer.setData('type', this.type) // 设置 drag 类型
    },

    // dragHandler(event) {
    //   event.preventDefault()
    //   console.log('drag')
    //   // event.target.style.cursor = 'grabbing'
    // },

    dragendHandler(event) {
      // console.log('dragend')
      event.dataTransfer.clearData()
    }
  }
}
