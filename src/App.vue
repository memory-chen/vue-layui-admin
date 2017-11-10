<template>
  <div id="app">
    
    <header-bar></header-bar>
    <div>
      <content-page></content-page>
      <router-view></router-view>
    
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
