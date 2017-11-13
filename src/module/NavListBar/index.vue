<template>
  <div id="navListbar">
    <div class="layui-tab marg0" lay-filter="bodyTab" id="top_tabs_box">
      <ul class="layui-tab-title top_tab" id="top_tabs">
        <!-- class="layui-this" 显示高亮 -->
        <router-link :to="{name:'Home'}">
          <li lay-id=""><i class="iconfont icon-computer"></i> <cite>后台首页</cite></li>
        </router-link>
        <li lay-id="1510282499027"><i class="iconfont icon-text"></i><cite>文章列表</cite><i class="layui-icon layui-unselect layui-tab-close" data-id="1">ဆ</i></li>
        <li lay-id="1510454691078"><i class="layui-icon"></i><cite>新消息</cite><i class="layui-icon layui-unselect layui-tab-close" data-id="2">ဆ</i></li>
        <li lay-id="1510462508539"><i class="iconfont icon-dongtaifensishu"></i><cite>新增人数</cite><i class="layui-icon layui-unselect layui-tab-close" data-id="3">ဆ</i></li>
        <li lay-id="1510539766249"><i class="layui-icon"></i><cite>用户总数</cite><i class="layui-icon layui-unselect layui-tab-close" data-id="1">ဆ</i></li>
        <li lay-id="1510541146580"><i class="iconfont icon-wenben"></i><cite>待审核文章</cite><i class="layui-icon layui-unselect layui-tab-close" data-id="4">ဆ</i></li>
        <li lay-id="1510541146580"><i class="iconfont icon-wenben"></i><cite>通过文章</cite><i class="layui-icon layui-unselect layui-tab-close" data-id="4">ဆ</i></li>
        <li lay-id="1510542096007"><i class="iconfont icon-zhanghu"></i><cite>个人资料</cite><i class="layui-icon layui-unselect layui-tab-close" data-id="5">ဆ</i></li>
        <li lay-id="1510542136826" class="layui-this"><i class="iconfont icon-shezhi1"></i><cite>修改密码</cite><i class="layui-icon layui-unselect layui-tab-close" data-id="6">ဆ</i></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      name() {
        return this.data
      }
    },
  };
</script>

<style scoped>
  #navListbar {
    top: 60px;
    bottom: 44px;
    position: fixed;
    left: 200px;
    width: 100%;
    height: 50px;
  }
</style>
