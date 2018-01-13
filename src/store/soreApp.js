export default {
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
  },
  actions: {

  }
}
