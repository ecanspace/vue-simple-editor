<template>

</template>

<script>
import staticComponentData from '@/model/1647247875616.json'
export default {
  name: 'view-asjdkasjda',

  render(h) {
    return (
      <div class="view-asjdkasjda">{this.renderComponents(h)}</div>
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