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
// 左边侧边栏的内容组件
import SideBar  from '@/module/SideBar'
// 右边的内容组件
import ContentShow from '@/module/ContentShow'
export default {
  components:{
    SideBar,
    ContentShow
  }
};
</script>

<style scoped>

</style>
