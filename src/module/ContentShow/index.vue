<template>
  <div class="contentShow layui-body">
    <nav-list-bar></nav-list-bar>
    <content-data></content-data>
  </div>
</template>

<script>
import NavListBar from '@/module/NavListBar/'
import ContentData from '@/module/Content/'
export default {
  components:{
    NavListBar,
    ContentData
  }
}
</script>

<style>
.layui-body{
  top:60px;
}
</style>
