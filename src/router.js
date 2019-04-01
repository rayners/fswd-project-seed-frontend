import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Users from './views/Users.vue'
import User from './views/User.vue'
import Register from './views/Register'
import Login from './views/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/users/:username',
      name: 'user',
      component: User,
      props: true
    },
    {
      path: '/register',
      name: 'register',
      component: Register      
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
