import Dialog from '../packages/dialog'
import Popover from '../packages/popover'
import Input from '../packages/input'

export default {
  name: 'custom-ui',
  install(Vue) {
    Vue.component(Popover.name, Popover)
    Vue.component(Input.name, Input)
    Vue.prototype.$dialog = Dialog
  }
}
