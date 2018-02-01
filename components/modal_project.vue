<template>
    <modal name="modal-project"
           width="60%"
           height="80%"
           @before-open="beforeOpen"
    >
      <div style="background-color:#191919; width:100%; padding:8px;">
        <div class="row" style="color:#f1f1f1;">
          <div class="col-sm-11">{{ viewProject.name }}</div>
          <div class="col-sm-1" style="text-align: right;"><i class="fa fa-times" @click="closeModal()" style="cursor:pointer;"></i></div>
        </div>
      </div>

      <div style="overflow:auto; height:100%;">



        <div class="row" style="margin:20px; text-align:center;">
          <div>{{ viewProject.detail }}</div>
          <div> 작업 기간 : {{ viewProject.period }}</div>
          <div class="row">
            <template v-for="(i,index) in viewProject.lastImgNum">
              <div :key="index">
                <img  :src="viewProject.path+(i)+'.png'" class="img-responsive" style="margin:auto; margin-top:20px;">
              </div>
            </template>
          </div>
        </div>

        <div style="height:100px;"></div>

      </div>
    </modal>
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
        this.$modal.hide('modal-project');
      },
      beforeOpen () {
        this.viewProject = this.projectList[this.$store.state.selProNum]
      }
    },
    computed:{

    },
    mounted() {
      this.projectList = project.projectList
    }
  }
</script>

<style>

</style>
