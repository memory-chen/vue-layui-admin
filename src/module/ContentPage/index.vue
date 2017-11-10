<template>
  <div class="content-page">
    <div class="layui-row">
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
.layui-side {
  top: 60px;
  width: 200px;
  overflow-x: hidden;
}
.user-photo {
  width: 200px;
  height: 120px;
  padding-top: 15px;
  padding-bottom: 5px;
}
.user-photo a.img {
  display: block;
  width: 76px;
  height: 76px;
  margin: 0 auto;
  margin-bottom: 15px;
}
.user-photo a.img img {
  display: block;
  border: none;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border: 4px solid #44576b;
}
.user-photo p {
  text-align: center;
}
.layui-icon {
  font-size: 20px;
  padding: 0 10px;
  vertical-align: middle;
}
/* *左侧用户头像*/ */
.user-photo a.img{ display: block; width: 76px; height: 76px; margin: 0 auto; margin-bottom: 15px;}
.user-photo a.img img{ display: block; border: none; width: 100%; height: 100%; border-radius: 50%; -webkit-border-radius: 50%; -moz-border-radius: 50%; border: 4px solid #44576b;}
.user-photo p{ display: block; width: 100%; height: 25px; color: #ffffff; text-align: center; font-size: 12px; white-space: nowrap;line-height: 25px; overflow: hidden;}
/*左侧导航重定义*/
.layui-side-scroll{ height:auto; }

</style>
