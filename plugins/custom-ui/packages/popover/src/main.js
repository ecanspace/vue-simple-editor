// import Vue from 'vue'
import { Popover } from 'element-ui'

export default {
  name: 'ExtendPopover',

  extends: Popover,

  watch: {
    placement(val) {
      this.currentPlacement = val
    }
  }
}
