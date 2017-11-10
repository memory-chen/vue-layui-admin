<template>
  <div id="contentHome layui-body">
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

</style>
