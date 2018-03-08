<template>
  <div>
    <img :src="viewImg" style="width:100%;">
  </div>
</template>

<script>
  import solution from '~/assets/solution.js'

  export default {
    data() {
      return {
        solutionList: [],
        viewImg:'',
        isShow:true,
      }
    },
    computed:{
      selSolNum: function () {
        return this.$store.state.selSolNum;
      }
    },
    watch: {
      selSolNum: function () {
        this.viewImg = '/pack/'+this.solutionList[this.selSolNum].detailImg;
      }
    },
    methods: {

    }
    ,mounted () {
      this.solutionList = solution.solutionList;
      this.viewImg = '/pack/'+this.solutionList[this.selSolNum].detailImg;
    }
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
