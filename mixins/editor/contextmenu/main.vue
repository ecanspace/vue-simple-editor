<template>
  <div class="custom-contextmenu__wrapper" v-show="visible">
    <ul class="custom-contextmenu__list">
      <li class="custom-contextmenu__item" @click="handleClick('remove')">删除</li>
      <li class="custom-contextmenu__item" @click="handleClick('copy')">复制</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CustomContextmenu',

  data() {
    return {
      visible: false,
    }
  },

  mounted() {
    this.$el.addEventListener('mousedown', this.mousedownHandler)
  },

  beforeDestroy() {
    this.$el.removeEventListener('mousedown', this.mousedownHandler)
  },

  methods: {
    mousedownHandler(event) {
      event.stopPropagation()
    },

    handleClick(command) {
      this.$emit(command), this.visible = false
    }
  }
}
</script>

<style>
.custom-contextmenu__wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #fff;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.custom-contextmenu__list {
  list-style: none;
  color: #303133;
  padding: 10px 0;
}
.custom-contextmenu__item {
  padding: 0 20px;
  font-size: 14px;
  color: #606266;
  height: 34px;
  line-height: 34px;
  box-sizing: border-box;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.custom-contextmenu__item:hover {
  background-color: #f5f7fa;
}
</style>