import ContentHome from '@/module/ContentHome'
import ContentArticle from '@/module/ContentArticle'
import ContentNewsInfo from '@/module/ContentNewsInfo'
import ContentAddPerson from '@/module/ContentAddPerson'
import ContentTotalPerson from '@/module/ContentTotalPerson'
import ContentTotalArticle from '@/module/ContentTotalArticle'
import ContentPassArticle from '@/module/ContentPassArticle'
import ContentWaitArticle from '@/module/ContentWaitArticle'
const Home_children = [ //嵌套路由
    {
      path: '/Home',  
      name: "Home",
      redirect: '/Home/ContentHome' // Home的默认路径为ContentHome
    },
    {
      path: '/Home/ContentHome',
      name: "ContentHome",
      component: ContentHome
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
      // 新增人数
      {
        path: '/ContentAddPerson',
        name: 'ContentAddPerson',
        component: ContentAddPerson
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
        name: 'ContentTotalArticle',
        component: ContentTotalArticle
      },
  
  ]
export default Home_children