<template>
  <a class="v-button" :style="currentStyle">
    <span>{{state.text}}</span>
  </a>
</template>

<script>
import baseMixin from '@/mixins/base/index'
import hoverMixin from '@/mixins/event/hover'
export default {
  name: 'v-button',

  mixins: [baseMixin, hoverMixin],

  computed: {
    themeColor() {
      return this.state.themeColor || '#409EFF'
    },

    currentStyle() {
      return {
        ...this.baseStyle,
        color: this.state.color || this.themeColor,
        borderColor: this.themeColor,
        borderWidth: this.state.border + 'px'
      }
    }
  },

  created() {
    this.$on('mouseenter', this.handleMouseenter)
    this.$on('mouseleave', this.handleMouseleave)
  },

  beforeDestroy() {
    this.$off(['mouseenter', 'mouseleave'])
  },

  methods: {
    handleMouseenter(event) {
      this.$el.style.backgroundColor = this.themeColor
    },

    handleMouseleave(event) {
      this.$el.style.backgroundColor = ''
    }
  }
}
</script>

<style>
.v-button {
  appearance: none;
  outline: none;
  user-select: none;
  padding: 12px 36px;
  margin: 0;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  /* transition: .1s; */
}
.v-button:hover {
  color: #fff !important;
}
</style>