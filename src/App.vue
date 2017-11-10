<template>
  <div id="app">
    
    <header-bar></header-bar>
    <div class="layui-col-md12">
      <content-page class="layui-col-md3"></content-page>
      <router-view class="layui-col-md9"></router-view>
    
    </div>
     
    <!-- <regist></regist> -->
  </div>
</template>

<script>
import ContentPage from '@/module/ContentPage'
import HeaderBar from '@/components/HeaderBar'
// import Login from '@/module/Login/'
import Regist from '@/module/Regist/'
export default {
  name: 'app',
  components:{
    ContentPage,
    HeaderBar
    // Login,
    // Regist
  }
}
</script>

<style scoped>

</style>
