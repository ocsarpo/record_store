import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Signin',
      component: () => import('../components/Signin.vue')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../components/Signup.vue')
    }
  ]
})
