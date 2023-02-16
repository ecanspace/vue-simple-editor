<template>
  <el-drawer title="动画列表" :visible.sync="visible" :append-to-body="true">
    <el-checkbox-group v-model="checked">
      <ul class="animt-drawer__list">
        <li class="animt-drawer__item" v-for="item in animationData" :key="item.value">
          <el-button><el-checkbox :label="item.value">{{item.label}}</el-checkbox></el-button>
        </li>
      </ul>
    </el-checkbox-group>
    <div class="animt-drawer__footer">
      <el-button type="primary" size="medium" @click="handleClick">确定</el-button>
    </div>
  </el-drawer>
</template>

<script>
import { animationData } from '@/config/editor/index'
export default {
  data() {
    return {
      visible: false,
      animationData: animationData(),
      checked: [],
    }
  },

  created() {
    this.EVENT_BUS.$on('openDrawer', (animation) => {
      this.checked = animation.map((item) => item.value)
      this.visible = true
    })
  },

  beforeDestroy() {
    this.EVENT_BUS.$off('openDrawer')
  },

  methods: {
    handleClick() {
      // this.EVENT_BUS.$emit('updateAnimation', this.checked)
      const checked = this.checked
      const checkedItems = this.animationData.filter((item) => checked.includes(item.value))
      this.$store.dispatch('proper/updateAnimation', checkedItems)
      this.visible = false
    },
  }
}
</script>

<style>
.animt-drawer__list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
}
.animt-drawer__item {
  flex: 1;
  margin: 0 20px 20px 0;
}
.animt-drawer__item .el-button {
  width: 100%;
  padding: 0;
  text-align: left;
}
.animt-drawer__item .el-checkbox {
  width: 100%;
  padding: 12px 20px;
}
.animt-drawer__footer {
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 20px;
  text-align: center;
  background-color: #fff;
  border-top: 1px solid #DCDFE6;
}
</style>