<script>
import baseMixin from '@/mixins/editor/base'
export default {
  name: 'editable-popover',

  mixins: [baseMixin],

  created() {
    this.updateState({
      width: 120,
      left: 200,
      top: 200,
    })
  },

  render(h) {
    return h('div', {
      class: 'editable-popover',
      style: this.baseStyle
    }, [
      h('a', {
        class: 'editable-popover__trigger',
        style: {
          width: this.state.triggerWidth + 'px',
          height: this.state.triggerHeight + 'px',
        }
      }, [
        h('img', {
          attrs: {
            src: this.state.triggerImage
          },
          style: {
            marginLeft: this.state.triggerMarginLeft + 'px',
            marginTop: this.state.triggerMarginTop + 'px',
          }
        })
      ]),

      h('div', {
        class: 'editable-popover__content'
      }, [
        h('img', {
          attrs: {
            src: this.state.contentImage
          },
          style: {
            width: this.state.contentWidth + 'px',
            height: this.state.contentHeight + 'px',
          }
        })
      ])
    ])
  },
}
</script>

<style>
.editable-popover {
  display: inline-block;
  position: relative;
}
.editable-popover__trigger {
  display: block;
  height: 40px;
  cursor: pointer;
  overflow: hidden;
}
.editable-popover__trigger img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.editable-popover__content {
  padding: 10px;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  text-align: center;
}
</style>