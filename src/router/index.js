/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import blankpage from '@/layout/blank.vue'
import goodsList from '@/page/goodsList.vue'
import detail from '@/page/detail.vue'
import Index from '@/page/index.vue'
import changeCity from '@/page/changeCity.vue'
import Login from '@/page/login.vue'
import Register from '@/page/register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect:'/index',
      children:[{
      	path: '/index',
      	name: 'index',
      	component:Index
      },{
      	path: 's/:name',
      	name: 'goods',
      	component: goodsList
      },{
      	path: '/changeCity',
      	name: 'changeCity',
      	component: changeCity
      },{
        path: 'd/:name',
        name: 'detail',
        component: detail
      }]
    },
    {
      path: '/blank',
      name: 'blankpage',
      component: blankpage,
      children: [{
        path: '/login',
        name: 'login',
        component: Login
      },{
        path: '/register',
        name: 'register',
        component: Register
      }]
    }
  ]
})
