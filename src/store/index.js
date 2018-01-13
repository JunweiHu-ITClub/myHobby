import soreApp from './soreApp'

export default {
  mutations: {
    /**
     * 统一更新state
     * @param {object} data {moduName:{key:val}}
     */
    update(state,data) {
      if(data['sort']){
        var modu=data['modu'];
        var type=data['key'];
        Object.keys(data['val']).forEach(k=>{
          state[modu][type][k]=data['val'][k]
        })
      }else{
        var modu = Object.keys(data)[0]
        Object.keys(data[modu]).forEach(k => {
          state[modu][k] = data[modu][k]
        })
      }
    }
  },
  modules: {
    soreApp
  },
  strict: process.env.NODE_ENV !== 'production'
}
