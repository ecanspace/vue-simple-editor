<template>

</template>

<script>
import staticComponentData from '@/model/1648347248433.json'
export default {
  name: 'view-home',

  render(h) {
    return (
      <div class="view-home">{this.renderComponents(h)}</div>
    )
  },

  methods: {
    renderComponents(h) {
      return staticComponentData.map((item) => {
        const targetVnode = h(item.cname, {
          props: item.props
        })

        return h('div', {
          props: {
            coord: item.coord
          }
        }, [
          targetVnode
        ])
      })
    }
  }
}
</script>

<style>

</style>