<template>
  <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="80px">
    <el-form-item label="视图名称" prop="name">
      <el-input v-model="ruleForm.name" placeholder="必填，视图的中文名称"></el-input>
    </el-form-item>
    <el-form-item label="描述信息">
      <el-input type="textarea" v-model="ruleForm.description" placeholder="选填，视图描述，可用于SEO访问"></el-input>
    </el-form-item>
    <el-form-item label="路由配置" prop="path">
      <el-input v-model="ruleForm.path" placeholder="必填，用于导航跳转"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    editData: Object,
    onSubmit: Function
  },

  data() {
    const data = this.editData
    return {
      ruleForm: data !== undefined ? {
        name: data.name + '【副本】',
        path: data.path + '_copy',
        description: data.description
      } : {},
      rules: {
        name: [{
          required: true,
          message: '请输入视图名称'
        }],
        path: [{
          required: true,
          message: '请配置当前视图跳转路径'
        }]
      }
    }
  },

  methods: {
    submitForm(close, loading) {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          loading.start()
          this.onSubmit(this.ruleForm, loading, close)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style>

</style>