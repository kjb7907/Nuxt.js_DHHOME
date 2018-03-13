<template>
  <div @before-open="beforeOpen" style="position:fixed; top:100px; left:20%;width:60%; height:800px; z-index: 9999">

    <div style="background-color: #4F4F4F; width:100%; padding:8px; border: solid black 1px;">
      <div class="row" style="color:#f1f1f1;">
        <div class="col-sm-11">{{ viewProject.name }}</div>
        <div class="col-sm-1" style="text-align: right;"><i class="fa fa-times" @click="closeModal()" style="cursor:pointer;"></i></div>
      </div>
    </div>

    <div style="overflow:auto; height:100%; background-color: white; border: 1px solid black;">

      <div class="row notosans" style="margin:20px; text-align:center;">
        <div>{{ viewProject.detail }}</div>
        <div> 작업 기간 : {{ viewProject.period }}</div>
        <div class="row">
          <img  :src="viewProject.path +'0.png'" class="img-responsive" style="margin:auto; margin-top:20px;">
          <div v-for="(i,index) in viewProject.lastImgNum" :key="index">
            <img  :src="viewProject.path+(i)+'.png'" class="img-responsive" style="margin:auto; margin-top:20px;">
          </div>
        </div>
      </div>

      <div style="height:100px;"></div>

    </div>

  </div>
</template>

<script>
  import project from '~/assets/project.js'

  export default {

    data() {
      return {
        projectList:[],
        viewProject: ''
      }
    },
    components: {
    },
    methods:{
      closeModal () {
        this.$store.dispatch('showYnPro', {showYn:false});
      },
      beforeOpen () {
        this.viewProject = this.projectList[this.$store.state.selProNum]
      }
    },
    computed:{

    },
    mounted() {
      this.projectList = project.projectList
      this.beforeOpen();
    }
  }
</script>

<style>

</style>
