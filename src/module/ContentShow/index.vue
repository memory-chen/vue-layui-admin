<template>
  <div class="contentShow layui-body">
    <nav-list-bar></nav-list-bar>
    <Content></Content>
  </div>
</template>

<script>
import NavListBar from '@/module/NavListBar/'
import Content from '@/module/Content/'
export default {
  components:{
    NavListBar,
    Content
  }
}
</script>

<style>
.layui-body{
  top:60px;
}
</style>
