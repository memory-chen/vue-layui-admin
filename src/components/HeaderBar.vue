<template>
  <div class="headerbar">
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
            <li class="layui-nav-item" pc>
              <a @click="showMenu">
                <img src="http://t.cn/RCzsdCq" class="layui-circle" width="35" height="35">
                <cite>admin</cite>
              </a>
              <dl class="layui-nav-child" v-show="showPersonMenu">
                <dd>
                  <a href="javascript:;" data-url="page/user/userInfo.html">
                    <i class="iconfont icon-zhanghu" data-icon="icon-zhanghu"></i>
                    <cite>个人资料</cite>
                  </a>
                </dd>
                <dd>
                  <a href="javascript:;" data-url="page/user/changePwd.html">
                    <i class="iconfont icon-shezhi1" data-icon="icon-shezhi1"></i>
                    <cite>修改密码</cite>
                  </a>
                </dd>
                <dd>
                  <a href="page/login/login.html" class="signOut">
                    <i class="iconfont icon-loginout"></i>
                    <cite>退出</cite>
                  </a>
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
      showPersonMenu:false
    };
  },
  components: {},
  methods:{
    // 控制个人菜单显隐的方法
    showMenu() {
      this.showPersonMenu = !this.showPersonMenu;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*公共样式*/
.layui-elem-quote.title{ padding:10px 15px; margin-bottom:0; }
.layui-tab-more{ position: relative; z-index: 99; background:#fff; }
.layui-layer-tab .layui-layer-title span.layui-layer-tabnow{ height:42px !important; }
.layui-layer-tab .layui-layer-title span{ min-width:45px !important; }
.marg0{ margin:0; }
/*模拟加载层图标样式*/
.layui-layer-dialog .layui-layer-content .layui-layer-ico16{ background-size:100% 100% !important; }

/*样式改变的过渡*/
.showMenu .layui-body,.showMenu .layui-footer,.showMenu.layui-layout-admin .layui-side,.logo,.top_menu .layui-nav-item[pc],.component,.top_menu .layui-nav-item[mobile],.layui-nav,.layui-layout-admin .layui-main,.site-mobile .layui-side,.layui-layout-admin .layui-side,.site-mobile .site-tree-mobile,.layui-body,.layui-layout-admin .layui-footer,.layui-layout-admin .layui-side,.panel,.panel .panel_icon i{ transition: all 0.3s ease-in-out;-webkit-transition: all 0.3s ease-in-out;-o-transition: all 0.3s ease-in-out;-moz-transition: all 0.3s ease-in-out;-ms-transition: all 0.3s ease-in-out; }


.showMenu.layui-layout-admin .layui-side{ left:-200px; }
.showMenu .layui-body,.showMenu .layui-footer{ left:0; }
.layui-layout-admin .layui-main{ margin:0; }
.logo{ color: #fff; float: left; line-height:60px; font-size:20px; padding:0 25px; text-align: center; width:150px;}
.hideMenu{ float:left; width:20px; height:20px; margin:15px 15px 0 0; font-size:17px; text-align:center; padding:5px 5px; color:#fff; background-color:#1AA094; }
.hideMenu:hover{ color:#fff; }
.weather{ color:#fff; float:left; margin:15px 0 0 50px;}
.component{ float: left; width:200px; height:30px; margin-top: 15px; position: relative;}
.component .layui-input{ height:30px; line-height: 30px; font-size:12px; border:none; transition: all 0.3s; }
.component .layui-input:focus{ background:#fff; color:#000; }
.component .layui-form-select dl{ top:33px; background:#fff; }
.component .layui-form-select .layui-edge,.top_menu .layui-nav-item[mobile]{ display:none; }
.component .layui-icon{ position: absolute; right:8px; top:8px; color:#000; }

/*顶部右侧导航*/
.layui-nav .layui-nav-item>a{ color:#fff; }
.top_menu{ position:absolute; right:0; background:none }
.top_menu.layui-nav .layui-this:after{ width:0px; }
.top_menu.layui-nav .layui-this,.closeBox.layui-nav .layui-this{ background-color:transparent; }
.top_menu.layui-nav .layui-this a,.closeBox.layui-nav .layui-this a{ color:#c2c2c2; }
.top_menu.layui-nav dd.layui-this a,.closeBox.layui-nav dd.layui-this a{ color:#333; }
.top_menu.layui-nav .layui-nav-child a:hover,.closeBox.layui-nav .layui-nav-child a:hover{ color:#fff; background-color:#5FB878; }
.top_menu .iconfont{ font-size: 14px !important; }
.top_menu .layui-nav-bar{ top:60px !important; background-color:rgba(0,0,0,0.7) }
.layui-nav-child{display: block}
/*左侧用户头像*/
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

/*右侧body*/
#top_tabs_box{ padding-right:138px; height:40px; border-bottom:1px solid #e2e2e2; }
#top_tabs{ position: absolute; border-bottom:none;}
</style>
