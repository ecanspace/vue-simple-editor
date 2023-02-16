<script>
import { mapState } from 'vuex'

const formTypes = {
  INPUT: 'input',
  SELECT: 'select',
}

const inputTypes = {
  TEXT: 'text',
  NUMBER: 'number',
}

export default {
  // data() {
  //   return {
  //     targetForm: {},
  //   }
  // },

  computed: mapState({
    formItems: (state) => state.proper.formItems,
    formData: (state) => state.proper.formData,
  }),

  render(h) {
    return (
      <div class="area-controller__props">
        <ElForm props={{ labelPosition: 'top' }}>
          {this.renderFormItems(h)}
        </ElForm>
      </div>
    )
  },

  methods: {
    renderFormItems(h) {
      return this.formItems.map((item) => (
        <ElFormItem props={{ label: typeof item.label === 'function' ? item.label(this.formData) : item.label }}>
          {this.renderFormComponent(h, item)}
        </ElFormItem>
      ))
    },
    
    renderFormComponent(h, item) {
      let name = item.formType || formTypes.INPUT,

      props = {
        ...item.componentProps,
        value: this.formData[item.prop]
      },

      children = [];

      if (name === formTypes.INPUT) {
        props.type = item.inputType || (typeof item.defaults === 'number' ? inputTypes.NUMBER : inputTypes.TEXT)
      }

      if (Array.isArray(item.list)) {
        name = formTypes.SELECT, 
        children = item.list.map((item) => {
          if (typeof item !== 'object') {
            item = { value: item }
          }
          return (
            <ElOption props={{ label: item.label, value: item.value }}></ElOption>
          )
        })
      }

      return h((item.prefix || 'el') + '-' + name, {
        props: props,
        on: {
          input: (val) => this.handleInput(item.prop, val)
        }
      }, children)
    },

    handleInput(prop, value) {
      this.$store.dispatch('proper/updateFormData', { [prop]: value })
    },
  }
}
</script>

<style>
.area-controller__props {
  padding: 0 20px;
}
.el-form--label-top .el-form-item {
  margin-bottom: 10px;
}
.el-form--label-top .el-form-item__label {
  display: block;
  line-height: normal;
  padding: 6px 0;
  margin-bottom: 10px;
}
</style>