<template>

</template>

<script>
import staticComponentData from '@/model/1647482449694.json'
export default {
  name: 'view-akjdsakda-aslkdkaslda',

  render(h) {
    return (
      <div class="view-akjdsakda-aslkdkaslda">{this.renderComponents(h)}</div>
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