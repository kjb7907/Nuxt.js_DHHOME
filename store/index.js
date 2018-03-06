import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    selProNum: 0,
    isShowPro: false
  },
  mutations: {
    selProject (state, num) {
        state.selProNum = num;
    },
    showYnPro (state, bool){
      state.isShowPro = bool;
    }
  },
  actions: {
    selProject({commit}, payload){
      commit('selProject', payload.num);
    },
    showYnPro({commit}, payload){
      commit('showYnPro', payload.showYn);
    }
  }
})

export default store
