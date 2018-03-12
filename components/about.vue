<template>
  <div style="background-color: white;">
      <!--<div id="tf-about">-->
        <!--<div class="overlay">-->
          <!--<div class="container">-->
            <!--<div class="row">-->
              <!--<div class="col-xs-6 col-md-offset-8"></div>-->
              <!--<div class="col-xs-6 col-md-offset-8">-->
                <!--<h1 style="font-size:40pt; font-weight:200;">We think</h1>-->
                <!--<br>-->
                <!--<p>우리는 고객의 요구사항을 시스템에 100% 적용하지 않습니다.-->
                  <!--실행가능성이 높고 사용가능성이 유용한 개선안을 논의하여 요구사항보다 더 높은 만족을 드리고자 항상 연구합니다.</p>-->
                <!--<p>당신은 겉모습이 화려한 회사나 , 잘 포장된 솔루션을 선택하여 큰 효과를 얻기를 바라지만 항상 결과에 만족하지 못합니다. 당신이 원하는 것은 실속입니다 !!</p>-->
                <!--<br>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->

    <div>
      <img src="/dhhome/dhhome/about1.png">
    </div>

      <div class="container notosans">
        <h3 style="text-align: center; font-size:45pt;font-weight: 200;">HISTORY</h3>
        <div class="row" style="margin-top:50px;">
          <div class="col-xs-5" style="height:600px;">
            <!--<img src="/dhhome/client.png" class="img-responsive">-->
            <h3 style="font-size:40px; font-weight:400; color:gray;" >“다양한 <span style="color:black;">경험</span>을 바탕으로 <span style="color:black;">고객</span>니즈에 맞는 <span style="color:black;">전략</span>과 <span style="color:black;">서비스</span>로 시스템을 구축합니다”</h3>
          </div>

          <div class="col-xs-1" style="height:600px;"></div>

          <div class="col-xs-6" style=" overflow: auto">

            <div class="row">
              <div class="col-xs-2"><span class="historyDate">2018</span></div>
              <div class="col-xs-10">
                <div>연변농심백산수 3호라인증설 PMS 시스템 구축</div>
                  <div>농심 안양공장 스낵라인PMS</div>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-xs-2"><span class="historyDate">2017</span></div>
              <div class="col-xs-10">
                <div></div>
                <div>실시간 옥외광고 효과 측정 시스템 개발</div>
                <div>(주)부흥금속열처리 ICT융합 스마트공장 MES구축 </div>
                <div>(주)고려고주파 ICT융합 스마트공장 MES구축  </div>
                <div>드림열처리(주)ICT융합 스마트공장 MES구축 </div>
                <div>(주)삼원열처리 ICT융합 스마트공장 MES구축 </div>
                <div>(주)선진 해외공장 설비종합효율시스템 구축1차 (필피핀 블라칸)</div>
                <div>(주)선진 TMS 구축사업 </div>
                <div>농심엔지니어링 식품안전플랫폼(검사장비 통합 모니터링) 구축사업 </div>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-xs-2"><span class="historyDate">2016</span></div>
              <div class="col-xs-10">
                <div>동아제약 박카스 피로측정지수 프로모션 시스템</div>
                <div>아큐브 서클렌즈 눈동자 특성분석 시스템</div>
                <div>농심엔지니어링 안양공장 PMS 구축사업 </div>
                <div>(주)선진 LDMS 구축사업 </div>
                <div>농심 구미공장 PMS 구축사업 </div>
                <div>농심엔지니어링 데이터게터링 미들웨어 개발</div>
                <div>(주)디엑스스퀘어드 DCMS 구축사업 </div>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-xs-2"><span class="historyDate">2015</span></div>
              <div class="col-xs-10">
                <div>국세청 차세대 전면개편 2단계 시스템 구축 </div>
                <div>연변농심(중국) 백산수 생산공장 FEMS 구축사업 </div>
                <div>연변농심(중국) 백산수 생산공장 PMS 구축사업 </div>
                <div>(주)선진 이천,군산공장 실시간 설비종합효율시스템(OEE) 구축사업 </div>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-xs-2"><span class="historyDate">2014</span></div>
              <div class="col-xs-10">
                <div>율촌화학 안양연구소 BEMS 구축사업 </div>
                <div>농심엔지니어링 FEMS 구축사업 </div>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-xs-2"><span class="historyDate">2013</span></div>
              <div class="col-xs-10">
                <div>북경 삼성전자(중국법인) MCS 고도화사업 </div>
                <div>일본 사가현 LMS 구축사업 </div>
                <div>농심엔지니어링 율촌화학 PMS 구축사업 </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    <div style="height:80px;"></div>

    <!--<div><img src="/dhhome/client.png"></div>-->

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
