import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home.vue'
import Discover from '../pages/discover/Discover.vue'
import Order from '../pages/order/Order.vue'
import Me from '../pages/me/Me.vue'
Vue.use(Router)
export default new Router({
  routes: [{
    path: '/home',
    component: Home
  }, {
    path: '/discover',
    component: Discover
  }, {
    path: '/order',
    component: Order
  }, {
    path: '/me',
      component: Me
  }, {
    path: '/',
    redirect: '/home'
  }]
})