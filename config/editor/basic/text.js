import { getDefaults, base, common, text } from '../common'

export const propsItems = () => [{
    label: '文本内容',
    prop: 'text',
    defaults: '我是一段文字',
    inputType: 'textarea',
    componentProps: {
      autosize: true
    }
  },
  {
    label: '宽度',
    prop: 'width',
    inputType: 'number',
    defaults: 200
  },
  ...text(),
  ...base({ padding: '10/20' }),
  ...common()
]

const staticPropsItems = propsItems()

export const options = () => ({
  name: 'text',
  props: getDefaults(staticPropsItems),
  children: []
})
