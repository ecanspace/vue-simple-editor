<template>

</template>

<script>
import staticComponentData from '@/model/1646891995338.json'
export default {
  name: 'view-demo-subpage',

  render(h) {
    return (
      <div class="view-demo-subpage">{this.renderComponents(h)}</div>
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