import baseMixin from './index'
import flexible from './flexible'
import { renderChildren } from './util'

export default {
  mixins: [baseMixin, flexible],

  props: {
    value: Array,
  },

  data() {
    return {
      model: this.value || [],
    }
  },

  methods: {
    renderChildren: renderChildren,
  }
}
