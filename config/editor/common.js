export function getDefaults(data) {
  return data.reduce((result, item) => (result[item.prop] = item.defaults, result), {})
}

export const common = () => [{
  label: '跳转链接',
  prop: 'linkUrl',
  inputType: 'textarea',
  componentProps: {
    autosize: true
  }
}, {
  label: '快速定位（相对容器）',
  prop: 'align',
  list: [{
    label: '水平居中',
    value: 'horizontal'
  }, {
    label: '垂直居中',
    value: 'vertical'
  }],
  componentProps: {
    multiple: true
  }
}]

export const base = (defaults = {}) => [{
    label: '内边距',
    prop: 'padding',
    defaults: defaults.padding
  },
  // {
  //   label: '边框',
  //   prop: 'outline',
  // },
  {
    label: '外边距',
    prop: 'margin',
  },
  {
    label: '背景颜色',
    prop: 'backgroundColor',
    formType: 'color-picker',
    defaults: defaults.backgroundColor,
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
    label: '圆角',
    prop: 'borderRadius',
    inputType: 'number'
  },
  {
    label: '层级',
    prop: 'zIndex',
    inputType: 'number'
  }
]

export const text = () => [{
    label: '字体颜色',
    prop: 'color',
    formType: 'color-picker',
  },
  {
    label: '字体大小',
    prop: 'fontSize',
    defaults: 14,
    inputType: 'number',
  },
  {
    label: '字体粗细',
    prop: 'fontWeight',
    defaults: '400',
    list: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  },
  {
    label: '行高',
    prop: 'lineHeight',
    defaults: 14,
    inputType: 'number',
  },
  {
    label: '文本对齐',
    prop: 'textAlign',
    list: [{
      label: '靠左',
      value: 'left'
    }, {
      label: '居中',
      value: 'center'
    }, {
      label: '靠右',
      value: 'right'
    }, {
      label: '两端',
      value: 'justify'
    }],
  },
  {
    label: '文本缩进',
    prop: 'textIndent',
    inputType: 'number',
  }
]

export const position = (defaults = {}) => [{
    label: '宽度',
    prop: 'width',
    inputType: 'number',
    defaults: defaults.width
  },
  {
    label: '高度',
    prop: 'height',
    inputType: 'number',
    defaults: defaults.height
  },
  {
    label: '顶部距离',
    prop: 'top',
    inputType: 'number'
  },
  {
    label: '左侧距离',
    prop: 'left',
    inputType: 'number'
  },
  // {
  //   label: '居中',
  //   prop: 'centerDirection',
  //   list: [{
  //     label: '水平居中',
  //     value: 'horizontal'
  //   }, {
  //     label: '垂直居中',
  //     value: 'vertical'
  //   }, {
  //     label: '垂直水平居中',
  //     value: 'both'
  //   }],
  // },
  // {
  //   label: '底部距离',
  //   prop: 'bottom',
  //   prefix: 'extend',
  // },
  // {
  //   label: '右侧距离',
  //   prop: 'right',
  //   prefix: 'extend',
  // },
  // {
  //   label: '层级',
  //   prop: 'zIndex',
  //   inputType: 'number'
  // }
]

export const flex = () => [{
    label: '排列方向',
    prop: 'direction',
    list: [{
      label: '水平',
      value: 'flex-row'
    }, {
      label: '垂直',
      value: 'flex-column'
    }]
  },
  {
    label: (props) => (props.direction === 'flex-column' ? '垂直' : '水平') + '排列方式',
    prop: 'horizontal',
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
  {
    label: (props) => (props.direction === 'flex-column' ? '水平' : '垂直') + '排列方式',
    prop: 'vertical',
    list: [{
      label: '靠前',
      value: 'items-start'
    }, {
      label: '居中',
      value: 'items-center'
    }, {
      label: '靠后',
      value: 'items-end'
    }, {
      label: '延伸',
      value: 'items-stretch'
    }]
  }
]

export const container = () => [
  ...common(),
  ...base(),
  ...position(),
  ...flex(),
]
