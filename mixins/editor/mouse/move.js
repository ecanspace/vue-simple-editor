// Move Mixin
export default {
  // inject: ['canvas'],

  beforeCreate() {
    this.movable = true
    this.moving = false
    this.startX = 0
    this.startY = 0
    this.translateX = 0
    this.translateY = 0
  },

  mounted() {
    // if (this.$el.offsetParent) {
    //   const currentElm = this.$el
    //   const offsetParent = currentElm.offsetParent

    //   this.centerX = Math.round(currentElm.clientWidth / 2)
    //   this.centerY = Math.round(currentElm.clientHeight / 2)

    //   const offsetRect = offsetParent.getBoundingClientRect()
    //   this.offsetCenterX = offsetRect.left + Math.round(offsetParent.clientWidth / 2)
    //   this.offsetCenterY = offsetRect.top + Math.round(offsetParent.clientHeight / 2)
    // }
    if (this.movable) {
      this.$el.addEventListener('mousedown', this.mousedownHandler)
    }
  },

  beforeDestroy() {
    this.$el.removeEventListener('mousedown', this.mousedownHandler)
  },

  methods: {
    mousedownHandler(event) {
      event.preventDefault()
      event.stopPropagation()
      console.log('mousedown')
      
      this.moving = true

      this.startX = event.pageX
      this.startY = event.pageY

      this.doMousedown(event)
      // this.mousedownHook(event)

      document.addEventListener('mousemove', this.mousemoveHandler)
      document.addEventListener('mouseup', this.mouseupHandler)
    },

    mousemoveHandler(event) {
      if (this.moving) {
        event.stopPropagation()
        console.log('mousemove')

        const currentX = event.pageX
        const currentY = event.pageY
        const moveX = currentX - this.startX
        const moveY = currentY - this.startY

        this.startX = currentX
        this.startY = currentY
        this.translateX += moveX
        this.translateY += moveY

        this.doTranslate(moveX, moveY)

        // const diffX = this.centerX - event.offsetX
        // const diffY = this.centerY - event.offsetY

        // const isCenterLeft = currentX + diffX === this.offsetCenterX
        // const isCenterTop  = currentY + diffY === this.offsetCenterY

        // const diffX = this.centerX - event.offsetX
        // const diffY = this.centerY - event.offsetY

        // this.doTranslate(
        //   currentX + diffX === this.offsetCenterX ? 0 : moveX,
        //   currentY + diffY === this.offsetCenterY ? 0 : moveY
        // )

        // if (Math.abs(currentX + diffX - this.offsetCenterX) < 10) {
        //   this.doTranslate(0, moveY)
        // }

        // if (Math.abs(currentY + diffY - this.offsetCenterY) < 10) {
        //   this.doTranslate(moveX, this.startY)
        // }

        // this.translateX += moveX
        // this.translateY += moveY

        // const diffX = this.centerX - event.offsetX
        // const diffY = this.centerY - event.offsetY

        // const currentX = this.translateX + moveX
        // const currentY = this.translateY + moveY
      }
    },

    mouseupHandler(event) {
      if (this.moving) {
        event.stopPropagation()
        console.log('mouseup')

        this.moving = false
        this.translateX = this.translateY = 0

        // this.translateX += event.pageX - this.startX
        // this.translateY += event.pageY - this.startY

        this.doMouseup(event)
        // this.mouseupHook(event)

        document.removeEventListener('mousemove', this.mousemoveHandler)
        document.removeEventListener('mouseup', this.mouseupHandler)
      }
    },

    doMousedown(event) {
      // implemented by external
    },

    doTranslate(moveX, moveY) {
      // implemented by external
    },

    doMouseup(event) {
      // implemented by external
    },
  }
}
