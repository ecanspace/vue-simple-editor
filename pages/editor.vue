<template>
  <el-container class="editor">
    <el-header height="auto">
      <div class="editor-toolbar">
        <el-button size="small" icon="el-icon-monitor" @click="handlePreview">预览</el-button>
        <el-button size="small" icon="el-icon-check" @click="handleSave">保存</el-button>
        <el-button size="small" icon="el-icon-download" @click="handleDownload">下载</el-button>
        <el-button size="small" icon="el-icon-refresh-left" :disabled="noUndo" @click="handleUndo">撤销</el-button>
        <el-button size="small" icon="el-icon-refresh-right" :disabled="noRedo" @click="handleRedo">恢复</el-button>
      </div>
    </el-header>
    <el-container class="editor-container">
      <el-aside width="200px">
        <area-component></area-component>
      </el-aside>
      <el-main>
        <area-canvas></area-canvas>
      </el-main>
      <el-aside width="280px">
        <area-controller></area-controller>
      </el-aside>
    </el-container>
    <animt-drawer></animt-drawer>
  </el-container>
</template>

<script>
import AddViewDialog from '@/components/editor/add-view-dialog.vue'
import Preview from '@/components/editor/preview.vue'
import { stacker } from '@/assets/js/stacker/index'
export default {
  data() {
    return {
      pointer: -1
    }
  },

  created() {
    this.currentCode = this.$route.query.code
    stacker.on('pointer', (index) => this.pointer = index)
  },

  mounted() {
    stacker.clear()
  },

  computed: {
    noUndo() {
      return this.pointer === -1
    },
    noRedo() {
      return this.pointer === stacker.records.length - 1
    }
  },

  methods: {
    handlePreview() {
      this.EVENT_BUS.$emit('getCanvasData', (data) => {
        console.log(data)
        if (data.children.length === 0) {
          return this.$message.warning('暂无视图数据可预览')
        }

        this.$dialog(Preview, {
          fullscreen: true,
          showClose: false,
          showFooter: false,
          customClass: 'preview-dialog',
          props: {
            data: data.children
          }
        })
      })
    },

    handleSave() {
      if (this.locked) return;

      this.locked = true

      this.EVENT_BUS.$emit('getCanvasData', (data) => {
        if (data.children.length === 0) {
          this.locked = false
          return this.$message.warning('暂无视图数据可保存')
        }

        const componentData = data.children

        if (this.currentCode) {

          this.handleSubmit({
            code: this.currentCode,
            data: componentData
          })

        } else {
          this.$dialog(AddViewDialog, {
            title: '新增视图',
            props: {
              onSubmit: (formData, ...args) => this.handleSubmit({ ...formData, data: componentData }, ...args)
            }
          })

          this.locked = false
        }
      })
    },

    handleSubmit(postData = {}, loading, close) {
      this.$axios.post('/napi/viewdata/save', postData).then((res) => {
        this.$message.success(res.message)
        this.currentCode = res.data.code
        close && close()
        stacker.clear() // 保存成功清除历史记录
      }).finally(() => {
        this.locked = false
        loading && loading.finish()
      })
    },

    handleDownload() {
      this.$axios.post('/napi/viewdata/download', {}, {
        responseType: 'blob'
      }).then((res) => {
        console.log('Download successfully')
      })
    },

    handleUndo() {
      stacker.undo()
    },

    handleRedo() {
      stacker.redo()
    },
  }
}
</script>

<style>
.editor {
  height: 100%;
  overflow: hidden;
}
.editor-toolbar {
  display: block;
  padding: 10px 20px 9px;
  border-bottom: 1px solid #E4E7ED;
}
.editor-toolbar .el-button {
  border: none;
  padding: 10px;
  font-size: 14px;
}
.editor-container {
  height: calc(100% - 54px);
}
</style>
