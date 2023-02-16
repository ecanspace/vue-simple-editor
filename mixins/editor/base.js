// import baseMixin from '../base/index'
// import { clickMixin } from '../event/index'
import { modelMixin } from './functional/index'
import moveMixin from './mouse/move'
import contextmenu from './contextmenu/mixin'
import { renderChildren } from '../base/util'
import { stacker } from '@/assets/js/stacker'
export default {
  mixins: [modelMixin, moveMixin, contextmenu],

  // provide() {
  //   return {
  //     target: this
  //   }
  // },

  beforeCreate() {
    this.points = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w']
  },

  data() {
    return {
      actived: false
    }
  },

  created() {
    this.$on('click', this.handleSelect)
    this.unwatch = this.$watch('state.align', this.alignHandler)
  },

  beforeDestroy() {
    this.$off('click')
    this.unwatch()
  },

  methods: {
    renderChildren: renderChildren,

    renderShape(h) {
      return h('div', {
        class: ['shape', this.actived ? 'is-active' : ''],
        style: this.baseStyle,
      }, [
        this.renderTarget(h),
        this.renderZoomPoints(h)
      ])
    },

    renderZoomPoints(h, points = this.points || []) {
      return points.map((value) => h('zoom-point', {
        props: {
          direction: value,
          visible: this.actived,
        },
        on: {
          beforeMove: this.doMousedown,
          moving: this.updateState,
          moved: this.doMoved,
        }
      }))
    },

    handleSelect() {
      this.actived = true

      this.$store.dispatch('proper/renderRightbar', {
        instance: this,
        name: this.name,
        props: this.viewModel.props,
        animation: this.viewModel.animation
      })
    },

    doMousedown(event) {
      this.beforeMoveState = this.state
    },

    doTranslate(moveX, moveY) {
      this.updateState({
        left: Math.max(0, Number(this.state.left) + moveX),
        top: Math.max(0, Number(this.state.top) + moveY)
      })
    },

    doMouseup() {
      const { left, top } = this.state
      this.addStack({ left, top })
    },

    doMoved() {
      const { width, height, left, top } = this.state
      this.addStack({ width, height, left, top })
    },

    addStack(payload) {
      stacker.add({
        action: 'update',
        subject: 'props',
        target: this,
        from: this.beforeMoveState,
        payload: payload
      })
    },

    alignHandler(val) {
      if (val.length) {
        const state = this.state, pureState = this.viewModel.props, parentElm = this.$el.parentElement

        if (val.includes('horizontal')) {
          pureState.left = state.left = Math.ceil((parentElm.clientWidth - state.width) / 2)
        }

        if (val.includes('vertical')) {
          pureState.top = state.top = Math.ceil((parentElm.clientHeight - state.height) / 2)
        }

        this.updateModel()
      }
    }
  }
}