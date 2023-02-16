import deepmerge from 'deepmerge'

export const copied = (source, options = {}) => deepmerge(options.type === 'array' ? [] : {}, source, {
  clone: true
})

export const merged = (target, source) => deepmerge(target, source)

export const formatWidth = (value) => /^[-]?\d+$/.test(value) ? value + 'px' : value

export const formatMargin = (value) => {
  if (typeof value === 'string') {
    return value.split(/[\s\-\/]/).map(formatWidth).join(' ')
  }
}

export const isUrl = (value) => /^(http|https)/.test(value)

export const navigateTo = (url) => {
  const link = document.createElement('a')
  link.href = url
  link.target = '_blank'
  link.style.display = 'none'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export function renderChildren(h, mode = 'editable', children = this.model || []) {
  return children.map((options, index) => {
    const name = options.name

    if (options.key === undefined) {
      options.key = Date.now().toString() + index
    }

    return h(mode + '-' + name, {
      key: options.key,
      props: {
        props: options.props,
        name: name,
        value: options.children,
        animation: options.animation,
        index: index,
      }
    })
  })
}

export function camelify(target) {
  return target.replace(/\-\w/g, (match) => match[1].toUpperCase())
}

// let prevSelectedElement = null

// export const getSelected = () => prevSelectedElement

// export const setSelected = (target) => prevSelectedElement = target
