import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import actions from './actions'
import mutations from  './mutations'


Vue.use(Vuex)
const state = {
  bookInfo: [{
    id: 1, bookName: 'Vue权威指南',
    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495629542756&di=15db0933a1f1c41dd4dec1a0a2bdb0d1&imgtype=0&src=http%3A%2F%2Fwww.5jjc.net%2Ftu5jJDAxJDIyLzEwMjA1MzYzOTAvVEIyczdablhWTHpRZUJqU1pKaVhYWGVzRlhhXyEhMTAyMDUzNjM5MCQ5.jpg',
    price: 10
  }, {
    id: 2, bookName: 'Vue实践揭秘',
    imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2842506561,1290810338&fm=11&gp=0.jpg',
    price: 12
  },
    {
      id: 3, bookName: 'Vue深入浅出',
      imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495629494117&di=5a934908d8cfb3bdb57bed9880ff0d13&imgtype=0&src=http%3A%2F%2Fjiuye-res.jikexueyuan.com%2Fzhiye%2Fshowcase%2Fattach-6ae2b991-803f-4b63-bda9-89434d70d665.jpg',
      price: 33
    },
    {
      id: 4, bookName: 'Vue快速入门',
      imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495629542757&di=ab9c4c7abf40ec26f8b5c13d4cf000f2&imgtype=0&src=http%3A%2F%2Fimgx.wadongxi.net%2Fitem%2Fi1%2FTB13iqDPXXXXXc5aXXXXXXXXXXX_%2521%25212-item_pic.png_400x400Q90.jpg',
      price: 33
    }],
  added: [],
}


export  default  new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
