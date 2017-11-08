<template>
  <div id="app">
    <router-view/>
    <content-page></content-page>
  </div>
</template>

<script>
import ContentPage from '@/module/ContentPage'
export default {
  name: 'app',
  components:{
    ContentPage
  }
}
</script>

<style>

</style>
