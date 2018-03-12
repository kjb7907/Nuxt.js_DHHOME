<template>
  <div id="projectContainer" style="min-height:900px; background-color:snow;">
    <div class="container" style="color:#333;">
      <div class="section-title">
        <h3 style="text-align: center; font-size:40pt;font-weight: 200;">WORKS</h3>
        <hr style="width:100%;">
      </div>

      <!-- <div class="space"></div> -->
      <div v-for="(i,index) in projectList" class="row" :key="index"
        @click="detailOpen(index)"
        style="cursor: pointer; margin:10px 0px 10px 0px;">
        <div class="col-xs-4">
          <img :src="i.path+'thumb.png'" class="img-responsive" style="max-height:200px;margin:auto; margin-top:20px; margin-bottom:5px; border: solid 1px gray;">
        </div>
        <div class="col-xs-8">
          <h3>{{ i.name }}</h3>
          <div>작업기간: {{ i.period }}</div>
          <div>{{ i.detail }}</div>
        </div>
      </div>
      <!--<div class="row">-->
          <!--<div v-for="(i,index) in projectList" class="col-sm-3" :key="index"-->
               <!--@click="detailOpen(index)"-->
               <!--style="cursor: pointer">-->
            <!--<img :src="i.path+'1.png'" class="img-responsive" style="height:140px; margin:auto; margin-top:20px; margin-bottom:5px;">-->
            <!--<div style="text-align: center; font-weight: 400;">{{ i.name }}</div>-->
          <!--</div>-->
      <!--</div>-->

    </div>

    <!--<modal-project></modal-project>-->
    <transition name="fade">
      <modal-portfolio v-if="showYnPro"></modal-portfolio>
    </transition>


  </div>
</template>

<script>
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
      'modal-portfolio': modal_portfolio
    },
    methods:{
      detailOpen(index) {
        this.selectProject = index;
        this.$store.dispatch('selProject', {num:index});
        this.$store.dispatch('showYnPro', {showYn:true});
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
