import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import Element from 'element-ui'
import ElementLocale from 'element-ui/lib/locale'
import messages from './message/lang/index'
import 'element-ui/lib/theme-chalk/index.css'
import { getUrlParams } from './message/untils/tool'
import './message/untils/thhmock'
import './message/untils/axios'
Vue.use(VueI18n)
Vue.use(Element)
ElementLocale.i18n((key, value) => i18n.t(key, value))
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'en',
  messages
})
if (module.hot) {
  module.hot.accept(['./message/lang/en', './message/lang/zh'], function () {
    i18n.setLocaleMessage('en', require('./message/lang/en').default)
    i18n.setLocaleMessage('zh', require('./message/lang/zh').default)
  })
}
ElementLocale.i18n((key, value) => i18n.t(key, value))
const lan = navigator.language || navigator.browserLanguage || 'en'
const locationSearch = window.location.search
const urlResult = getUrlParams(locationSearch)
//

if ('lang' in urlResult) {
  i18n.locale = urlResult.lang === 'zh' ? 'zh' : 'en'
} else if (localStorage.getItem('lan')) {
  i18n.locale = localStorage.getItem('lan')
} else {
  if (lan === 'zh' || lan === 'zh-CN' || lan === 'zh-TW') {
    i18n.locale = 'zh'
  } else {
    i18n.locale = 'en'
  }
}
localStorage.setItem('lan', i18n.locale)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
