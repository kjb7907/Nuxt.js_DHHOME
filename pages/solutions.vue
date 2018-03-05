<template>
<div>
  <solutions-main></solutions-main>
  <div class="container">
    <div  style="width:100%; height:600px;"><h1>solution description area</h1></div>
  </div>
</div>
</template>

<script>
  import solutionsMain from '~/components/solutionsMain.vue'
  export default {
    components: {
      'solutions-main': solutionsMain
    }
  }
</script>

<style>
  p {
    font-size:12pt;
  }
</style>
