import { copied, getSelected, setSelected } from '../base/util'

export default {
  mounted() {
    this.$el.addEventListener('click', this.clickHandler, false)
  },

  beforeDestroy() {
    this.$el.removeEventListener('click', this.clickHandler, false)
  },

  methods: {
    clickHandler(event) {
      event.preventDefault()
      event.stopPropagation()

      {
        const prevElm = getSelected()

        if (this.$el === prevElm) {
          return;
        }

        this.$el.classList.add('selected-border')

        if (prevElm) {
          prevElm.classList.remove('selected-border')
        }

        setSelected(this.$el)
      }

      this.$store.dispatch('proper/renderRightbar', {
        instance: this,
        name: this.shortName,
        props: this.currentProps,
        animation: this.currentAnimation
      })
    },

    // callback by $store.proper
    updateProps(newProps) {
      const pureProps = copied(newProps)
      
      delete pureProps.value
      delete pureProps.animation

      this.currentProps = newProps
      this.viewModel.props = pureProps

      this.updateModel()
    },

    // callback by $store.proper
    updateAnimation(newAnimation) {
      this.currentAnimation = newAnimation
      this.viewModel.animation = copied(newAnimation, { type: 'array' })
      this.updateModel()
    },
  }
}
