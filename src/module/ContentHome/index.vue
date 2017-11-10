<template>
  <div id="contentHome">
    <goto-page-btn></goto-page-btn>
  </div>
</template>

<script>
import GotoPageBtn from '@/components/GotoPageBtn.vue'
export default {
  components:{
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
