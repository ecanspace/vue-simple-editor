<script>
import baseMixin from '@/mixins/base/index'
export default {
  name: 'v-popover',

  mixins: [baseMixin],

  props: {
    placement: String,
    src: String,
    icon: String,
    label: String,
  },

  render(h) {
    const { placement } = this.currentProps

    return (
      <extend-popover props={{ trigger: 'hover', placement }} style={this.baseStyle}>
        {this.renderPopoverContent(h)}
        {this.renderReference(h)}
      </extend-popover>
    )
  },

  methods: {
    renderPopoverContent(h) {
      const DefaultContent = (<img src={this.currentProps.src} class="popover-content__image" />)
      return this.currentProps.content ? this.currentProps.content : DefaultContent
    },

    renderReference(h) {
      return (
        <div class="popover-content__trigger" slot="reference">
          {this.currentProps.icon ? (<img src={this.currentProps.icon} />) : null}
          <span>{this.currentProps.label}</span>
        </div>
      )
    },
  }
}
</script>

<style>
.popover-content__image {
  object-fit: contain;
}
.popover-content__trigger {
  display: inline-flex;
  align-items: center;
}
.popover-content__trigger img {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 6px;
}
</style>