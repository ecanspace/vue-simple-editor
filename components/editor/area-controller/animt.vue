<template>
  <div class="area-controller__animt">
    <div class="animt-actions">
      <el-button @click="addAnimation">添加动画</el-button>
      <el-button type="primary" @click="previewAnimation">预览动画</el-button>
    </div>

    <!-- <el-divider>动画配置</el-divider>
    <el-form class="extra-form" :model="extraForm" label-position="top">
      <el-form-item label="执行顺序">
        <el-input-number v-model="extraForm.sort" @change="handleChange"></el-input-number>
      </el-form-item>
    </el-form> -->

    <el-divider>已选动画</el-divider>
    <div class="animt-tag-list">
      <el-tag v-for="item in animation" :key="item.value"
        :closable="true" 
        :disableTransitions="true" 
        @close="removeAnimation(item)">{{item.label}}</el-tag>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AreaControllerAnimt',

  data() {
    return {
      extraForm: {},
    }
  },

  // created() {
  //   this.EVENT_BUS.$on('updateAnimation', (checked) => {
  //     this.animationList = checked
  //   })
  // },

  computed: mapState({
    animation: (state) => state.proper.animation
  }),

  // computed: {
  //   animationList() {
  //     return this.$store.state.proper.animation
  //   }
  // },

  // render(h) {
  //   return (
  //     <div class="area-controller__animt">
  //       <ElButton on={{ click: this.addAnimation }}>添加动画</ElButton>
  //       <ElButton props={{ type: 'primary' }} on={{ click: this.previewAnimation }}>预览动画</ElButton>
  //       <ElDivider>已选动画</ElDivider>
  //       <div class="animt-tag-list">{this.renderAnimationTags(h)}</div>
  //     </div>
  //   )
  // },

  methods: {
    // renderAnimationTags(h) {
    //   const removeAnimation = this.removeAnimation
    //   return this.animationList.map((item) => (
    //     <ElTag props={{ closable: true, disableTransitions: true }} on={{ close: () => removeAnimation(item) }}>{item.label}</ElTag>
    //   ))
    // },

    addAnimation() {
      // this.$store.commit('toggleAnimtDrawer', true)
      this.EVENT_BUS.$emit('openDrawer', this.animation)
    },

    previewAnimation() {
      
    },

    removeAnimation(item) {
      // this.$store.commit('proper/removeAnimation', item)
      const newAnimation = this.animation.slice()
      const index = this.animation.indexOf(item)

      newAnimation.splice(index, 1)
      
      this.$store.dispatch('proper/updateAnimation', newAnimation)
    },

    handleChange() {

    }
  }
}
</script>

<style>
.area-controller__animt {
  padding: 0 20px;
}
.animt-actions {
  text-align: center;
}
.animt-actions,
.extra-form {
  margin: 20px 0 40px;
}
.animt-tag-list {
  display: flex;
  flex-wrap: wrap;
}
.animt-tag-list .el-tag {
  margin: 0 10px 10px 0;
  text-align: left;
}
</style>