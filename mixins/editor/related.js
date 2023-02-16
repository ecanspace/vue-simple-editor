import { copied } from '../base/util'

export default {
  beforeCreate() {
    const componentName = this.$options.name
    this.shortName = componentName.slice(componentName.indexOf('-') + 1)
  },

  created() {
    const pureProps = copied(this.currentProps)

    delete pureProps.value
    delete pureProps.animation

    this.viewModel = {
      name: this.shortName,
      props: pureProps,
      children: [],
      animation: copied(this.currentAnimation, { type: 'array' }),
      domProps: {}
    }

    {
      let parent = this.$parent || this.$root

      while (parent && !parent.mode) {
        parent = parent.$parent
      }

      this._vparent = parent
    }

    this.pushModel()
  },

  methods: {
    pushModel() {
      // Fixed: created 生命周期钩子不一定按顺序调用，排序靠后的组件可能先于前面的组件调用
      // 因此直接 push 可能造成渲染结果与视图数据结构相异
      if (typeof this.index === 'number') {
        this._vparent.viewModel.children[this.index] = this.viewModel
      } else {
        this._vparent.viewModel.children.push(this.viewModel)
      }
    },

    removeModel() {
      const index = this._vparent.viewModel.children.indexOf(this.viewModel)
      this._vparent.viewModel.children.splice(index, 1)
    },

    updateModel() {
      const index = this._vparent.viewModel.children.indexOf(this.viewModel)
      this._vparent.viewModel.children.splice(index, 1, this.viewModel)
    },

    removeAll() {
      this._vparent.model.splice(this.index, 1)
      this.removeModel()
    },
  }
}
