<template>
  <div>
    <modal name="modal-project"
           width="60%"
           height="90%"
    >
      <div style="overflow:auto; height:100%;">

        <div style="background-color:#191919; padding:8px;">
          <div style="color:#f1f1f1;">
            <div style="font-size:10pt;">{{ viewProject.name }}</div>
          </div>
        </div>

        <div style="margin:20px; text-align:center;">
          <div>{{ viewProject.detail }}</div>
          <div>{{ viewProject.period }}</div>
          <div class="row">
            <template v-for="(i,index) in viewProject.lastImgNum">
              <div :key="index">
                <img  :src="viewProject.path+(i)+'.png'" class="img-responsive" style="margin:auto; margin-top:20px;">
              </div>
            </template>
          </div>  
        </div>

      </div>
    </modal>
  </div>
</template>

<script>
import project from '~/assets/project.js'

  export default {
    props: [
      'projectIndex'
    ],
    data() {
      return {
        projectList:[],
        viewProject: ''
      }
    },    
    components: {
    },
    methods:{

    },
    watch:{
      projectIndex() {
        this.projectList = project.projectList
        this.viewProject = this.projectList[this.projectIndex]
      }
    },
    mounted() {
      this.projectList = project.projectList
      this.viewProject = this.projectList[this.projectIndex]
    }
  }
</script>

<style>

</style>
