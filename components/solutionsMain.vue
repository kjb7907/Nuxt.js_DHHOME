<template>
  <div>
    <div class="container">

      <div class="section-title">
        <h3 style="text-align: center; font-size:40pt;font-weight: 200;">SOLUTIONS</h3>
        <hr>
      </div>

      <div class="row">

        <div v-for="(item, index) in solutionList" class="col-md-4">
          <div v-on:mouseover="selSolution(index)" ><img :src="'/pack/'+item.packImg" class="img-responsive" style="margin:auto; margin-top:20px;"></div>
          <div class="media">
            <div class="media-body">
              <p>{{ item.detail }}</p>
            </div>
          </div>
        </div>

      </div>

      <div style="height:30px;"></div>


    </div>
    <!-- <modal-solutions solutionKey="PMS"></modal-solutions> -->
  </div>
</template>

<script>
  import modal_solutions from '~/components/modal_solutions.vue'
  import solution from '~/assets/solution.js'

  export default {
    data() {
      return {
        solutionList:[]
      }
    },
    components: {
      'modal-solutions': modal_solutions
    },
    methods: {
      selSolution: function (index) {
        this.$store.dispatch('selSolution', {num: index});
      }
    }
    ,mounted () {
      this.solutionList = solution.solutionList;
    }
  }
</script>

<style>

</style>
