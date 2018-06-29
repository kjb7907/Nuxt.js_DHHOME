var path="/portfolio_project/"

export default {
  solutionList: [
    {
      name: 'TAG collector',
      subName:'DX-Collector(디엑스컬렉터)  스마트 공장을 위한 빅데이터 수집 솔루션',
      path: path+'sunjin_oee_bulacan/',
      detail:'공장 지능화의 기초가 되는 현장 데이터 수집 모듈로써 자동화 설비에서 발생하는 센서 데이터를 체계적으로 수집합니다.',
      detailList:[
        '현장 설비의 센서 데이터를 PLC를 통해 실시간 수집, 다양한 계량기,계측기의 정보를 다이렉트로 수집',
        'X-Ray,비전,금속검출,중량측정등의 다양한 검사장비 정보 수집, ',
        '기존 시스템의 데이터베이스,로그 정보등을 연계하여 수집',
        '자유로운 연산식을 통한 가상태그 데이터 생성, 태그 특성별로 데이터 분류/집계하여 체계적으로 보관',
        '태그 관리도를 경향검사 해석하여 알람, 경고 생성',
        '다양한 실시간 그래프를 통한 태그 모니터링 (현재값,설정값,상한값,하한값)'
      ],
      packImg: 'pack_collector.png',
      detailImg: 'tag.png',
      showYn:false,
    },
    {
      name: 'D-MES',
      subName:'DX-MES (디엑스MES)  스마트공장으로 가는 여정의 더 나은 경험',
      path: path+'sunjin_oee_bulacan/',
      detail:'설비 A가 어젯밤에 5분간 정지된 이유는 무엇일까?” 생산현장의 정보와 OEE를 한번에 볼 수 있는 생산 종합효율 관리 시스템',
      detailList:[
        'DX MES는 무엇이 다른가?',
        '설비,태그 특성별 분류, 시계열 데이터 마트 구축',
        '완전 자동화의 기초자료인 최적운전상태의 설정값 분석',
        '숙련작업자의 설비 운전정보 지식화 체계',
        '다양한 PV,SV간의 상관관계 분석',
        '리얼사이클타임을 이용한 실시간 생산리드타임 예측',
        '태그알람외에 다양한 관리알람 제공(경광등,문자,메일,알람앱)',
        '설비별 효율(OEE)과 공장,라인 전체 효율지표 제공'

      ],
      packImg: 'pack_mes.png',
      detailImg: 'd-mes.png',
      showYn:false,
    },
    {
      name: '',
      subName:'DX-Haccp(디엑스해썹)  안전한 식품생산을 위한 점검 자동화 솔루션',
      path: path+'sunjin_oee_bulacan/',
      detail:'HACCP 기록, 관리, 보관을 전산으로 자동화 HACCP 모니터링 및 관리, 자동화 시스템',
      detailList:[
        'DX Haccp이 왜 필요한가?',
        '안전한 식품 제조를 위해서는 HACCP활동이 필수적이다.',
        '작업자가 해야할 일의 정확한 시기와 방법을 알려주고,',
        '현장에서 간단하게 즉시 처리하며, 설비의 센서정보는 자동으로 수집하여 기록하고',
        '처리한 업무내역은 체계적으로 보관하고 리포팅하여',
        '복잡한 업무를 단순하고 쉽게 지원하는 시스템이 반드시 필요하다.',
        '디지털해썹은 Haccp실행단계의 모든 업무수행을 체계적이며 효과적으로 지원한다.'
      ],
      packImg: 'pack_haccp.png',
      detailImg: 'dhaccp.png',
      showYn:false,
    }
  ]
}


