<template>
  <div class="content-page">
    <div class="layui-row">
      <!-- 右侧导航 -->
      <!-- <div class="layui-side1 layui-bg-black">
        <div class="user-photo">
          <a class="img" title="我的头像"><img src="http://t.cn/RCzsdCq"></a>
          <p>你好！<span class="userName"></span> 欢迎登录</p>
        </div>
        <div class="navBar layui-side-scroll" style="height: 514px;">
          <ul class="layui-nav layui-nav-tree">
            <router-link to="./" class="layui-nav-item"><a href="javascript:;" >
              <i class="layui-icon icon-home">&#xe68e;</i><cite>后台首页</cite></a>
              </router-link>
            <router-link to="" class="layui-nav-item">
              <a href="javascript:;" ><i class="layui-icon icon-text">&#xe60a;</i><cite>文章列表</cite></a>
            </router-link>
          </ul>
        </div>
      </div> -->
    </div>
    <!-- 左侧导航 -->
		<div class="layui-side1 layui-bg-black">
			<div class="user-photo">
				<a class="img" title="我的头像" ><img src="http://t.cn/RCzsdCq"></a>
				<p>你好！<span class="userName">请叫我马哥</span>, 欢迎登录</p>
			</div>
			<div class="navBar layui-side-scroll">
        <ul class="layui-nav layui-nav-tree">
            <router-link to="./" class="layui-nav-item"><a href="javascript:;" >
              <i class="layui-icon icon-home">&#xe68e;</i><cite>后台首页</cite></a>
              </router-link>
            <router-link to="" class="layui-nav-item">
              <a href="javascript:;" ><i class="layui-icon icon-text">&#xe60a;</i><cite>文章列表</cite></a>
            </router-link>
          </ul>
      </div>
		</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* .layui-side {
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
} */
*左侧用户头像*/
.layui-side1 {
    width: 200px
}
.layui-nav{ background-color:inherit !important; }
.layui-layout-admin .layui-side{ left:0; }
.user-photo{width: 200px; height: 120px; padding-top: 15px; padding-bottom: 5px;}
.user-photo a.img{ display: block; width: 76px; height: 76px; margin: 0 auto; margin-bottom: 15px;}
.user-photo a.img img{ display: block; border: none; width: 100%; height: 100%; border-radius: 50%; -webkit-border-radius: 50%; -moz-border-radius: 50%; border: 4px solid #44576b;}
.user-photo p{ display: block; width: 100%; height: 25px; color: #ffffff; text-align: center; font-size: 12px; white-space: nowrap;line-height: 25px; overflow: hidden;}
/*左侧导航重定义*/
.layui-nav-item a cite{ padding:0 5px; }
.layui-side-scroll{ height:auto; }
.layui-nav-tree .layui-nav-child a{ padding-left: 40px; }
.layui-nav-tree .layui-nav-child a:hover{ background-color:#4E5465; }
.layui-nav-tree .layui-nav-child dd.layui-this a:hover{ background-color:#009688; }

</style>
