import Vue from 'vue'
import App from './App'
import iview from 'iview'
import  router from './router/index'
import 'iview/dist/styles/iview.css'
import store from './store'

Vue.config.productionTip = false

Vue.use(iview)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
