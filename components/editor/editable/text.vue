<script>
import vtext from '@/components/base/v-text.vue'
import baseMixin from '@/mixins/editor/base'
export default {
  name: 'editable-text',
  extends: vtext,
  mixins: [baseMixin],
  beforeCreate() {
    this.points = ['w', 'e']
  },
  render(h) {
    return this.renderShape(h)
  }
}
</script>