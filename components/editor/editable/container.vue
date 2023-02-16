<script>
import vcontainer from '@/components/base/v-container.vue'
import commonMixin from '@/mixins/editor/index'
import droppable from '@/mixins/editor/drop'
import { renderChildren } from '@/mixins/base/util'

export default {
  name: 'editable-container',

  extends: vcontainer,

  mixins: [commonMixin, droppable],

  methods: {
    renderChildren(h) {
      if (this.model.length === 0) {
        return this.renderPlaceholder(h)
      }
      return renderChildren.call(this, h)
    },

    renderPlaceholder(h) {
      return (
        <div class="editable-container__placeholder">
          <i class="el-icon-upload"></i>
          <span>拖拽到此</span>
        </div>
      )
    }
  }
}
</script>

<style>
.editable-container__placeholder {
  width: 100%;
  height: 60px;
  border: 1px dashed #409EFF;
  border-radius: 4px;
  color: #409EFF;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.editable-container__placeholder i {
  margin-right: 10px;
  font-size: 20px;
  vertical-align: top;
}
</style>