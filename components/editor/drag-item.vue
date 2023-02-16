<template>
  <div class="drag-item">
    <i :class="icon"></i>
    <span>{{label}}</span>
  </div>
</template>

<script>
import draggable from '@/mixins/editor/dragdrop/drag'
// import { componentMap } from '@/config/editor/index'
export default {
  name: 'DragItem',

  mixins: [draggable],

  props: {
    type: String,
    label: String,
    icon: String,
  },

  // methods: {
  //   doDragstart(event) {
  //     const options = componentMap[this.type].options()
  //     event.dataTransfer.setData('type', JSON.stringify(options))
  //   }
  // }
}
</script>

<style>
.drag-item {
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #eef2f8;
  padding: 10px;
  border-radius: 4px;
  color: #303133;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 10px;
}
.drag-item:hover {
  cursor: grab;
  color: #409EFF;
}
.drag-item i {
  margin-right: 4px;
}
</style>