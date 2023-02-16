<template>

</template>

<script>
import staticComponentData from '@/model/1646932979091.json'
export default {
  name: 'view-lksada',

  render(h) {
    return (
      <div class="view-lksada">{this.renderComponents(h)}</div>
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