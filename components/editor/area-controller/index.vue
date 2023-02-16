<template>
  <div class="area-controller">
    <el-scrollbar wrapClass="area-controller__scrolled-wrap" viewClass="area-controller__scrolled-view">
      <el-tabs v-model="activeName" :stretch="true">
        <el-tab-pane label="属性" name="props">
          <area-controller-props></area-controller-props>
        </el-tab-pane>
        <el-tab-pane label="动画" name="animt">
          <area-controller-animt></area-controller-animt>
        </el-tab-pane>
        <!-- <el-tab-pane label="事件" name="event">
          <area-controller-event></area-controller-event>
        </el-tab-pane> -->
      </el-tabs>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'props',
    }
  }
}
</script>

<style>
.area-controller {
  display: block;
  width: 100%;
  overflow: hidden;
}
.area-controller,
.area-controller .el-scrollbar {
  height: 100%;
}
.area-controller__scrolled-wrap {
  height: calc(100% + 17px)
}
.area-controller .el-form {
  padding-right: 16px;
}
.el-form--label-top .el-form-item {
  margin-bottom: 10px;
}
.el-form--label-top .el-form-item__label {
  display: block;
  line-height: normal;
  padding: 6px 0;
  margin-bottom: 10px;
}
.area-controller .el-tabs__header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #fff;
  z-index: 5;
}
</style>