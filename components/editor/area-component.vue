<template>
  <el-scrollbar wrapClass="dragged-scroll__wrap" style="height:99%;">
    <div class="dragged-content">
      <div class="dragged-group" v-for="(group, index) in dragItems" :key="index">
        <div class="dragged-group__title">{{group.label}}</div>
        <div class="dragged-group__content">
          <drag-item v-for="(item, ii) in group.children" :key="index + '-' + ii"
            :type="item.type"
            :label="item.label"
            :icon="item.icon">
          </drag-item>
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>

<script>
import { getComponents } from '@/config/index'
export default {
  name: 'AreaComponent',

  data() {
    return {
      dragItems: getComponents()
    }
  }
}
</script>

<style>
.dragged-scroll__wrap {
  height: calc(100% + 17px);
}
.dragged-content {
  padding: 10px 20px;
}
.dragged-group {
  margin-bottom: 10px;
}
.dragged-group__title {
  color: #909399;
  font-size: 12px;
  font-weight: 600;
  padding: 10px 0;
}
</style>