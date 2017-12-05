<template>
  <div>
    <service-main></service-main>
  </div>
</template>

<script>
  import serviceMain from '~/components/serviceMain.vue'
  export default {
    components: {
      'service-main': serviceMain
    }
  }
</script>

<style>
  p {
    font-size:12pt;
  }
</style>
