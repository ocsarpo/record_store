// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios'
import { secruedAxiosInstance, plainAxiosInstance } from './backend/axios'
import './main.css'

Vue.config.productionTip = false

Vue.use(VueAxios, {
  secured: secruedAxiosInstance,
  plain: plainAxiosInstance
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  secruedAxiosInstance,
  plainAxiosInstance,
  components: { App },
  template: '<App/>'
})
