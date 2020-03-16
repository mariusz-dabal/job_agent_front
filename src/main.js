import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'
import {HTTP} from '../http-common'
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false
Vue.prototype.$http = HTTP;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
