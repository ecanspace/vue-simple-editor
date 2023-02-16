import { getDefaults, container } from '../common'

export const propsItems = () => container()

const staticPropsItems = propsItems()

export const options = () => ({
  name: 'container',
  props: getDefaults(staticPropsItems),
  children: []
})