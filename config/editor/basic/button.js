import { getDefaults, common, position, text } from '../common'

export const propsItems = () => [{
    label: '文本',
    prop: 'text',
    inputType: 'textarea',
    defaults: '默认按钮',
    componentProps: {
      autosize: true
    }
  },
  {
    label: '主题颜色',
    prop: 'themeColor',
    defaults: '#409EFF',
    formType: 'color-picker'
  },
  {
    label: '边框',
    prop: 'border',
    inputType: 'number'
  },
  {
    label: '圆角',
    prop: 'borderRadius',
    inputType: 'number'
  },
  ...text(),
  ...position({ width: 130, height: 40 }),
  ...common(),
]

const staticPropsItems = propsItems()

export const options = () => ({
  name: 'button',
  props: getDefaults(staticPropsItems),
  children: [],
})
