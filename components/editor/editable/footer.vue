<script>
import vfooter from '@/components/base/v-footer.vue'
import baseMixin from '@/mixins/editor/base'
export default {
  name: 'editable-footer',
  extends: vfooter,
  mixins: [baseMixin],
  created() {
    this.updateState({
      left: 0
    })
  },
  methods: {
    doTranslate(moveX, moveY) {
      this.state.top = Math.max(0, this.state.top + moveY)
    }
  }
}
</script>