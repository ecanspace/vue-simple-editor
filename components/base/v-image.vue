<script>
import baseMixin from '@/mixins/base/index'
export default {
  name: 'v-image',

  mixins: [baseMixin],

  render(h) {
    return (
      <div class="v-image__wrapper" style={this.baseStyle}>{this.renderTarget(h)}</div>
    )
  },

  methods: {
    renderTarget(h) {
      return this.state.src ? h('img', {
        class: 'v-image',
        attrs: {
          src: this.state.src
        },
        style: {
          objectFit: this.state.objectFit
        }
      }) : h('div', {
        class: 'v-image__placeholder'
      }, [
        h('i', {
          class: 'el-icon-picture-outline'
        })
      ])
    }
  }
}
</script>

<style>
.v-image,
.v-image__placeholder {
  width: 100%;
  height: 100%;
}
.v-image__placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
}
.v-image__placeholder i {
  color: #909399;
  font-size: 30px;
}
</style>