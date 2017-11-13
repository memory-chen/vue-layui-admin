<template>
  <div id="sideBar">
    <!-- 右侧导航 -->
    <div class="layui-side layui-bg-black">
      <div class="user-photo">
        <a class="img" title="我的头像"><img src="../../assets/logo.png"></a>
        <p>你好！<span class="userName"></span> 欢迎登录</p>
      </div>
      <div class="navBar layui-side-scroll" style="height: 514px;">
        <ul class="layui-nav layui-nav-tree">
          <li class="layui-nav-item">
            <router-link to="/"><i class="iconfont icon-computer" data-icon="icon-computer"></i>
            <cite>后台首页</cite>
            </router-link>
            </li>
          <li class="layui-nav-item">
            <router-link to="/ContentTotalArticle"><i class="iconfont icon-text" data-icon="icon-text"></i><cite>文章列表</cite>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
.layui-nav-item {
  font-size: 20px;
  color: #fff;
  text-align: center;
}
.layui-nav .layui-nav-item > a {
  font-size: 20px;
  color: #fff;
}
.iconfont {
  padding: 0 10px;
  font-size: 20px;
}
</style>
