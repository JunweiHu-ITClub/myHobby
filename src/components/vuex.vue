<template>
  <div>
    <div class="wrap">
      <div class="answer_02">
        <div class="voice_img">
          <audio src="../../static/video/music.ogg" autoplay="autoplay" loop="loop" id="audio_id"></audio>
          <img src="../../static/images/m01.png">
        </div>
      </div>
      <div class="answer_03">

      </div>
      <div v-for="(item,index) in questionData" v-show="index === mark">
        <div class="answer_04">
          <ul>
            <li class="answer_list_active"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div class="answer_04_text">
            <p class="answer_text_left">
              本题可获得里程数:&nbsp;<span class="gain_mileage">{{item.marketQuestionReward.rewardValue}}</span>
            </p>
            <p class="answer_text_right">
              已获得里程数:&nbsp;<span class="gained_mileage">{{ totalMileage }}</span>
            </p>
          </div>
        </div>
        <div class="answer_05">
          <div class="answer_question">
            <span class="question_number">Q</span>
            <p class="question_con">{{item.questionDesc}}</p>
          </div>
          <div class="answer_button">
            <button type="button" class="buttom_b" :class="{ buttom_a: index===checkTrue, buttom_c: index===checkError }"
                    v-for="(val,index) in item.marketQuestionResults"
                    @click="btnClick(val,item,index)"
                    :key="val.resultId"
                    :disabled="disabled">{{val.resultDesc}}<i></i></button>
          </div>
        </div>
      </div>
      <div class="answer_06">
        <div class="next_question" @click="increment">
          <p>{{nextText}}</p>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
    <!-- 去登录弹框 -->
    <div class="alert_wrap alert_already" style="display: none;">
      <div class="alert_already_con">
        <span class="paper_clip"></span>
        <span class="colse gift_close"></span>
        <h2>提示</h2>
        <p>快来登录凤凰知音，领取XX里程!</p>
        <p>更有抽奖等着您~</p>
        <div class="alert_login_button">
          <p>去登陆</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.use(VueAxios, axios)

const store = new Vuex.Store({
  state: {
    totalMileage: 0,
    mark: 0,
    answerId: [],
    quesId: []
  },
  mutations: {
    increment (state,data) {
      state.totalMileage = state.totalMileage+data
    },
    showIndex (state) {
      state.mark++
    },
    answerId (state,data) {
      state.answerId.push(data.choosedId)
      state.quesId.push(data.choosedQuesId)
    }
  }
})

export default {
  store,
  name: 'vuexName',
  data () {
    return {
      questionData: [],
      nextText : '下一题',
      choosedIndex: null,
      choosedId:null,
      choosedQuesId: null,
      disabled:false,
      checkTrue: -1,
      checkError: -1,
    }
  },
  created () {
    let vm = this
    vm.listInit()
  },
  computed: {
    totalMileage () {
      return store.state.totalMileage
    },
    mark (){
      return store.state.mark
    }
  },
  methods: {
    increment () {
      this.disabled = false
      if(store.state.mark < 4){
        if(this.choosedIndex!=null){
          this.choosedIndex = null
          store.commit('answerId',{choosedId:this.choosedId,choosedQuesId:this.choosedQuesId})
          store.commit('showIndex')
          this.checkTrue = -1
          this.checkError = -1
        }else{
          alert('请先选择答案')
        }
      }else{
        this.nextText = '速速去抽奖'
      }

    },
    listInit () {
      let vm = this
      vm.axios.get('/api/answer_data')
      // vm.axios.post('http://10.10.99.67:8651/services/getMarketQuestion', {'storeId': null})
        .then(function (res) {
          res.data.status === 1 ? vm.questionData = res.data.body : alert(res.data.message)
        })
        .catch(function (error) {
          console.log('Error! Could not reach the API. ' + error)
        })
    },
    btnClick (val,item,$index) {
      this.disabled = true
      this.choosedIndex = val.resultId
      this.choosedId = val.resultId
      this.choosedQuesId = val.questionId
      if(val.resultDesc===item.result){
        this.checkTrue = $index
        store.commit('increment',item.marketQuestionReward.rewardValue)
      }else{
        this.checkTrue = $index===0 ? $index+1 :$index-1
        this.checkError = $index
      }
    }
  }
}
</script>

<style scoped>
  @import '../style/demo.css';
  @import '../style/reset.css';
  @import '../style/answer.css';
  @import '../style/draw.css';
</style>
