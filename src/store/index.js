import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  userName: '',
  password: '',
  name: '',
  users: ''
}
const mutations = {
  changeName (state, params) {
    state.name = params
  },
  changeUser (state, params) {
    state.users = params
  }

}
const actions = {
  changeStateName (context, params) {
    context.commit('changeName', params)
  },
  changeStateUser (context, params) {
    context.commit('changeUser', params)
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
