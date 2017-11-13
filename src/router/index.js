import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/module/Home/'
import Login from '@/module/Login/'
import Regist from '@/module/Regist/'
import Home_children from './Home_children'//引入子路由的配置文件

Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    {
      path: '/',
      redirect: '/Home/'//首页默认路径为Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home, 
      children: Home_children //子路由的配置文件
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
  ]
})
