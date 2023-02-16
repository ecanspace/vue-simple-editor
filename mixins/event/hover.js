// 注册原生监听程序，
// 并通过它去触发 Vue 自定义事件，
// 因为组件内部可能对某个单一事件，有多个处理程序
// 这样就可以在不同的 Mixin 中，通过 this.$on 注册局部事件处理程序
export default {
  mounted() {
    this.$el.addEventListener('mouseenter', this.mouseenterHandler)
    this.$el.addEventListener('mouseleave', this.mouseleaveHandler)
  },

  beforeDestroy() {
    this.$el.removeEventListener('mouseenter', this.mouseenterHandler)
    this.$el.removeEventListener('mouseleave', this.mouseleaveHandler)
  },

  methods: {
    mouseenterHandler(event) {
      console.log('mouseenter')
      this.$emit('mouseenter', event)
    },

    mouseleaveHandler(event) {
      console.log('mouseleave')
      this.$emit('mouseleave', event)
    },
  }
}
