import Vue from 'vue'
import Router from 'vue-router'
import ContentHome from '@/module/ContentHome'
import ContentArticle from '@/module/ContentArticle'
import ContentNewsInfo from '@/module/ContentNewsInfo'
import ContentAddPerson from '@/module/ContentAddPerson'
import ContentTotalPerson from '@/module/ContentTotalPerson'
import ContentWaitArticle from '@/module/ContentWaitArticle'
import ContentPassArticle from '@/module/ContentPassArticle'
// import ContentTotalArticle from '@/module/ContentTotalArticle'
import PersonResource from '@/components/PersonResource'
import ChangePassword from '@/Components/ChangePassword'
import Login from '@/module/Login'
import Regist from '@/module/Regist'
Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    {
      path: '/',
      name: 'ContentHome',
      component: ContentHome
    },
    //登录
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    //注册
    {
      path: '/Regist',
      name: 'Regist',
      component: Regist
    },
    // 文章列表
    {
      path: '/ContentArticle',
      name: 'ContentArticle',
      component: ContentArticle
    },
    // 新消息
    {
      path: '/ContentNewsInfo',
      name: 'ContentNewsInfo',
      component: ContentNewsInfo
    },
    // 个人资料
    {
      path: '/PersonResource',
      name: 'PersonResource',
      component: PersonResource
    },
    // 修改密码
    {
      path: '/ContentAddPerson',
      name: 'ChangePassword',
      component: ChangePassword
    },
    //全部人数
    {
      path: '/ContentTotalPerson',
      name: 'ContentTotalPerson',
      component: ContentTotalPerson
    },
    //待审核文章
    {
      path: '/ContentWaitArticle',
      name: 'ContentWaitArticle',
      component: ContentWaitArticle
    },
    //通过文章
    {
      path: '/ContentPassArticle',
      name: 'ContentPassArticle',
      component: ContentPassArticle
    },
    //全部文章
    {
      path: '/ContentTotalArticle',
      name: 'ContentArticle',
      component: ContentArticle
    },

  ]
})
