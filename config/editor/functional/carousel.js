import { getDefaults } from '../common'

export const propsItems = () => []

const staticPropsItems = propsItems()

export const options = () => ({
  name: 'carousel',
  props: getDefaults(staticPropsItems),
  children: []
})
