import Vue from 'vue'
import Router from 'vue-router'
import answer from '@/components/answer'
import vuexName from '@/components/vuex'
import test from '@/components/test'
import storeApp from '@/components/storeApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: test
    },
    {
      path: '/answer',
      name: 'answer',
      component: answer
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: vuexName
    },
    {
      path: '/storeApp',
      name: 'storeApp',
      component: storeApp
    }
  ]
})
