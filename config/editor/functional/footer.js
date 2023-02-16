import { getDefaults } from '../common'

export const propsItems = () => [{
  label: '背景颜色',
  prop: 'backgroundColor',
  defaults: '#14151a',
  formType: 'color-picker',
  componentProps: {
    showAlpha: true
  }
}]

const staticPropsItems = propsItems()

export const options = () => ({
  name: 'footer',
  props: getDefaults(staticPropsItems),
  children: []
})
