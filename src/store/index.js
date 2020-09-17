import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  userName: '',
  password: '',
  name: ''
}
const mutations = {
  changeName (state, params) {
    state.name = params
  }

}
const actions = {
  changeStateName (context, params) {
    context.commit('changeName', params)
  }
}
const getters = {

}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
