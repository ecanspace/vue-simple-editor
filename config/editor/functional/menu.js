import { getDefaults, base } from '../common'

export const propsItems = () => [{
    label: '内容高度',
    prop: 'height',
    defaults: 46,
    inputType: 'number',
  }, {
    label: 'LOGO图片',
    prop: 'logo',
    inputType: 'textarea',
    componentProps: {
      autosize: true
    }
  }, {
    label: '字体颜色',
    prop: 'color',
    defaults: '#fff',
    formType: 'color-picker',
    componentProps: {
      showAlpha: true
    }
  }, {
    label: '排列方式',
    prop: 'horizontal',
    defaults: 'flex-center',
    list: [{
      label: '靠前',
      value: 'flex-start'
    }, {
      label: '居中',
      value: 'flex-center'
    }, {
      label: '靠后',
      value: 'flex-end'
    }, {
      label: '环绕',
      value: 'flex-around'
    }, {
      label: '两端对齐',
      value: 'flex-between'
    }]
  },
  ...base({
    backgroundColor: '#14151a',
    padding: '10'
  })
]

const staticPropsItems = propsItems()

export const options = () => ({
  name: 'menu',
  props: getDefaults(staticPropsItems),
  children: []
})
