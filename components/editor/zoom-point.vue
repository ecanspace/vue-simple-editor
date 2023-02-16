<template>
  <div class="zoom-point" :class="['zoom-point--' + direction]" v-show="visible"></div>
</template>

<script>
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

  // inject: ['target'],

  props: {
    direction: String,
    visible: Boolean,
  },

  computed: {
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

    target() {
      return this.$parent || this.$root
    }
  },

  methods: {
    doMousedown(event) {
      this.$emit('beforeMove', event)
    },

    doTranslate(moveX, moveY) {
      let { width, height, left, top } = this.target.state

      if (typeof width === 'string') {
        width = Number(width)
      }

      if (typeof height === 'string') {
        height = Number(height)
      }

      if (typeof left === 'string') {
        left = Number(left)
      }

      if (typeof top === 'string') {
        top = Number(top)
      }

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

      this.$emit('moving', {
        width,
        height,
        left,
        top,
      })
    },

    doMouseup(event) {
      this.$emit('moved', event)
    }
  }
}
</script>