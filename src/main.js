// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
require('layui-src/dist/css/layui.css')
require('jquery/dist/jquery.min.js')
require('layui-src/dist/layui.js')
require('../static/main.css')
// 引入vuex插件。
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
