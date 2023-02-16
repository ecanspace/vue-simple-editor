<template>
  <div class="demo-page">
    <!-- <dragged-panel>
      <dragged-item>1111111111111111</dragged-item>
      <dragged-item>2222222222222222</dragged-item>
      <dragged-item>3333333333333333</dragged-item>
      <dragged-item>4444444444444444</dragged-item>
      <dragged-item>5555555555555555</dragged-item>
      <dragged-item>6666666666666666</dragged-item>
      <dragged-item>7777777777777777</dragged-item>
      <dragged-item>8888888888888888</dragged-item>
      <dragged-item>9999999999999999</dragged-item>
    </dragged-panel> -->

    <!-- <v-popover-fade direction="top">向上展示</v-popover-fade>
    <v-popover-fade direction="right">向右展示</v-popover-fade>
    <v-popover-fade direction="bottom">向下展示</v-popover-fade>
    <v-popover-fade direction="left">向左展示</v-popover-fade> -->

    <!-- <div class="flex">
      <v-popover-slide direction="top">从上到下</v-popover-slide>
      <v-popover-slide direction="right">从右到左</v-popover-slide>
      <v-popover-slide direction="bottom">从下到上</v-popover-slide>
      <v-popover-slide direction="left">从左到右</v-popover-slide>
    </div> -->

    <!-- <div class="flex">
      <v-button></v-button>
    </div> -->

    <!-- <div class="flex">
      <v-carousel></v-carousel>
    </div> -->

    <!-- <v-carousel></v-carousel> -->
    <div class="demo-wrapper">
      <div class="demo-inner"></div>
      <div class="demo-wrapper__mask"></div>
    </div>

  </div>
</template>

<script>
export default {
  layout: 'blank',

  data() {
    return {
      items: 20,
      total: 50,
      pageIndex: 1
    }
  },

  methods: {

  }
}
</script>

<style scoped>
.demo-page {
  /* width: 1200px; */
  /* margin: auto; */
  min-height: 100%;
  background-color: #f5f5f5;
}
.demo-wrapper {
  /* position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 200px; */
  width: 1200px;
  height: 400px;
  margin: auto;
  background-color: red;
}
.demo-wrapper__mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background-color: green;
}
.demo-row {
  display: flex;
  justify-content: center;
  margin: 0 0 40px;
}
/* paginated select css */
.paginated-select__content {
  height: 340px;
  background-color: red;
  overflow: auto;
}
.paginated-select__option {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  padding: 10px 16px;
}
</style>