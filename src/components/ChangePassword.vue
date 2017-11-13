<template>
  <div id="ChangePassword">
    <form class="layui-form changePwd">
      <div style="margin:0 0 15px 110px;color:#f00;">旧密码请输入“123456”，新密码必须两次输入一致才能提交</div>
      <div class="layui-form-item">
        <label class="layui-form-label">用户名</label>
        <div class="layui-input-block">
          <input type="text" value="请叫我马哥" disabled="" class="layui-input layui-disabled">
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">旧密码</label>
        <div class="layui-input-block">
          <input type="password" value="" placeholder="请输入旧密码" lay-verify="required|oldPwd" class="layui-input pwd">
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">新密码</label>
        <div class="layui-input-block">
          <input type="password" value="" placeholder="请输入新密码" lay-verify="required|newPwd" id="oldPwd" class="layui-input pwd">
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">确认密码</label>
        <div class="layui-input-block">
          <input type="password" value="" placeholder="请确认密码" lay-verify="required|confirmPwd" class="layui-input pwd">
        </div>
      </div>
      <div class="layui-form-item">
        <div class="layui-input-block">
          <button class="layui-btn" lay-submit="" lay-filter="changePwd">立即修改</button>
          <button type="reset" class="layui-btn layui-btn-primary">重置</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
form input.layui-input[disabled]{ background:#f2f2f2; color:#595963!important; }
.user_left{ width:45%; float: left; margin:20px 0 0 5%; }
.user_right{ width:25%; float: left; margin:20px 0 0 5%; text-align: center; }
.user_right p{ margin:10px 0 25px; font-size: 12px; text-align: center; color: #FF5722;}
.user_right img#userFace{ width:200px; height:200px; }
.layui-table,.layui-table th{ text-align:center; }
.userAddress.layui-form-item .layui-input-inline{ width:23%; }
.userAddress.layui-form-item .layui-input-inline:last-child{ margin-right:0; }
/*用户列表*/
#page{ text-align:right; }

/*修改密码*/
.changePwd{ width:30%; margin:3% 0 0 5%; }


/*适配*/
@media screen and (max-width:1050px){
	/*用户信息*/
	.user_left,.user_right,.changePwd{ width:100%; float:none; margin-left: 0; }
	.user_right{ margin-bottom: 20px; }
}
@media screen and (max-width:450px){
	.userAddress.layui-form-item .layui-input-inline{ width:auto; }
}
</style>