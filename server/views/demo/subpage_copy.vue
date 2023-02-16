<template>

</template>

<script>
import staticComponentData from '@/model/1647010798519.json'
export default {
  name: 'view-demo-subpage_copy',

  render(h) {
    return (
      <div class="view-demo-subpage_copy">{this.renderComponents(h)}</div>
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