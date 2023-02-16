import { getDefaults } from '../common'

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
    prop: 'triggerImageLeft',
    inputType: 'number'
  },
  {
    label: '图片#1 Y轴偏移',
    prop: 'triggerImageTop',
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
    prop: 'contentImageWidth',
    inputType: 'number'
  },
  {
    label: '图片#2 高度',
    prop: 'contentImageHeight',
    inputType: 'number'
  }
]

const staticPropsItems = propsItems()

export const options = () => ({
  name: 'popover-fade',
  props: getDefaults(staticPropsItems),
  children: []
})
