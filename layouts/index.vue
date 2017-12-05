<template>
  <div>

    <layout_top></layout_top>

    <solutions-main></solutions-main>
    <service-main></service-main>
    <project-main></project-main>

    <layout_bottom></layout_bottom>

  </div>
</template>

<script>

  import layout_top from '~/components/layout_top.vue'
  import layout_bottom from '~/components/layout_bottom.vue'

  import solutionsMain from '~/components/solutionsMain.vue'
  import serviceMain from '~/components/serviceMain.vue'
  import projectMain from '~/components/projectMain.vue'

  export default {
    components: {
      'layout_top': layout_top,
      'layout_bottom': layout_bottom,
      'solutions-main': solutionsMain,
      'service-main': serviceMain,
      'project-main': projectMain
    }
  }
</script>


<style>

</style>
