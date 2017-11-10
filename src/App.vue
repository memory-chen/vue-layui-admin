<template>
  <div id="app">
     <Home></Home>
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
