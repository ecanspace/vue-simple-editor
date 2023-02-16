<template>

</template>

<script>
import staticComponentData from '@/model/1646789200716.json'
export default {
  name: 'view-demo-page',

  render(h) {
    return (
      <div class="view-demo-page">{this.renderComponents(h)}</div>
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