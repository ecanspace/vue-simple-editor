<script>
import vbutton from '@/components/base/v-button.vue'
import baseMixin from '@/mixins/editor/base'
export default {
  name: 'editable-button',
  extends: vbutton,
  mixins: [baseMixin]
}
</script>