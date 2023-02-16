import * as basic from './basic/index'
import * as functional from './functional/index'
import * as layout from './layout/index'

export const componentMap = {
  ...basic,
  ...layout,
  ...functional,
}

export * from './animation'
export * from './common'
export * from './component'
