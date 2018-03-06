<template>
<div>
  <solutions-main></solutions-main>
  <solution-view></solution-view>
</div>
</template>

<script>
  import solutionsMain from '~/components/solutionsMain.vue'
  import solutionView from '~/components/solutionView.vue'
  export default {
    components: {
      'solutions-main': solutionsMain,
      'solution-view': solutionView
    }
  }
</script>

<style>
  p {
    font-size:12pt;
  }
</style>
