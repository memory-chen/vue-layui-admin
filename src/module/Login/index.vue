<template>
  <!-- * @author barry <email>* date 11/9/2017 * description 登陆组件 -->
  <div>
    <div class="video-player">
      <img src="./images/loginbrg.jpg" alt="">
    </div>
    <div class="login">
      <h1>layuiCMS-管理登录</h1>
      <form class="layui-form">
        <div class="layui-form-item">
          <input class="layui-input" name="username" placeholder="用户名" lay-verify="required" type="text" autocomplete="off">
        </div>
        <div class="layui-form-item">
          <input class="layui-input" name="password" placeholder="密码" lay-verify="required" type="password" autocomplete="off">
        </div>
        <div class="layui-form-item form_code">
          <input class="layui-input" name="code" placeholder="验证码" lay-verify="required" type="text" autocomplete="off">
          <div class="code">
            <img src="./images/code.jpg" width="116" height="36">
          </div>
        </div>
        <router-link to="/">
          <button class="layui-btn login_btn" lay-submit="" lay-filter="login">登录</button>
        </router-link>没有账号？点击
        <router-link to="/Regist">
          <a class="layui-tx-red" href="">注册</a>
        </router-link>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  
};
</script>
<style scoped>
body {
  overflow: hidden;
}

.video-player {
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: block;
  position: absolute;
  z-index: 1;
  top: 0;
}

.video-player img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 90;
  background-color: rgba(0, 0, 0, 0.5);
}

.login {
  height: 260px;
  width: 260px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -150px 0 0 -150px;
  z-index: 99;
}

.login h1 {
  text-align: center;
  color: #fff;
  font-size: 24px;
  margin-bottom: 20px;
}

.form_code {
  position: relative;
}

.form_code .code {
  position: absolute;
  right: 0;
  top: 1px;
  cursor: pointer;
}

.login_btn {
  width: 100%;
}

.layui-tx-red {
  color: #fff;
}
</style>
