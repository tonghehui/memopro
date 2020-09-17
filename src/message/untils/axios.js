import Vue from 'vue'
import axios from 'axios'

const locale = localStorage.getItem('lan')
const ERROR_DEFAULT = locale === 'en' ? 'Network Error,Please try later' : '网络错误，请稍后重试'
const TOKEN = 'business_token'

const AJAX_VM = new Vue({}) // 创建一个空白vue组件用于调用tip组件的方法
const config = {
    baseURL: '',
    headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'client-version': 'web-1.0'
        // 'x-auth-token': localStorage.getItem('lan') && localStorage.getItem('lan') == 'zh' ? 0 : 1
    },
    timeout: 1000 * 30,
    // "Access-Control-Allow-Credentials": true
    withCredentials: true
}

const _axios = axios.create(config)
const loginStatus = true

_axios.interceptors.request.use(
    function (config) {
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

_axios.interceptors.response.use(
    function (response) {
        return Promise.resolve(response.data)
    },
    function (error) {
        console.log(error)
    }
)

Plugin.install = function (Vue) {
    Vue.axios = _axios
    window.axios = _axios
    Object.defineProperties(Vue.prototype, {
        axios: {
            get () {
                return _axios
            }
        },
        $axios: {
            get () {
                return _axios
            }
        }
    })
}

Vue.use(Plugin)

export default Plugin
