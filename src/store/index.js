import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
// import axios from 'axios'

Vue.use(Vuex)

const state = {
  itemNum: '1',
  nextText: '下一题',
  itemDetail: [],
  answerResult: [],
  questionList: []
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
