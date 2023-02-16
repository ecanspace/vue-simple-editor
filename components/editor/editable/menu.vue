<script>
import vmenu from '@/components/base/v-menu.vue'
import commonMixin from '@/mixins/editor/index'
export default {
  name: 'editable-menu',
  extends: vmenu,
  mixins: [commonMixin],
}
</script>