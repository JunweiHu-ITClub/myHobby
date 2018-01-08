<template>
  <div>
    <div class="wrap">
      <div class="answer_02">
        <div class="voice_img">
          <!--<audio src="../../static/video/music.ogg" autoplay="autoplay" loop="loop" id="audio_id"></audio>-->
          <img src="images/m01.png">
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
              已获得里程数:&nbsp;<span class="gained_mileage">{{totalMileage}}</span>
            </p>
          </div>
        </div>
        <div class="answer_05">
          <div class="answer_question">
            <span class="question_number">Q</span>
            <p class="question_con">{{item.questionDesc}}</p>
          </div>
          <div class="answer_button">
            <button type="button" :class="{ buttom_b:checkDefault, buttom_a: checkTrue, buttom_c: checkError }"
                    v-for="(val,index) in item.marketQuestionResults"
                    @click="addMileage(index,val.resultId,val.questionId,item.result,val.resultDesc)"
                    :disabled="disabled"
                    :key="val.resultId">{{val.resultDesc}}<i></i></button>
          </div>
        </div>
      </div>
      <div class="answer_06">
        <div class="next_question" @click="nextQuestion">
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
// import Qs from 'qs' // 表单序列化插件
// import _ from 'lodash'

Vue.use(VueAxios, axios)

export default {
  name: 'answer',
  data () {
    return {
      nextText: '下一题',
      questionData: [],
      singleMileage: 0,
      totalMileage: 0,
      disabled: false,
      mark: 0,
      checkDefault: true,
      checkTrue: false,
      checkError: false,
      answerResult: [],
      questionList: []
    }
  },
  created () {
    let vm = this
    vm.getAnswerList()
  },
  computed: {

  },
  methods: {
    getAnswerList: function () {
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
    addMileage: function (index, resultId, questionId, result, resultDesc) {
      let that = this
      that.disabled = true
      if (result === resultDesc) {
        that.totalMileage = that.totalMileage + that.questionData[this.mark].marketQuestionReward.rewardValue
        that.checkTrue = true
        that.checkDefault = false
      } else {
        that.checkError = true
      }
      that.answerResult.push(resultId)
      that.questionList.push(questionId)
    },
    nextQuestion: function () {
      if (this.mark === 4) {
        this.nextText = '速速去抽奖'
      } else {
        this.mark++
        this.disabled = false
        this.checkTrue = false
        this.checkError = false
        this.checkDefault = true
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
