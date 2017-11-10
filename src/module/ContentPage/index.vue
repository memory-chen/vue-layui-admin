<template>
  <div class="content-page">
    <div class="layui-row">
      <!-- 左侧导航 -->
      <side-bar></side-bar>
      <content-show></content-show>
    </div>
    
  </div>
</template>

<script>
import SideBar  from '@/module/SideBar'
import ContentShow  from '@/module/ContentShow'
export default {
  components:{
    SideBar,
    ContentShow
  }
};
</script>

<style scoped>

</style>
