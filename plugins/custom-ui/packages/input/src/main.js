// import Vue from 'vue'
import { Input } from 'element-ui'

const changeInput = (value, step) => {
  return value.replace(/^[-]?\d+/, (match) => Number(match) + step)
}

export default {
  name: 'ExtendInput',

  extends: Input,

  mounted() {
    this.$el.addEventListener('keydown', this.keydownHandler)
  },

  beforeDestroy() {
    this.$el.removeEventListener('keydown', this.keydownHandler)
  },

  methods: {
    keydownHandler(event) {
      let newValue = ''

      if (event.code === 'ArrowUp') {
        newValue = changeInput(event.target.value, 1)
      } else if (event.code === 'ArrowDown') {
        newValue = changeInput(event.target.value, -1)
      } else {
        return;
      }

      this.$emit('input', newValue)
      this.$nextTick(this.setNativeInputValue)
    }
  }
}
