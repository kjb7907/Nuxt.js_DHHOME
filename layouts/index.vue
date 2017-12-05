<template>
  <div>

    <layout-top></layout-top>

    <solutions-main></solutions-main>
    <service-main></service-main>
    <project-main></project-main>

    <layout-bottom></layout-bottom>

  </div>
</template>

<script>

  import layout_top_index from '~/components/layout_top_index.vue'
  import layout_bottom from '~/components/layout_bottom.vue'

  import solutionsMain from '~/components/solutionsMain.vue'
  import serviceMain from '~/components/serviceMain.vue'
  import projectMain from '~/components/projectMain.vue'

  export default {
    components: {
      'layout-top': layout_top_index,
      'layout-bottom': layout_bottom,
      'solutions-main': solutionsMain,
      'service-main': serviceMain,
      'project-main': projectMain
    }
  }
</script>


<style>

</style>
