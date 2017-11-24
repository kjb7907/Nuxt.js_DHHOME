<template>
<div>
  <div style="background-color:black;">
    <div class="container">
      <div class="row">
        <div class="col">
          <ul class="nav nav-pills">
            <li @click="changeDm('think')" role="presentation" :class="{ active: (dm==='think') }"><a href="#">Think</a></li>
            <li @click="changeDm('history')" role="presentation" :class="{ active: (dm==='history') }"><a href="#">History</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <template v-if="dm === 'think'">
    <div id="tf-about">
      <div class="overlay">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-md-offset-8">
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

    <div id="tf-why-me">
      <div class="overlay">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1 style="font-size:40pt; font-weight:200;">Our Process</h1>
              <br>
              <ul class="list-inline why-me">
                <li>
                  <h4 style="font-size:20pt; font-weight: 300;">Research</h4>
                  <p>통신망과 통신망을 연동해 놓은 망의 집합을 의미하는 인터네트워크(internetwork)의 약어인 internet과 구별하기 위해 Internet 또는 INTERNET과 같이 고유명사로 표기한다. 랜(LAN) 등 소규모 통신망을 상호 접속하는 형태에서 점차 발전하여 현재는 전세계를 망라하는 거대한 통신망의 집합체가 되었다. 우리는 이와같은 인터넷 환경에서 IT를 연구하고 창조하는 작업을 한다.</p>
                </li>
                <li>
                  <h4 style="font-size:20pt; font-weight: 300;">Design</h4>
                  <p>인간의 근본적인 생활을 보다 더 윤택하게 하고, 편리함과 아름다움을 창조하는 것. 미의 과학으로서 생산성을 바탕으로 하는 기술적인 부분과 예술의 조화로 인간생활의 반전에 기여하고 있는 인간의 삶을 보다 아름답고 편리하며 풍요롭게 하는 기술! 디자인은 과학이자 예술이며 생활이다.</p>
                </li>
                <li>
                  <h4 style="font-size:20pt; font-weight: 300;">Create</h4>
                  <p>소프트웨어의 창조적 활동은 즉 광고의 제작 표현행위와 유사하다. 시장조사와 미디어믹스의 과학적 활동에 상대되는 것으로, 상품 서비스에 있어서의 새로운 의미와 가치를 발견하여 아이디어를 일으켜 소비자에게 어떻게 소구할 것인가의 콘셉트를 만들고, 그것을 구체적으로 문장화·시청각화·영상화하는 모든 프로세스를 말한다.</p>
                </li>
                <li>
                  <h4 style="font-size:20pt; font-weight: 300;">Develop</h4>
                  <p>소프트웨어 개발이란 소프트웨어를 개발하는 일련의 과정을 의미하는 좁은 범주에서 부터 해당 소프트웨어를 개발하고 난 이후의 보수, 유지까지 포함하는 포괄적인 범위를 의미하는 경우도 있다. 소프트웨어 개발은 데스크탑 PC용 개발을 비롯한 모바일 기기 어플리케이션 개발, 웹 어플리케이션 개발 등 다양한 분야에서 사용되는 용어로 큰 틀은 비슷하지만 세부적인 구현이나 일정 부분에서 차이를 보인다.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <!-- history -->
  <template v-if="dm === 'history'">
    <div>
      <div class="container">
        <div class="row" style="margin-top:50px;">
          <h1 style="font-size:50pt; font-weight:200;">History</h1>
          <div class="historyList"><span class="historyDate">2017. 11</span> (주)선진 통합모니터링 시스템 구축사업 수행</div>
          <div class="historyList"><span class="historyDate">2017. 06</span> (주)선진 해외공장 설비종합효율시스템 구축1차 (필피핀 블라칸)</div>
          <div class="historyList"><span class="historyDate">2017. 04</span> (주)선진 TMS(Transfer Management System) 구축사업 수행</div>
          <div class="historyList"><span class="historyDate">2017. 02</span> 농심엔지니어링 식품안전플랫폼(검사장비 통합 모니터링) 구축사업 수행</div>
          <div class="historyList"><span class="historyDate">2016. 11</span> 농심엔지니어링 안양공장 PMS(Production Management System) 구축사업 수행</div>
          <div class="historyList"><span class="historyDate">2016. 10</span> (주)선진 LDMS(Location Delivery Management System) 구축사업 수행</div>
          <div class="historyList"><span class="historyDate">2016. 07</span> 농심 구미공장 PMS(Production Management System) 구축사업 수행</div>
          <div class="historyList"><span class="historyDate">2016. 02</span> (주)디엑스스퀘어드 DCMS(Design Collaborative Management System) 구축사업 수행</div>
          <div class="historyList"><span class="historyDate">2015. 08</span> 연변농심(중국) 백산수 생산공장 FEMS(Factory Energy Management System) 구축사업 수행</div>
          <div class="historyList"><span class="historyDate">2015. 05 </span> 연변농심(중국) 백산수 생산공장 PMS(Production Management System) 구축사업 수행</div>
          <div class="historyList"><span class="historyDate">2015. 03</span> (주)선진 이천,군산공장 실시간 설비종합효율시스템(OEE) 구축사업 수행</div>
          <div class="historyList"><span class="historyDate">2014. 06</span> 율촌화학 안양연구소 BEMS(Building Energy Management System) 구축사업 수행</div>
          <div class="historyList"><span class="historyDate">2014. 02</span> 농심엔지니어링 FEMS(Factory Energy Management System) 구축사업 수행</div>
          <div class="historyList"><span class="historyDate">2013. 11</span> 북경 삼성전자(중국법인) MCS 고도화사업 수행</div>
          <div class="historyList"><span class="historyDate">2013. 04</span> 일본 사가현 LMS(Learning Management System) 구축사업 수행</div>
          <div class="historyList"><span class="historyDate">2013. 01</span> 농심엔지니어링 율촌화학 PMS(Product Management System) 구축사업 수행</div>
        </div>
      </div>
    </div>
  </template>



</div>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
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
  p {
   font-size:18px;
  }

  .nav-pills>li.active>a, .nav-pills>li.active>a:focus, .nav-pills>li.active>a:hover {
    color: #5e5e5e;
    background-color: white;
  }

  .historyList {
    margin:20px;
    font-size:14pt;
  }

  .historyDate {
    font-weight: 200;
    font-size:20pt;
    color:gray;
    margin-right:30px;
  }
</style>
