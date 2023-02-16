import Vue from 'vue'
import Contextmenu from './main.vue'

const ContextmenuCtor = Vue.extend(Contextmenu)

let instance;

export default function contextmenu(options) {
  instance = instance || new ContextmenuCtor()

  // console.log(instance._events)

  if (instance.$el) {
    instance._events.remove.splice(0, 1, options.onRemove)
    instance._events.copy.splice(0, 1, options.onCopy)
  } else {
    instance.$on('remove', options.onRemove)
    instance.$on('copy', options.onCopy)
    instance.$mount()
  }

  // if (contextmenuEvents && contextmenuEvents.) {
  //   instance._events.remove.splice(0, 1, options.onRemove)
  // } else {
  //   instance.$on('remove', options.onRemove)
  // }

  // instance.$on('remove', options.onRemove)
  // instance.$on('copy', options.onCopy)

  instance.$el.style.left = (options.pageX + 1) + 'px'
  instance.$el.style.top  = (options.pageY + 1) + 'px'

  document.body.appendChild(instance.$el)

  Vue.nextTick(() => {
    instance.visible = true
  })
}

contextmenu.show = function showContextmenu(...args) {
  contextmenu.call(this, ...args)
}

contextmenu.hide = function hideContextmenu() {
  if (instance && instance.visible) {
    instance.visible = false
    instance.$el.parentNode.removeChild(instance.$el)
  }
}
