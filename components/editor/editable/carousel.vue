<script>
import vcarousel from '@/components/base/v-carousel.vue'
import baseMixin from '@/mixins/editor/base'
export default {
  name: 'editable-carousel',
  extends: vcarousel,
  mixins: [baseMixin],
}
</script>