import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export function createStore () {
  return new Vuex.Store({
    state: {
      items: '',
      index:''
    },
    actions: {
      fetchItem ({ commit }) {
        return new Promise((resolve,reject)=>{
            setTimeout(function(){
                let data = {item:'haha'}
                commit('setItem',data)
                resolve(data)
            },2000)

        })
      },
      fetchItemIndex ({ commit }) {
        return new Promise((resolve,reject)=>{
            setTimeout(function(){
                let data = {index:'hehe'}
                commit('setIndex',data)
                resolve(data)
            },1000)

        })
      }
    },
    mutations: {
      setItem (state, { item }) {
        state.items = item
      },
      setIndex (state, { index }) {
        state.index = index
      },
    }
  })
}