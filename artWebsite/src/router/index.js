import Vue from 'vue'
import Router from 'vue-router'
import BasePage from '@/components/BasePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BasePage',
      component: BasePage
    }
  ]
})
