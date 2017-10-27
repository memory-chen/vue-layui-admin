<template>
  <div class="hello">
    <ul class="layui-nav">
      <li class="layui-nav-item text-right"><a href="">最新活动</a></li>
      <li class="layui-nav-item layui-this"><a href="">产品</a></li>
      <li class="layui-nav-item"><a href="">大数据</a></li>
      <li class="layui-nav-item">
        <a href="">控制台
          <span class="layui-badge">9</span>
        </a>
      </li>
      <li class="layui-nav-item">
        <a href="">个人中心
          <span class="layui-badge-dot"></span>
        </a>
      </li>
      <li class="layui-nav-item">
        <a href="">
          <img src="http://t.cn/RCzsdCq" class="layui-nav-img">我</a>
        <dl class="layui-nav-child">
          <dd>
            <a href="javascript:;">修改信息</a>
          </dd>
          <dd>
            <a href="javascript:;">安全管理</a>
          </dd>
          <dd>
            <a href="javascript:;">退了</a>
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "测试2"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  text-align: right;
}
</style>
