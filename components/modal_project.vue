<template>
  <div>
    <modal name="modal-project"
           width="80%"
           height="95%"
    >

      <div class="container">
        <h1>{{ viewProject.name }}</h1>
        <h2>{{ viewProject.period }}</h2>


        <div class="row">
          <template v-for="(i,index) in viewProject.lastImgNum">
            <div class="col-md-4" :key="index">
              <img  :src="viewProject.path+(i)+'.png'" class="img-responsive" style="max-height:300px;">
              <h4>{{i.name}}</h4>
            </div>
          </template>
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
