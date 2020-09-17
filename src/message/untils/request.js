import Vue from 'vue'

export default {
    loginInfo (params) {
        return Vue.axios.post('/login', JSON.stringify(params))
    }
}
