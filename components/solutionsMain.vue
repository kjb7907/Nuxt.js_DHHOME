<template>
  <div class="scroll-target3" style="background-color: #f0f0f0; border-top: solid 1px gray;">
    <div>

      <div class="section-title container">

        <h3 style="text-align: center; font-size:35pt;font-weight: 200; color:#333;">SOLUTIONS</h3>
        <hr>
      </div>

      <div class="row notosans" @click="selSolution(index)" v-for="(item, index) in solutionList">
        <div class="container">
          <div class="col-xs-4">
            <img :src="'/pack/'+item.packImg" class="img-responsive" style="margin:auto; margin-top:20px; border: solid 1px gray;">
          </div>
          <div class="col-xs-8">
            <!--<div><h3>{{ item.name }}</h3></div>-->
            <div><h4 style="color:black;">{{ item.subName }}</h4></div>
            <div v-for="detail in item.detailList">{{ detail }}</div>
          </div>
        </div>

        <transition name="fade">
          <div v-if="item.showYn" class="col-xs-12">
            <img :src="'/pack/'+item.detailImg" class="img-responsive" style="margin:auto; margin-top:20px;">
          </div>
        </transition>
      </div>

      <!--<div class="row">-->

        <!--<div v-for="(item, index) in solutionList" class="col-xs-4">-->
          <!--<div @click="selSolution(index)" ><img :src="'/pack/'+item.packImg" class="img-responsive" style="margin:auto; margin-top:20px;"></div>-->
          <!--<div class="media">-->
            <!--<div class="media-body">-->
              <!--<p>{{ item.detail }}</p>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->

      <!--</div>-->

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
        (this.solutionList[index].showYn) ? this.solutionList[index].showYn = false : this.solutionList[index].showYn = true;
        // this.$store.dispatch('selSolution', {num: index});
      }
    }
    ,mounted () {
      this.solutionList = solution.solutionList;
    }
  }
</script>

<style>

</style>
