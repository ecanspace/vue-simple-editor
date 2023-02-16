<template>
  <div 
    v-clickoutside="handleClickoutside"
    class="smartable-shape" 
    :class="{ 'is-selected': selected }" 
    :style="shapeStyle" 
    @click="handleClick">
    <slot></slot>
    <shape-point v-for="value in points" :key="value" :direction="value"></shape-point>
  </div>
</template>

<script>
import clickoutside from 'element-ui/lib/utils/clickoutside'
import moveMixin from '@/mixins/editor/mouse/move'
export default {
  name: 'Shape',

  directives: { clickoutside },

  mixins: [moveMixin],

  props: {
    value: {}
  },

  provide() {
    return {
      shape: this
    }
  },

  data() {
    return {
      selected: false,
      points: ['n', 'e', 's', 'w', 'nw', 'ne', 'se', 'sw'],
      model: this.value || {},
    }
  },

  computed: {
    shapeStyle() {
      const shape = this.model
      return {
        width: shape.width + 'px',
        height: shape.height + 'px',
        top: shape.top + 'px',
        left: shape.left + 'px',
      }
    }
  },

  watch: {
    value(val) {
      this.model = val
    }
  },

  methods: {
    updateModel(newModel) {
      this.model = {
        ...this.model,
        ...newModel
      }
      this.$emit('input', this.model)
    },

    handleClick() {
      this.selected = true
    },

    handleClickoutside() {
      this.selected = false
    },

    doTranslate(moveX, moveY) {
      this.updateModel({
        left: this.model.left + moveX,
        top: this.model.top + moveY,
      })
    },

    // doMouseup() {
    //   this.$emit('input', this.model)
    // }
  }
}
</script>