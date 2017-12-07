<template>
  <div>
    <div class="container">
      <div class="section-title">
        <h3 style="text-align: center; font-size:30pt;font-weight: 300;">OUR WORKS</h3>
        <hr>
      </div>

      <!-- <div class="space"></div> -->
      <div class="row">
        <template v-for="(i,index) in projectList">
          <div class="col-md-4" :key="index">
            <img @click="detailOpen(index)" :src="i.path+'thumb.png'" class="img-responsive">
            <h4>{{i.name}}</h4>
          </div>
        </template>
      </div>

    </div>

    <modal-project :projectIndex="selectProject"></modal-project>

  </div>
</template>

<script>
import modal_project from '~/components/modal_project'
import project from '~/assets/project.js'

  export default {
    data() {
      return {
        projectList:[],
        selectProject: 0
      }
    },
    components: {
      'modal-project':modal_project
    },
    methods:{
      detailOpen(index) {
        this.selectProject = index;
        this.$modal.show('modal-project');
      }
    },
    mounted: function() {
      this.projectList = project.projectList
    }
  }
</script>

<style>

</style>
