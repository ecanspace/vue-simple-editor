import { componentMap } from '@/config/editor/index'

export const namespaced = true

export const state = () => ({
  activeUnqid: 0,
  componentData: [],
})

let seed = 0;

// Mutation 负责更新数据 
export const mutations = {
  add(state, payload) {
    state.componentData.push(payload)
  },

  remove(state) {
    const index = state.componentData.findIndex((item) => item.unqid === state.activeUnqid)
    state.componentData.splice(index, 1)
  },

  update(state, payload) {
    const index = state.componentData.findIndex((item) => item.unqid === state.activeUnqid)
    const prevOptions = state.componentData[index]
    state.componentData.splice(index, 1, {
      ...prevOptions,
      ...payload
    })
  },

  updateActiveUnqid(state, unqid) {
    state.activeUnqid = unqid
  },
}

// Action 负责提交 Mutation 去修改数据
export const actions = {
  dropped(context, payload) {
    const options = {}, { type } = payload

    options.cname = 'v-' + type
    options.unqid = seed++

    const coord = options.coord = componentMap[type].coord()
    const props = options.props = componentMap[type].props()
    // const style = options.style = componentMap[type].style()

    coord.left = payload.xcoord
    coord.top  = payload.ycoord

    context.commit('add', options)
    context.commit('updateActiveUnqid', options.unqid)

    this.dispatch('proper/init', { type, coord, props })
  },

  selectComponent(context, unqid) {
    if (unqid === context.state.activeUnqid) return;

    const { cname, props, coord } = context.state.componentData.find((item) => item.unqid === unqid)
    context.commit('updateActiveUnqid', unqid)
    this.dispatch('proper/init', { type: cname.replace(/^v-/, ''), props, coord })
  },

  update(context, payload) {
    context.commit('update', payload)
    this.dispatch('proper/update', payload)
  },
}