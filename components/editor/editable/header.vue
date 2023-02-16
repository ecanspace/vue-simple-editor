<script>
import vheader from '@/components/base/v-header.vue'
import baseMixin from '@/mixins/editor/base'
export default {
  name: 'editable-header',
  extends: vheader,
  mixins: [baseMixin],
  inject: ['viewport'],
  beforeCreate() {
    this.movable = false
  },
  created() {
    this.updateState({ width: 1200, top: 0 })
  },
  mounted() {
    const viewportElm = this.viewport.$el
    const width = viewportElm.clientWidth
    const left = -Math.ceil((width - this.state.width) / 2)
    this.updateState({ width, left })
  }
}
</script>

<style scoped>
.smartable-header {
  position: sticky !important;
}
</style>