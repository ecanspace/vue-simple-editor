import { componentMap } from '@/config/editor/index'
import { camelify } from '../../base/util'
// import { stacker } from '@/assets/js/stacker'

// Drop Mixin
export default {
  // beforeCreate() {
  //   this.dragged = null
  //   this.prevActived = null
  // },

  mounted() {
    // this.originBackgroundColor = this.$el.style.backgroundColor
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
      // this.dragged = event.dataTransfer.getData('dragged')
      // this.$el.style.backgroundColor = '#99a9bf'
    },

    dragoverHandler(event) {
      event.preventDefault()
      event.stopPropagation()

      console.log('dragover')

      // event.dataTransfer.dropEffect = 'move'

      // const target = event.target

      // if (this.prevActived !== target) {

      //   if (this.prevActived) {
      //     this.prevActived.classList.remove('is-above', 'is-below')
      //   }

      //   this.prevActived = target
      // }

      // // // const target = event.target
      // const areaHeight = target.clientHeight
      // const offsetY = event.offsetY
      // // const diff = offsetY - Math.ceil(offsetY / areaHeight) * areaHeight

      // if (offsetY < areaHeight * 0.2) {
      //   target.style.backgroundColor = ''
      //   target.classList.add('is-above')
      // } else if (offsetY > areaHeight * 0.8) {
      //   target.style.backgroundColor = ''
      //   target.classList.add('is-below')
      // } else {
      //   target.classList.remove('is-above', 'is-below')
      //   target.style.backgroundColor = '#409EFF'
      // }

      // event.target.style.backgroundColor = '#409EFF'
      // event.target.style.outline = '1px solid #409EFF'
    },

    dragleaveHandler(event) {
      event.stopPropagation()
      console.log('dragleave')
      // this.$el.style.backgroundColor = this.originBackgroundColor
    },

    dropHandler(event) {
      event.preventDefault()
      event.stopPropagation()

      console.log('drop')

      // this.doDrop(event)

      const type = event.dataTransfer.getData('type')

      if (type) {
        const options = componentMap[camelify(type)].options()
        const props = options.props

        const coord = event.dataTransfer.getData('offsetCoord').split(',')
        const diffX = Number(coord[0])
        const diffY = Number(coord[1])

        props.left = event.offsetX - diffX
        props.top  = event.offsetY - diffY

        this.model.push(options)

        // stacker.add({
        //   action: 'add',
        //   subject: 'component',
        //   target: this.model,
        //   value: options
        // })

        // const props = options.props
        // props.left = event.offsetX
        // props.top = event.offsetY
      }

      // this.$el.style.backgroundColor = this.originBackgroundColor
    },
  }
}