import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    selProNum: 0
  },
  mutations: {
    selProject (state, num) {
        state.selProNum = num;
    }
  },
  actions: {
    selProject({commit}, payload){
        commit('selProject', payload.num);
    }
  }
})

export default store