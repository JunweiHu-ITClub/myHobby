// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import FastClick from 'fastclick'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import App from './App'
import router from './router'

import storeObject from './store/index'

window.axios=axios
window.VueAxios=VueAxios
Vue.use(VueAxios, axios)

Vue.config.productionTip = false
/* eslint-disable no-new */
var store = new Vuex.Store(storeObject)
FastClick.attach(document.body)
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
