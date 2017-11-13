<template>
  <div id="contentHome">
    <header-bar></header-bar>
    <div>
      <content-page></content-page>    
    </div>
  </div>
</template>

<script>
import ContentPage from '@/module/ContentPage'
import HeaderBar from '@/components/HeaderBar'
export default {
components:{
  ContentPage,
    HeaderBar,
}
}
</script>

<style scoped>
.layui-body{
  top: 60px;
  bottom: 44px;
}
</style>
