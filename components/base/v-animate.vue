<script>
import vcontainer from './v-container.vue'
export default {
  name: 'v-animate',

  extends: vcontainer,

  mounted() {
    this.observeTarget()
  },

  methods: {
    observeTarget() {
      this.$viewport(this.$el, this.dispatchAnimation)
    },

    dispatchAnimation() {
      this.$children.forEach((component) => component.runAnimation())
    }
  }
}
</script>