// Animation Mixin
export default {
  props: {
    animation: Array,
  },

  beforeCreate() {
    this.inAnimation = false
    this.animated = false
    this.activeAnimation = ''
    this.animationQueue = []
  },

  data() {
    return {
      currentAnimation: this.animation || [],
    }
  },

  methods: {
    // 外界调用组件执行动画方法
    runAnimation() {
      if (this.currentAnimation.length === 0 || this.inAnimation || this.animated) {
        return;
      }

      this.inAnimation = true
      this.animationQueue = this.currentAnimation.map((item) => item.value)

      this.$el.addEventListener('animationend', this.animationendHandler)

      this.doNextAnimation()
    },

    doNextAnimation() {
      this.activeAnimation = this.animationQueue.shift()

      if (this.activeAnimation) {
        this.$el.classList.add('animated', this.activeAnimation)
      } else {
        this.inAnimation = false
        this.animated = true
        this.$el.removeEventListener('animationend', this.animationendHandler)
      }

    },

    animationendHandler(event) {
      this.$el.classList.remove('animated', this.activeAnimation)
      this.doNextAnimation()
    },
  }
}
