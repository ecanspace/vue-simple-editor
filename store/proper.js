import { componentMap } from '@/config/editor/index'
import { getActived, setActived } from '@/mixins/editor/functional/index'
import { camelify } from '@/mixins/base/util'
import { stacker } from '@/assets/js/stacker'

export const namespaced = true

export const state = () => ({
  formItems: [],
  formData: {},
  animation: [],
})

// 非常类似于事件，是被用来提交的
export const mutations = {
  resetForm(state, payload) {
    state.formItems = payload
  },

  resetFormData(state, payload) {
    state.formData = payload
  },

  resetAnimation(state, payload) {
    state.animation = payload
  },

  updateFormData(state, payload) {
    state.formData = {
      ...state.formData,
      ...payload
    }
  },
}

// Action 负责提交 Mutation 去修改数据
export const actions = {
  renderRightbar(context, payload) {
    const currentInstance = getActived()

    if (payload.instance !== currentInstance) {
      const formItems = componentMap[camelify(payload.name)].propsItems()

      context.commit('resetForm', formItems)
      context.commit('resetAnimation', payload.animation)

      setActived(payload.instance)
    }

    context.commit('resetFormData', payload.props)
  },

  updateFormData(context, payload) {
    context.commit('updateFormData', payload)
    const instance = getActived()

    stacker.add({
      action: 'update',
      subject: 'props',
      target: instance,
      from: instance.state,
      payload: payload
    })

    instance.updateState(payload)
    // instance.updateState(context.state.formData)
  },

  updateAnimation(context, payload) {
    context.commit('resetAnimation', payload)
    getActived().updateAnimation(context.state.animation)
  },
}
