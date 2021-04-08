import Vue from 'vue'
import Router from 'vue-router'
import info from './views/info'

 
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [ {
    path: '/',
    component: () => import('./views/contacts.vue'),
  },
  {
    path: '/info',
    component: info,
    },

 
]
})