<template>
  <div class="headerbar">
    <div class="layui-layout layui-layout-admin">
      <div class="layui-header">
        <div class="layui-logo">后台管理</div>
        <!-- 头部区域（可配合layui已有的水平导航） -->
        <ul class="layui-nav layui-layout-left">
          <li class="layui-nav-item">
            <a href="javascript:;" class="iconfont hideMenu icon-menu1">
              <i class="layui-icon" style="font-size: 30px; color: #01ccb9;">&#xe60f;</i>
            </a>
          </li>
          <li class="layui-nav-item">
            <div class="layui-form component">
              <div class="layui-unselect layui-form-select">
                <div class="layui-select-title">
                  <input type="text" placeholder="直接选择或搜索选择" value="" class="layui-input layui-unselect">
                  <i class="layui-edge"></i>
                </div>
              </div>
              <i class="layui-icon">&#xe615;</i>
            </div>
          </li>
        </ul>
        <ul class="layui-nav layui-layout-right">
          <li class="layui-nav-item">
            <a href="">控制台<span class="layui-badge">9</span></a>
          </li>
          <li class="layui-nav-item">
            <a href=""><img src="http://t.cn/RCzsdCq" class="layui-nav-img">我</a>
            <dl class="layui-nav-child">
              <dd><a href="javascript:;">修改信息</a></dd>
              <dd><a href="javascript:;">安全管理</a></dd>
              <dd><a href="javascript:;">退了</a></dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "测试2"
    };
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.component .layui-form-select .layui-edge,
.top_menu .layui-nav-item[mobile] {
  display: none;
}
.component .layui-icon {
  position: absolute;
  right: 8px;
  top: -10px;
  color: #000;
}
</style>
