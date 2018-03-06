<template>
  <div id="projectContainer" style="min-height:800px;">
    <div class="container" style="color:white;">
      <div class="section-title">
        <h3 style="text-align: center; font-size:40pt;font-weight: 100;">WORK</h3>
        <hr>
      </div>

      <!-- <div class="space"></div> -->
      <div class="row">
          <div v-for="(i,index) in projectList" class="col-sm-3" :key="index"
               @click="detailOpen(index)"
               v-on:mouseover="nameShow(index)"
               v-on:mouseout="nameHide(index)"
               style="cursor: pointer">
            <transition name="fade">
              <div v-if="i.nameShowYn">
                <div class="workName">{{ i.name }}</div>
                <div class="workCover"></div>
              </div>
            </transition>
            <img :src="i.path+'1.png'" class="img-responsive" style="height:140px; margin:auto; margin-bottom:15px;">
          </div>
      </div>

    </div>

    <!--<modal-project></modal-project>-->
    <transition name="fade">
      <modal-portfolio v-if="showYnPro"></modal-portfolio>
    </transition>


  </div>
</template>

<script>
import modal_project from '~/components/modal_project'
import modal_portfolio from '~/components/modal_portfolio'
import project from '~/assets/project.js'

  export default {
    data() {
      return {
        projectList:[],
        selectProject: 0
      }
    },
    computed:{
      showYnPro: function () {
        return this.$store.state.isShowPro;
      }
    },
    components: {
      'modal-portfolio': modal_portfolio,
      'modal-project':modal_project
    },
    methods:{
      detailOpen(index) {
        this.selectProject = index;
        this.$store.dispatch('selProject', {num:index});
        this.$store.dispatch('showYnPro', {showYn:true});
      },
      nameShow(index){
        this.projectList[index].nameShowYn = true;
      },
      nameHide(index){
        this.projectList[index].nameShowYn = false;
      }
    },
    mounted: function() {
      this.projectList = project.projectList;

    }
  }
</script>

<style>
 #projectContainer {
   background-color: #333;
 }

 img{
   cursor: pointer;
 }

 h4 {

 }

 .fade-enter-active, .fade-leave-active {
   transition: opacity .5s;
 }
 .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
   opacity: 0;
 }
</style>
