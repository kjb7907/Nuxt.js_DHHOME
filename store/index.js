import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    selProNum: 0,
    isShowPro: false,
    selSolNum: 1
  },
  mutations: {
    selProject (state, num) {
      state.selProNum = num;
    },
    showYnPro (state, bool){
      state.isShowPro = bool;
    },
    selSolution (state, num) {
      state.selSolNum = num;
    }
  },
  actions: {
    selProject({commit}, payload){
      commit('selProject', payload.num);
    },
    showYnPro({commit}, payload){
      commit('showYnPro', payload.showYn);
    },
    selSolution({commit}, payload){
      commit('selSolution', payload.num);
    },
  }
})

export default store
