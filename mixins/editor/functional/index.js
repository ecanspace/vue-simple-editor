// export { default as eventMixin } from './event'
// export { default as stateMixin } from './state'
export { default as modelMixin } from './model'

let currentInstance = null

export const getActived = () => currentInstance

export const setActived = (instance) => {
  if (currentInstance) {
    currentInstance.actived = false
  }
  currentInstance = instance
}
