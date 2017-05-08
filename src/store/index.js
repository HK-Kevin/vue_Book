import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import actions from './actions'
import mutations from  './mutations'


Vue.use(Vuex)
const state ={
  bookInfo:[{id:1,bookName:'Vue权威指南',
    imgUrl:'http://i-3.391k.com/2016/9/21/b2235ffb-4fbd-427e-b49f-3b60f1af4492.png',
    price:12},{id:2,bookName:'Vue实践揭秘',
    imgUrl:'http://img5.imgtn.bdimg.com/it/u=2842506561,1290810338&fm=11&gp=0.jpg',
    price:12}]
}


export  default  new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
