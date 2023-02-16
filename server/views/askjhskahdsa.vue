<template>

</template>

<script>
import staticComponentData from '@/model/1647959127050.json'
export default {
  name: 'view-askjhskahdsa',

  render(h) {
    return (
      <div class="view-askjhskahdsa">{this.renderComponents(h)}</div>
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