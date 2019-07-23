import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'
import Vuex from 'vuex'
import router from './router'
Vue.use(Vuex);

Vue.config.productionTip = false
const store = new Vuex.Store({
  //待添加
})
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router,
})