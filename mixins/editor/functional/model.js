import { copied } from '../../base/util'

export default {
  created() {
    // 视图模型纯数据
    this.viewModel = {
      name: this.name,
      props: copied(this.state),
      children: [],
      animation: copied(this.currentAnimation, { type: 'array' }),
      // domProps: copied(this.domProps || {})
    }
    this.pushModel()
  },

  methods: {
    pushModel() {
      // Fixed: created 生命周期钩子不一定按顺序调用，排序靠后的组件可能先于前面的组件调用
      // 因此直接 push 可能造成渲染结果与视图数据结构不同
      if (typeof this.index === 'number') {
        this.$parent.viewModel.children[this.index] = this.viewModel
      } else {
        this.$parent.viewModel.children.push(this.viewModel)
      }
    },

    removeModel() {
      // const index = this.$parent.viewModel.children.indexOf(this.viewModel)
      this.$parent.viewModel.children.splice(this.index, 1)
    },

    updateModel() {
      // const index = this.$parent.viewModel.children.indexOf(this.viewModel)
      this.$parent.viewModel.children.splice(this.index, 1, this.viewModel)
    },

    updateState(newState) {
      this.state = {
        ...this.state,
        ...newState,
      }
      this.viewModel.props = copied(this.state)
      this.updateModel()
    },

    updateAnimation(newAnimation) {
      this.currentAnimation = newAnimation
      this.viewModel.animation = copied(newAnimation, { type: 'array' })
      this.updateModel()
    },

    updateDomProps(newDomProps) {
      this.viewModel.domProps = newDomProps
      this.updateModel()
    },
  }
}
