import { getDefaults } from '../common'

export const propsItems = () => [{
  label: '高度',
  prop: 'height',
  inputType: 'number'
}, {
  label: '背景颜色',
  prop: 'backgroundColor',
  formType: 'color-picker',
  componentProps: {
    showAlpha: true
  }
}]

const staticPropsItems = propsItems()

export const options = () => ({
  name: 'section',
  props: getDefaults(staticPropsItems),
  children: []
})
