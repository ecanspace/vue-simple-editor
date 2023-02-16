export const getComponents = () => [{
    label: '基础组件',
    children: [{
      type: 'text',
      label: '文本',
      icon: 'el-icon-message'
    }, {
      type: 'image',
      label: '图片',
      icon: 'el-icon-picture'
    }, {
      type: 'video',
      label: '视频',
      icon: 'el-icon-video-play'
    }, {
      type: 'button',
      label: '按钮',
      icon: 'el-icon-link'
    }]
  },
  {
    label: '布局组件',
    children: [
      // {
      //   type: 'container',
      //   label: '常规',
      //   icon: 'el-icon-s-grid'
      // },
      // {
      //   type: 'animate',
      //   label: '动画',
      //   icon: 'el-icon-magic-stick'
      // },
      {
        type: 'wrapper',
        label: '容器',
        icon: 'el-icon-magic-stick'
      }
    ]
  },
  {
    label: '功能组件',
    children: [
      // {
      //   type: 'menu',
      //   label: '菜单',
      //   icon: 'el-icon-menu'
      // },
      {
        type: 'popover-fade',
        label: '悬停一',
        icon: 'el-icon-menu'
      },
      {
        type: 'popover-slide',
        label: '悬停二',
        icon: 'el-icon-menu'
      },
      {
        type: 'carousel',
        label: '轮播',
        icon: 'el-icon-menu'
      },
      // {
      //   type: 'footer',
      //   label: '页脚',
      //   icon: 'el-icon-paperclip'
      // }
    ]
  }
]
