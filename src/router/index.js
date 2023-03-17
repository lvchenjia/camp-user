import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//导入登录页面组件
import Login from '@/views/login.vue'
import Home from '@/views/home.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Default',
      redirect: '/home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requireAuth: true
      },
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'Index',
          component: () => import('@/views/home/index'),
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/userInfo',
          name: 'UserInfo',
          component: () => import('@/views/userInfo/index'),
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/reserve',
          name: 'Reserve',
          component: () => import('@/views/reserve/index'),
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/userReservation',
          name: 'UserReservation',
          component: () => import('@/views/userReservation/index'),
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/buy',
          name: 'Buy',
          component: () => import('@/views/buy/index'),
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/userSaleRecord',
          name: 'UserSaleRecord',
          component: () => import('@/views/userSaleRecord/index'),
          meta: {
            requireAuth: true
          }
        },

      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/register.vue')
    },
  ]
})




