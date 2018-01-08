const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
export default {
  //点击进入下一题
  [ADD_ITEMNUM](state, num) {
    state.itemNum += num;
  },
  //记录答案
  [REMBER_ANSWER](state, id) {
    state.answerResult.push(id);
  },

  /*
    初始化信息，
     */
  [INITIALIZE_DATA](state) {
    state.itemNum = 1;
    state.answerResult = [];
  },
}
