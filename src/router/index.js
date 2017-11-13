import Vue from 'vue'
import Router from 'vue-router'
import ContentHome from '@/module/ContentHome'
import ContentArticle from '@/module/ContentArticle'
import ContentNewsInfo from '@/module/ContentNewsInfo'
import ContentAddPerson from '@/module/ContentAddPerson'
import ContentTotalPerson from '@/module/ContentTotalPerson'
import ContentWaitArticle from '@/module/ContentWaitArticle'
import ContentPassArticle from '@/module/ContentPassArticle'
import PersonResource from '@/components/PersonResource'
import ChangePassword from '@/Components/ChangePassword'
Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    // {
    //   path: '/',
    //   name: 'ContentHome',
    //   component: ContentHome
    // },
    // 文章列表||文章总数
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
    // {
    //   path: '/',
    //   name: 'ContentAddPerson',
    //   component: ContentAddPerson
    // },
    // 全部人数
    // {
    //   path: '/',
    //   name: 'ContentTotalPerson',
    //   component: ContentTotalPerson
    // },
    // 待审核文章
    // {
    //   path: '/',
    //   name: 'ContentWaitArticle',
    //   component: ContentWaitArticle
    // },
    // 通过文章
    // {
    //   path: '/',
    //   name: 'ContentPassArticle',
    //   component: ContentPassArticle
    // },
    // 个人资料
    // {
    //   path: '/',
    //   name: 'PersonResource',
    //   component: PersonResource
    // },
    // 修改密码
    {
      path: '/',
      name: 'ChangePassword',
      component: ChangePassword
    },
  ]
})
