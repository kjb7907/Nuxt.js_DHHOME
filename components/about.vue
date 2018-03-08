<template>
  <div>
      <div id="tf-about">
        <div class="overlay">
          <div class="container">
            <div class="row">
              <div class="col-xs-6 col-md-offset-8"></div>
              <div class="col-xs-6 col-md-offset-8">
                <h1 style="font-size:40pt; font-weight:200;">We think</h1>
                <br>
                <p>우리는 고객의 요구사항을 시스템에 100% 적용하지 않습니다.
                  실행가능성이 높고 사용가능성이 유용한 개선안을 논의하여 요구사항보다 더 높은 만족을 드리고자 항상 연구합니다.</p>
                <p>당신은 겉모습이 화려한 회사나 , 잘 포장된 솔루션을 선택하여 큰 효과를 얻기를 바라지만 항상 결과에 만족하지 못합니다. 당신이 원하는 것은 실속입니다 !!</p>
                <br>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row" style="margin-top:50px;">
          <h1 style="font-size:40pt; font-weight:200;">History</h1>
          <div class="historyList"><span class="historyDate">2018. 01</span> 연변농심(중국) 백산수 생산공장 PMS(Production Management System) 시스템 업그레이드</div>
          <div class="historyList"><span class="historyDate">2017. 11</span> (주)선진 통합모니터링 시스템 구축사업 수행</div>
          <div class="historyList"><span class="historyDate">2017. 06</span> (주)선진 해외공장 설비종합효율시스템 구축1차 (필피핀 블라칸)</div>
          <div class="historyList"><span class="historyDate">2017. 04</span> (주)선진 TMS(Transfer Management System) 구축사업 수행</div>
          <div class="historyList"><span class="historyDate">2017. 02</span> 농심엔지니어링 식품안전플랫폼(검사장비 통합 모니터링) 구축사업 수행</div>
          <div class="historyList"><span class="historyDate">2016. 11</span> 농심엔지니어링 안양공장 PMS(Production Management System) 구축사업 수행</div>
          <div class="historyList"><span class="historyDate">2016. 10</span> (주)선진 LDMS(Location Delivery Management System) 구축사업 수행</div>
          <div class="historyList"><span class="historyDate">2016. 07</span> 농심 구미공장 PMS(Production Management System) 구축사업 수행</div>
          <div class="historyList"><span class="historyDate">2016. 02</span> (주)디엑스스퀘어드 DCMS(Design Collaborative Management System) 구축사업 수행</div>
          <div class="historyList"><span class="historyDate">2015. 08</span> 연변농심(중국) 백산수 생산공장 FEMS(Factory Energy Management System) 구축사업 수행</div>
          <div class="historyList"><span class="historyDate">2015. 05</span> 연변농심(중국) 백산수 생산공장 PMS(Production Management System) 구축사업 수행</div>
          <div class="historyList"><span class="historyDate">2015. 03</span> (주)선진 이천,군산공장 실시간 설비종합효율시스템(OEE) 구축사업 수행</div>
          <div class="historyList"><span class="historyDate">2014. 06</span> 율촌화학 안양연구소 BEMS(Building Energy Management System) 구축사업 수행</div>
          <div class="historyList"><span class="historyDate">2014. 02</span> 농심엔지니어링 FEMS(Factory Energy Management System) 구축사업 수행</div>
          <div class="historyList"><span class="historyDate">2013. 11</span> 북경 삼성전자(중국법인) MCS 고도화사업 수행</div>
          <div class="historyList"><span class="historyDate">2013. 04</span> 일본 사가현 LMS(Learning Management System) 구축사업 수행</div>
          <div class="historyList"><span class="historyDate">2013. 01</span> 농심엔지니어링 율촌화학 PMS(Product Management System) 구축사업 수행</div>
        </div>
      </div>

    <!-- history -->
    <template v-if="dm === 'history'">
      <div>

      </div>
    </template>



  </div>
</template>

<script>

  export default {
    components: {
    },
    data() {
      return {
        dm: 'think'
      }
    },
    methods: {
      changeDm (menu) {
        this.dm = menu;
      },
    },
    mounted () {

    }
  }
</script>

<style>
</style>
