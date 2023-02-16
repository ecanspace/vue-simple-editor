<script>
import vimage from '@/components/base/v-image.vue'
import baseMixin from '@/mixins/editor/base'
export default {
  name: 'editable-image',
  extends: vimage,
  mixins: [baseMixin],
  render(h) {
    return this.renderShape(h)
  }
}
</script>