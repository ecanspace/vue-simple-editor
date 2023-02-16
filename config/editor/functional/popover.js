import { getDefaults, position } from '../common'

export const propsItems = () => [{
    label: '图片#1',
    prop: 'triggerImage',
    inputType: 'textarea',
    componentProps: {
      autosize: true
    }
  },
  {
    label: '图片#1 宽度',
    prop: 'triggerWidth',
    inputType: 'number'
  },
  {
    label: '图片#1 高度',
    prop: 'triggerHeight',
    inputType: 'number'
  },
  {
    label: '图片#1 X轴偏移',
    prop: 'triggerMarginLeft',
    inputType: 'number'
  },
  {
    label: '图片#1 Y轴偏移',
    prop: 'triggerMarginTop',
    inputType: 'number'
  },
  {
    label: '图片#2',
    prop: 'contentImage',
    inputType: 'textarea',
    componentProps: {
      autosize: true
    }
  },
  {
    label: '图片#2 宽度',
    prop: 'contentWidth',
    inputType: 'number'
  },
  {
    label: '图片#2 高度',
    prop: 'contentHeight',
    inputType: 'number'
  },
  ...position()
]

const staticPropsItems = propsItems()

export const options = () => ({
  name: 'popover',
  props: getDefaults(staticPropsItems),
  children: []
})
