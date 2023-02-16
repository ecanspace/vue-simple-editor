<template>
  <div class="view-container">
    <el-row :gutter="20">
      <el-col :span="8" v-for="item in cardData" :key="item.code">
        <el-card class="view-card">
          <div slot="header" class="view-card__header">
            <span class="view-card__title">{{item.name}}</span>
            <div class="view-card__action">
              <el-button type="text" @click="handlePreview(item)">预览</el-button>
              <el-button type="text" @click="handleEdit(item)">编辑</el-button>
              <el-button type="text" @click="handleCopy(item)">创建副本</el-button>
              <el-button type="text" class="danger-color" @click="handleRemove(item)">删除</el-button>
            </div>
          </div>
          <div class="view-card__body">
            <p class="view-card__description">{{item.description || '暂无描述'}}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Preview from '@/components/editor/preview.vue'
import AddViewDialog from '@/components/editor/add-view-dialog.vue'
import { copied } from '@/mixins/base/util'
export default {
  data() {
    return {
      cardData: []
    }
  },

  mounted() {
    this.fetchViewModelData()
  },

  methods: {
    fetchViewModelData() {
      this.$axios.post('/napi/viewdata/query').then((res) => {
        this.cardData = res.data
      })
    },

    handlePreview(item) {
      this.$dialog(Preview, {
        fullscreen: true,
        showClose: false,
        showFooter: false,
        customClass: 'preview-dialog',
        props: {
          code: item.code
        }
      })
    },

    handleEdit(item) {
      this.$router.push('/editor?code=' + item.code)
    },

    handleCopy(item) {
      this.$dialog(AddViewDialog, {
        title: '创建副本',
        props: {
          editData: copied(item),
          onSubmit: (...args) => this.createCopy(item, ...args) 
        }
      })
    },

    createCopy(item, formData, loading, close) {
      this.$axios.post('/napi/viewdata/copy', {
        ...formData,
        code: item.code
      }).then((res) => {
        this.$message.success(res.message)
        this.fetchViewModelData()
        close && close()
      }).finally(() => {
        loading && loading.finish()
      })
    },

    handleRemove(item) {
      this.$confirm('您确定要删除当前视图吗？删除之后不可恢复！', '提示', {
        type: 'error'
      }).then(() => {
        this.$axios.post('/napi/viewdata/remove', {
          code: item.code
        }).then((res) => {
          this.$message.success('remove ' + res.message)
          this.fetchViewModelData()
        })
      })
    }
  }
}
</script>

<style>
.danger-color,
.danger-color:active {
  color: #F56C6C !important;
}
.danger-color:hover {
  color: #f78989 !important;
}
.view-container {
  display: block;
  width: 62.5vw;
  margin: 0 auto;
  padding: 30px 0 10px;
}
.view-card {
  margin-bottom: 20px;
}
.view-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.view-card__title {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.view-card__action {
  margin-left: 10px;
  flex-shrink: 0;
}
.view-card__action .el-button--text {
  padding: 6px 0;
  border: none;
  font-size: 15px;
}
</style>