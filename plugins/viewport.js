import Vue from 'vue'

// viewport plugin
Vue.use(function install(Vue) {
  const observedMap = new Map()

  function emitCallback(entries) {
    // console.log(entries)
    // 默认地，当元素出现或离开可视区都会执行当前回调函数，
    // 这里我们只选择 isIntersecting 为 true 即出现可视区的场景
    const handlers = entries.filter((item) => item.isIntersecting).map((item) => observedMap.get(item.target))
    handlers.forEach((handler) => handler())
  }

  const observer = new IntersectionObserver(emitCallback, {
    threshold: '1.0'
  })

  function registerObserved(target, handler) {
    if (!observedMap.has(target)) {
      observedMap.set(target, handler)
      observer.observe(target)
    }
  }

  Vue.prototype.$viewport = registerObserved
})
