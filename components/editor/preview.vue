<script>
import { renderChildren } from '@/mixins/base/util'
export default {
  props: {
    code: String,
    data: Array
  },

  data() {
    return {
      canvasData: []
    }
  },

  render(h) {
    return h('div', {
      class: 'preview-container'
    }, [
      this.renderHeader(h),
      this.renderChildren(h),
      this.renderFooter(h)
    ])
  },

  mounted() {
    this.getCanvasData()
  },

  methods: {
    renderChildren(h) {
      return renderChildren.call(this, h, 'v', this.canvasData)
    },

    renderHeader(h) {
      return h('v-header', {})
    },

    renderFooter(h) {
      return h('v-footer', {})
    },

    getCanvasData() {
      if (this.code) {
        this.$axios.post('/napi/viewdata/detail', { code: this.code }).then((res) => this.canvasData = res.data)
      } else {
        this.canvasData = this.data
      }
    }
  }
}
</script>

<style>
.preview-dialog .el-dialog__header,
.preview-dialog .el-dialog__body {
  padding: 0;
}
</style>