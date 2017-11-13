<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
import Home from '@/module/Home'
import Login from '@/module/Login/'
import Regist from '@/module/Regist/'
export default {
  name: 'app',
  components:{
    Login,
    Regist,
    Home
  }
}
</script>

<style scoped>

</style>
