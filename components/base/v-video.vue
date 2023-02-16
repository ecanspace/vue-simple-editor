<script>
import baseMixin from '@/mixins/base/index'
export default {
  name: 'v-video',

  mixins: [baseMixin],

  render(h) {
    return (
      <div class="v-video__wrapper" style={this.baseStyle}>{this.renderTarget(h)}</div>
    )
  },

  methods: {
    renderTarget(h) {
      return this.state.src ? h('video', {
        class: 'v-video',
        attrs: {
          src: this.state.src,
          autoplay: true,
          loop: true,
          muted: true,
          playsinline: true
        }
      }) : h('div', {
        class: 'v-video__placeholder'
      }, [
        h('i', {
          class: 'el-icon-video-play'
        })
      ])
    }
  }
}
</script>

<style>
.v-video {
  width: 100%;
}
.v-video__placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
}
.v-video__placeholder i {
  color: #909399;
  font-size: 30px;
}
</style>