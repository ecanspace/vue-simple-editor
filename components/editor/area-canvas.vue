<script>
import deepmerge from 'deepmerge'
import { renderChildren } from '@/mixins/base/util'
// 画布区域
export default {
  name: 'AreaCanvas',

  // provide() {
  //   return {
  //     canvas: this
  //   }
  // },

  beforeCreate() {
    this.viewModel = {}
    this.viewModel.children = []
  },

  data() {
    return {
      model: []
    }
  },

  created() {
    this.EVENT_BUS.$on('getCanvasData', (callback) => {
      callback(deepmerge({}, this.viewModel, { clone: true }))
    })
  },

  beforeDestroy() {
    this.EVENT_BUS.$off('getCanvasData')
  },

  render(h) {
    return h('div', {
      class: 'area-canvas'
    }, [
      this.renderChildren(h)
    ])
  },

  mounted() {
    const currentCode = this.$route.query.code

    if (currentCode) {
      this.$axios.post('/napi/viewdata/detail', {
        code: currentCode
      }).then((res) => {
        this.model = res.data
      })
    } else {
      this.model = [{
        name: 'scroller',
        props: {},
        children: []
      }]
    }
  },

  methods: {
    renderChildren: renderChildren,
  }
}
</script>

<style>
.area-canvas {
  display: block;
  height: 100%;
  background-color: #eef2f8;
  position: relative;
}
</style>
