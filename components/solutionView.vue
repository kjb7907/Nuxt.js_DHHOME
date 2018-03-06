<template>
  <div class="container">
    {{ solutionList[selSolNum].detail }}
  </div>
</template>

<script>
  import solution from '~/assets/solution.js'

  export default {
    data() {
      return {
        solutionList: []
      }
    },
    computed:{
      selSolNum: function () {
        return this.$store.state.selSolNum;
      }
    },
    methods: {

    }
    ,mounted () {
      this.solutionList = solution.solutionList;
    }
  }
</script>

<style>

</style>
