import Vue from 'vue'

export default {
  loginInfo (params) {
    return Vue.axios.post('/login', JSON.stringify(params))
  },
  registerInfo (params) {
    return Vue.axios.post('/register', JSON.stringify(params))
  }
}
