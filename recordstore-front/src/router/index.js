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
    },
    {
      path: '/artists',
      name: 'Artists',
      component: () => import('../components/artists/Artists.vue')
    },
    {
      path: '/records',
      name: 'Record',
      component: () => import('../components/records/Records.vue')
    }
  ]
})
