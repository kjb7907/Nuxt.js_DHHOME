<template>
  <div>
    <div class="container">

      <div class="section-title">
        <h3 style="text-align: center; font-size:30pt;font-weight: 300;">SOLUTIONS</h3>
        <hr>
      </div>

      <div class="row">

        <div v-for="(item, index) in solutionList" class="col-md-4">
          <div><img :src="'/pack/'+item.packImg" class="img-responsive" style="margin:auto; margin-top:20px;"></div>
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
    }
    ,mounted () {
      console.log(solution);
      this.solutionList = solution.solutionList;
      console.log(this.solutionList);

    }
  }
</script>

<style>

</style>
