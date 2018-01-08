import Vue from 'vue'
import Router from 'vue-router'
import answer from '@/components/answer'
import vuexName from '@/components/vuex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'answer',
      component: answer
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
    }
  ]
})
