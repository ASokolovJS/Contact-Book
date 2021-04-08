import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import VueLS from 'vue-ls'

Vue.config.productionTip = false

new Vue({
  VueLS,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
