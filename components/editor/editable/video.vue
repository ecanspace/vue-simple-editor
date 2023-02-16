<script>
import vvideo from '@/components/base/v-video.vue'
import baseMixin from '@/mixins/editor/base'
export default {
  name: 'editable-video',
  extends: vvideo,
  mixins: [baseMixin],
  render(h) {
    return this.renderShape(h)
  }
}
</script>