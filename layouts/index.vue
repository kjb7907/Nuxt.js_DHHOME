<template>
  <div>

    <layout-top></layout-top>

    <about id="dh-about"></about>

    <solutions-main id="dh-solution"></solutions-main>

    <solution-view></solution-view>

    <project-main id="dh-portfolio"></project-main>

    <contaact id="dh-contact"></contaact>

    <layout-bottom></layout-bottom>

  </div>
</template>

<script>

  import layout_top_index from '~/components/layout_top_index.vue'
  import layout_bottom from '~/components/layout_bottom.vue'
  import about from '~/components/about.vue'
  import solutionsMain from '~/components/solutionsMain.vue'
  import solutionView from '~/components/solutionView.vue'
  import projectMain from '~/components/projectMain.vue'
  import contact from '~/components/contact.vue'

  export default {
    components: {
      'layout-top': layout_top_index,
      'layout-bottom': layout_bottom,
      'about': about,
      'solutions-main': solutionsMain,
      'solution-view': solutionView,
      'project-main': projectMain,
      'contaact': contact
    }
  }
</script>


<style>

</style>
