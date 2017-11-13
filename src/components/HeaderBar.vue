<template>
  <div class="headerbar layui-header">
    <div class="layui-layout layui-layout-admin">
      <!-- 顶部 -->
      <div class="layui-header header">
        <div class="layui-main">
          <a href="#" class="logo">后台管理</a>
          <!-- 显示/隐藏菜单 -->
          <a href="javascript:;" class="iconfont hideMenu icon-menu1"></a>
          <!-- 顶部右侧菜单 -->
          <ul class="layui-nav top_menu">
            <li class="layui-nav-item showNotice" id="showNotice" pc>
              <a href="javascript:;">
                <i class="iconfont icon-gonggao"></i>
                <cite>系统公告<span class="layui-badge">9</span></cite>
              </a>
            </li>
            <li class="layui-nav-item">
              <a @mousemove="showMenu">
                <img src="../assets/logo.png" class="layui-circle" width="35" height="35">
                <cite>admin</cite>
              </a>
              <dl class="layui-nav-child" v-show="showPersonMenu" @mousemove="showMenu" @mouseleave="hideMenu">
                <dd>
                  <router-link to="/PersonResource">
                    <a href="javascript:;" data-url="page/user/userInfo.html">
                      <i class="iconfont icon-zhanghu" data-icon="icon-zhanghu"></i>
                      <cite>个人资料</cite>
                    </a>
                  </router-link>
                </dd>
                <dd>
                  <router-link to="/ChangePassword">
                    <a href="javascript:;" data-url="page/user/changePwd.html">
                      <i class="iconfont icon-shezhi1" data-icon="icon-shezhi1"></i>
                      <cite>修改密码</cite>
                    </a>
                  </router-link>
                </dd>
                <dd>
                  <router-link to="/Login">
                    <a href="page/login/login.html" class="signOut">
                      <i class="iconfont icon-loginout"></i>
                      <cite>退出</cite>
                    </a>
                  </router-link>
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // 控制显示个人资料的菜单
        showPersonMenu: false,
      };
    },
    components: {},
    methods: {
      // 控制个人菜单显隐的方法
      showMenu() {
        this.showPersonMenu = true;
      },
      hideMenu() {
        this.showPersonMenu = false;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .layui-nav-child {
    display: block;
  }
</style>
