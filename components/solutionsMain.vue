<template>
  <div>
    <div class="container">

      <div class="section-title">
        <h3 style="text-align: center; font-size:30pt;font-weight: 300;">SOLUTIONS</h3>
        <hr>
      </div>

      <div class="row">

        <div class="col-md-4">
          <div style="width:100%; height:50px; background-color:#c0392b;">
            <h1 style="text-align: center; color:white;"> <i class="fa fa-bar-chart"></i> OEE</h1>
          </div>
          <div><img src="/pack/pack_oee.png" class="img-responsive" style="margin:auto; margin-top:20px;"></div>
          <div class="media">
            <div class="media-body">
              <p>설비종합효율 향상 목표를 설정하고 이를 달성하기 위해 관리체제를 일정한 절차 및 기법에 따라 체계적이고 지속적으로 추진하는 전사적 공장 종합효율 관리 시스템</p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div style="width:100%; height:50px; background-color:#27ae60;">
            <h1 style="text-align: center; color:white;"> <i class="fa fa-gears"></i>  PMS</h1>
          </div>
          <div><img src="/pack/pack_pms.png" class="img-responsive" style="margin:auto; margin-top:20px;"></div>
          <div class="media">
            <div class="media-body">
              <p>통상적으로 경영 의사 결정과 생산 정보에 관한 계획, 창출, 제어가 직결되는 공장의 종합 정보 시스템</p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div style="width:100%; height:50px; background-color:#2980b9;">
            <h1 style="text-align: center; color:white;"> <i class="fa fa-truck"></i> TMS</h1>
          </div>
          <div><img src="/pack/pack_tms.png" class="img-responsive" style="margin:auto; margin-top:20px;"></div>
          <div class="media">
            <div class="media-body">
              <p>컴퓨터 온라인을 통하여 학생들의 성적과 진도는 물론 출석과 결석 등 학사전반에 걸친 사항들을 관리해 주는 시스템</p>
            </div>
          </div>
        </div>

      </div>


    </div>
    <!-- <modal-solutions solutionKey="PMS"></modal-solutions> -->
  </div>
</template>

<script>
  import modal_solutions from '~/components/modal_solutions.vue'

  export default {
    components: {
      'modal-solutions': modal_solutions
    }
    ,mounted () {
      // this.$modal.show('hello-world');
    }
  }
</script>

<style>

</style>
