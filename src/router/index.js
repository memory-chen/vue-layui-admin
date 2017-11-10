import Vue from 'vue'
import Router from 'vue-router'
import ContentHome from '@/module/ContentHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ContentHome',
      component: ContentHome
    }
  ]
})
