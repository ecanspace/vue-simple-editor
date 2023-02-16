import { componentMap } from '@/config/editor/index'

// Drop Mixin
export default {
  // beforeCreate() {
  //   this.originBackgroundColor = ''
  // },

  mounted() {
    this.originBackgroundColor = this.$el.style.backgroundColor

    this.$el.addEventListener('dragenter', this.dragenterHandler)
    this.$el.addEventListener('dragover', this.dragoverHandler)
    this.$el.addEventListener('dragleave', this.dragleaveHandler)
    this.$el.addEventListener('drop', this.dropHandler)
  },

  beforeDestroy() {
    this.$el.removeEventListener('dragenter', this.dragenterHandler)
    this.$el.removeEventListener('dragover', this.dragoverHandler)
    this.$el.removeEventListener('dragleave', this.dragleaveHandler)
    this.$el.removeEventListener('drop', this.dropHandler)
  },

  methods: {
    dragenterHandler(event) {
      event.preventDefault()
      event.stopPropagation()

      console.log('dragenter')
      
      this.$el.style.backgroundColor = '#99a9bf'
    },

    dragoverHandler(event) {
      event.preventDefault()
      event.stopPropagation()
      console.log('dragover')
    },

    dragleaveHandler(event) {
      event.stopPropagation()

      console.log('dragleave')

      this.$el.style.backgroundColor = this.originBackgroundColor
    },

    dropHandler(event) {
      event.preventDefault()
      event.stopPropagation()

      console.log('drop')
      const type = event.dataTransfer.getData('type')

      if (type) {
        const options = componentMap[type].options()
        // options.name = options.name
        // this.addItem(options)
        this.model.push(options)
      }

      this.$el.style.backgroundColor = this.originBackgroundColor
    },
  }
}