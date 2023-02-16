<template>
  <div class="dragged-item" :class="{ 'is-selected': selected }" @click="handleClick"><slot></slot></div>
</template>

<script>
import draggable from '@/mixins/editor/dragdrop/drag'
export default {
  mixins: [draggable],

  data() {
    return {
      selected: false
    }
  },

  methods: {
    handleClick() {
      this.selected = true
    }
  }
}
</script>

<style>
.dragged-item {
  padding: 10px 20px;
  text-align: center;
  position: relative;
}
.dragged-item.is-selected {
  background-color: #1a73e8;
  color: #fff;
}
.dragged-item.is-above::before,
.dragged-item.is-below::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  padding: 2px 0;
  background-color: #409EFF;
}
.dragged-item.is-above::before {
  top: 0;
  margin-top: -2px;
}
.dragged-item.is-below::after {
  bottom: 0;
  margin-bottom: -2px;
}
</style>