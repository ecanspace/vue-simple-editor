<template>
  <div class="dragged-panel">
    <slot></slot>
  </div>
</template>

<script>
import droppable from '@/mixins/editor/dragdrop/drop'
export default {
  mixins: [droppable],
}
</script>

<style>
.dragged-panel {
  margin: 20px 0;
  border-radius: 4px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
</style>