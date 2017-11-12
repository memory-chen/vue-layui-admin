import Vue from 'vue'
import Router from 'vue-router'
import ContentHome from '@/module/ContentHome'
import ContentArticle from '@/module/ContentArticle'
import ContentNewsInfo from '@/module/ContentNewsInfo'
import ContentAddPerson from '@/module/ContentAddPerson'
Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    // {
    //   path: '/',
    //   name: 'ContentHome',
    //   component: ContentHome
    // },
    // 文章列表
    // {
    //   path: '/',
    //   name: 'ContentArticle',
    //   component: ContentArticle
    // },
    // 消息对话列表
    // {
    //   path: '/',
    //   name: 'ContentNewsInfo',
    //   component: ContentNewsInfo
    // },
    // 新增人数
    {
      path: '/',
      name: 'ContentAddPerson',
      component: ContentAddPerson
    },
  ]
})
