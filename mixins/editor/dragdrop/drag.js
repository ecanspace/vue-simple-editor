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
      console.log('dragstart')
      event.dataTransfer.setData('type', this.type)
      event.dataTransfer.setData('offsetCoord', event.offsetX + ',' + event.offsetY)
      // this.doDragstart(event)
      // event.dataTransfer.setData('dragged', this)
      // event.dataTransfer.effectAllowed = 'move'
    },

    // dragHandler(event) {
    //   // event.preventDefault()
    //   console.log('drag')
    // },

    dragendHandler(event) {
      console.log('dragend')
      event.dataTransfer.clearData()
    }
  }
}
