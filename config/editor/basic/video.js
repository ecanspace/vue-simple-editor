import { getDefaults, base, common, position } from '../common'

export const propsItems = () => [{
    label: '视频链接',
    prop: 'src',
    inputType: 'textarea',
    componentProps: {
      autosize: true
    }
  },
  ...base(),
  ...position({ width: 400, height: 200 }),
  ...common(),
]

const staticPropsItems = propsItems()

export const options = () => ({
  name: 'video',
  props: getDefaults(staticPropsItems),
  children: []
})
