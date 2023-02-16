import { getDefaults, base, common, position } from '../common'

export const propsItems = () => [{
    label: '图片链接',
    prop: 'src',
    inputType: 'textarea',
    componentProps: {
      autosize: true
    }
  }, {
    label: '图片模式',
    prop: 'objectFit',
    defaults: 'contain',
    list: [{
      label: '填充',
      value: 'fill'
    }, {
      label: '包含',
      value: 'contain'
    }, {
      label: '覆盖',
      value: 'cover'
    }, {
      label: '无',
      value: 'none'
    }, {
      label: '缩放',
      value: 'scale-down'
    }],
  }, {
    label: '铺满',
    prop: 'fullmode',
    list: [{
      label: '横向',
      value: 'fill'
    }, {
      label: '纵向',
      value: 'contain'
    }, {
      label: '全部',
      value: 'cover'
    }],
  },
  ...base(),
  ...position({ width: 400, height: 200 }),
  ...common(),
]

const staticPropsItems = propsItems()

export const options = () => ({
  name: 'image',
  props: getDefaults(staticPropsItems),
  children: [],
})
