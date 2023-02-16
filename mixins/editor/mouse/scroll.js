// Custom Scroll Mixin
export default {
  beforeCreate() {
    this.scrolling = false
    this.inTransition = false
    this.activeIndex = 0
    this.translate = 0
    this.distance = 0
    this.maxDistance = 0
    this.container = null
    this.view = null
  },

  mounted() {
    this.initSomething()
    // ------ WheelEvent ------
    this.$el.addEventListener('mouseenter', this.mouseenterHandler)
  },

  beforeDestroy() {
    this.$el.removeEventListener('mouseenter', this.mouseenterHandler)
  },

  methods: {
    initSomething() {
      // ------ Element ------
      this.container = this.$el.querySelector('.v-scroll') || this.$el
      this.view = this.container.querySelector('.v-scroll__view') || this.container.firstElementChild
      // ------ Number  ------
      this.distance = this.container.clientHeight
      // this.maxDistance = this.view.clientHeight - this.distance
    },

    mouseenterHandler(event) {
      // event.stopPropagation()

      console.log('mouseenter')

      this.scrolling = true

      this.$el.addEventListener('wheel', this.wheelHandler)
      this.$el.addEventListener('transitionend', this.transitionendHandler)
      this.$el.addEventListener('mouseleave', this.mouseleaveHandler)
    },

    wheelHandler(event) {
      if (this.scrolling) {
        console.log('wheel')
        this.doTranslate(event.deltaY)
      }
    },

    transitionendHandler(event) {
      console.log('transitionend')
      this.inTransition = false
    },

    mouseleaveHandler(event) {
      console.log('mouseleave')

      this.$el.removeEventListener('wheel', this.wheelHandler)
      this.$el.removeEventListener('transitionend', this.transitionendHandler)
      this.$el.removeEventListener('mouseleave', this.mouseleaveHandler)
    },

    doTranslate(deltaY) {
      if (this.inTransition) return;

      const direction = deltaY > 0 ? 'down' : 'up'
      const isTop = this.activeIndex === 0
      const isBottom = Math.abs(this.translate) >= (this.view.clientHeight - this.distance)

      if ((direction === 'up' && isTop) || (direction === 'down' && isBottom)) {
        return false
      }

      if (direction === 'down') {
        this.activeIndex++
        this.translate -= this.distance
      } else {
        this.activeIndex--
        this.translate += this.distance
      }

      this.view.style.transform = `translate3d(0, ${this.translate}px, 0)`

      this.inTransition = true
    }
  }
}
