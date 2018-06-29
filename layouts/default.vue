<template>
  <div>

    <layout-top></layout-top>

    <div style="height:90px;"></div>
    <nuxt/>

    <layout-bottom></layout-bottom>
    
  </div>
</template>

<script>

  import layout_top_default from '~/components/layout_top_default.vue'
  import layout_bottom from '~/components/layout_bottom.vue'

  export default {
    components: {
      'layout-top': layout_top_default,
      'layout-bottom': layout_bottom
    }
  }
</script>


<style>

</style>
