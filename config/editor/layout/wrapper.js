import { getDefaults } from '../common'

export const propsItems = () => [{
    label: '宽度',
    prop: 'width',
    prefix: 'extend'
  },
  {
    label: '高度',
    prop: 'height',
    prefix: 'extend'
  },
  {
    label: '顶部距离',
    prop: 'top',
    prefix: 'extend'
  },
  {
    label: '左侧距离',
    prop: 'left',
    prefix: 'extend'
  },
  {
    label: '改变层级',
    prop: 'zIndex',
    inputType: 'number'
  },
  {
    label: '背景颜色',
    prop: 'backgroundColor',
    formType: 'color-picker',
    componentProps: {
      showAlpha: true
    }
  },
  {
    label: '背景图片',
    prop: 'backgroundImage',
    inputType: 'textarea',
    componentProps: {
      autosize: true
    }
  },
  {
    label: '背景视频',
    prop: 'backgroundVideo',
    inputType: 'textarea',
    componentProps: {
      autosize: true
    }
  },
  {
    label: '内边距',
    prop: 'padding',
  },
  {
    label: '水平铺满',
    prop: 'coveredWidth',
    formType: 'switch'
    // list: [{
    //     label: '水平',
    //     value: 'horizontal'
    //   },
    //   {
    //     label: '垂直',
    //     value: 'vertical'
    //   }, {
    //     label: '铺满',
    //     value: 'both'
    //   }
    // ]
  },
  {
    label: '变换',
    prop: 'transform',
    defaults: 'vertical',
    list: [{
      label: '水平',
      value: 'horizontal'
    }, {
      label: '垂直',
      value: 'vertical'
    }, {
      label: '自由',
      value: 'both'
    }, {
      label: '锁定',
      value: 'lock'
    }]
  }
]

const staticPropsItems = propsItems()

export const options = () => ({
  name: 'wrapper',
  props: getDefaults(staticPropsItems),
  children: []
})
