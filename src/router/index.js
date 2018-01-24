import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home.vue'
import FoodDetail from '../pages/home/FoodDetail.vue'
import Numeral from '../pages/numeral/Numeral.vue'
import Meal from '../pages/meal/Meal.vue'
import More from '../pages/more/More.vue'
import Me from '../pages/me/Me.vue'
Vue.use(Router)
export default new Router({
  routes: [{
    path: '/home',
    component: Home,
    children: [{
      path: 'foodDetail/:id',
      component: FoodDetail
    }]
  }, {
    path: '/numeral',
    component: Numeral
  }, {
    path: '/meal',
    component: Meal
  }, {
    path: '/more',
    component: More
  }, {
    path: '/me',
    component: Me
  }, {
    path: '/',
    redirect: '/home'
  }]
})