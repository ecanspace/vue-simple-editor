import moveMixin from '@/mixins/editor/mouse/move'

// const direction = {
//   NORTH: 'n',
//   EAST: 'e',
//   SOUTH: 's',
//   WEST: 'w',
//   NORTH_WEST: 'nw',
//   NORTH_EAST: 'ne',
//   SOUTH_EAST: 'se',
//   SOUTH_WEST: 'sw',
// }

export default {
  mixins: [moveMixin],

  inject: ['shape'],

  props: {
    direction: String
  },

  computed: {
    visible() {
      return this.shape.selected
    },

    isNorth() {
      return ['nw', 'n', 'ne'].includes(this.direction)
    },

    isEast() {
      return ['ne', 'e', 'se'].includes(this.direction)
    },

    isSouth() {
      return ['se', 's', 'sw'].includes(this.direction)
    },

    isWest() {
      return ['sw', 'w', 'nw'].includes(this.direction)
    },
  },

  render(h) {
    return h('div', {
      class: ['shape-point', 'shape-point--' + this.direction],
      style: {
        display: this.visible ? '' : 'none'
      }
    })
  },

  methods: {
    doTranslate(moveX, moveY) {
      let { width, height, top, left } = this.shape.state

      if (this.isNorth) {
        height -= moveY, top += moveY
      }

      if (this.isEast) {
        width += moveX
      }

      if (this.isSouth) {
        height += moveY
      }

      if (this.isWest) {
        width -= moveX, left += moveX
      }

      this.shape.updateState({
        width,
        height,
        top,
        left
      })
    }
  }
}