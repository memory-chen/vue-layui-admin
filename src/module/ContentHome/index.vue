<template>
  <div id="contentHome " class="layui-body">
    <nav-list-bar></nav-list-bar>
    <goto-page-btn></goto-page-btn>
  </div>
</template>

<script>
import NavListBar from '@/module/NavListBar'
import GotoPageBtn from "@/components/GotoPageBtn.vue"
export default {
components:{
  NavListBar,
  GotoPageBtn
}
}
</script>

<style scoped>
.layui-body{
  top: 60px;
  bottom: 44px;
}
</style>
