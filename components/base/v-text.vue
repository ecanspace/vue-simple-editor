<script>
import baseMixin from '@/mixins/base/index'
export default {
  name: 'v-text',
  mixins: [baseMixin],
  render(h) {
    return (
      <div class="v-text" style={this.baseStyle}>{this.renderTarget(h)}</div>
    )
  },
  methods: {
    renderTarget(h) {
      const wrapText = this.state.text.split(/\n/).map((text) => h('div', text))
      return h('div', [wrapText])
    }
  }
}
</script>