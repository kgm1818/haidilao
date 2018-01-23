import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  num:0
}
const mutations = {
  handlerNum(state,params){
    console.log(state, params)
    state.num=params.num
  }
}
const actions = {
  addNum(store,params){
    console.log(store,params)
    store.commit('handlerNum', params)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})