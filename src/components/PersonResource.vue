<template>
  <div id="personResource">
    <form class="layui-form">
      <div class="user_left">
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-block">
            <input type="text" value="请叫我马哥" disabled="" class="layui-input layui-disabled">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">用户组</label>
          <div class="layui-input-block">
            <input type="text" value="超级管理员" disabled="" class="layui-input layui-disabled">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">真实姓名</label>
          <div class="layui-input-block">
            <input type="text" value="" placeholder="请输入真实姓名" lay-verify="required" class="layui-input realName">
          </div>
        </div>
        <div class="layui-form-item" pane="">
          <label class="layui-form-label">性别</label>
          <div class="layui-input-block userSex">
            <input type="radio" name="sex" value="男" title="男" checked="">
            <div class="layui-unselect layui-form-radio layui-form-radioed"><i class="layui-anim layui-icon layui-anim-scaleSpring"></i><span>男</span></div>
            <input type="radio" name="sex" value="女" title="女">
            <div class="layui-unselect layui-form-radio"><i class="layui-anim layui-icon"></i><span>女</span></div>
            <input type="radio" name="sex" value="保密" title="保密">
            <div class="layui-unselect layui-form-radio"><i class="layui-anim layui-icon"></i><span>保密</span></div>
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">手机号码</label>
          <div class="layui-input-block">
            <input type="tel" value="" placeholder="请输入手机号码" lay-verify="required|phone" class="layui-input userPhone">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">出生年月</label>
          <div class="layui-input-block">
            <input type="text" value="" placeholder="请输入出生年月" lay-verify="required|date" onclick="layui.laydate({elem: this,max: laydate.now()})" class="layui-input userBirthday">
          </div>
        </div>
        <div class="layui-form-item userAddress">
          <label class="layui-form-label">家庭住址</label>
          <div class="layui-input-inline">
            <select name="province" lay-filter="province">
              <option value="">请选择省</option>
            </select>
            <div class="layui-unselect layui-form-select">
              <div class="layui-select-title"><input type="text" placeholder="请选择省" value="" readonly="" class="layui-input layui-unselect"><i class="layui-edge"></i></div>
              <dl class="layui-anim layui-anim-upbit"></dl>
            </div>
          </div>
          <div class="layui-input-inline">
            <select name="city" lay-filter="city" disabled="">
              <option value="">请选择市</option>
            </select>
            <div class="layui-unselect layui-form-select layui-select-disabled">
              <div class="layui-select-title"><input type="text" placeholder="请选择市" value="" readonly="" class="layui-input layui-unselect layui-disabled"><i class="layui-edge"></i></div>
              <dl class="layui-anim layui-anim-upbit"></dl>
            </div>
          </div>
          <div class="layui-input-inline">
            <select name="area" lay-filter="area" disabled="">
              <option value="">请选择县/区</option>
            </select>
            <div class="layui-unselect layui-form-select layui-select-disabled">
              <div class="layui-select-title"><input type="text" placeholder="请选择县/区" value="" readonly="" class="layui-input layui-unselect layui-disabled"><i class="layui-edge"></i></div>
              <dl class="layui-anim layui-anim-upbit"></dl>
            </div>
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">兴趣爱好</label>
          <div class="layui-input-block userHobby">
            <input type="checkbox" name="like[javascript]" title="Javascript">
            <div class="layui-unselect layui-form-checkbox" lay-skin=""><span>Javascript</span><i class="layui-icon"></i></div>
            <input type="checkbox" name="like[html]" title="HTML(5)">
            <div class="layui-unselect layui-form-checkbox" lay-skin=""><span>HTML(5)</span><i class="layui-icon"></i></div>
            <input type="checkbox" name="like[css]" title="CSS(3)">
            <div class="layui-unselect layui-form-checkbox" lay-skin=""><span>CSS(3)</span><i class="layui-icon"></i></div>
            <input type="checkbox" name="like[php]" title="PHP">
            <div class="layui-unselect layui-form-checkbox" lay-skin=""><span>PHP</span><i class="layui-icon"></i></div>
            <input type="checkbox" name="like[.net]" title=".net">
            <div class="layui-unselect layui-form-checkbox" lay-skin=""><span>.net</span><i class="layui-icon"></i></div>
            <input type="checkbox" name="like[ASP]" title="ASP">
            <div class="layui-unselect layui-form-checkbox" lay-skin=""><span>ASP</span><i class="layui-icon"></i></div>
            <input type="checkbox" name="like[C#]" title="C#">
            <div class="layui-unselect layui-form-checkbox" lay-skin=""><span>C#</span><i class="layui-icon"></i></div>
            <input type="checkbox" name="like[Angular]" title="Angular">
            <div class="layui-unselect layui-form-checkbox" lay-skin=""><span>Angular</span><i class="layui-icon"></i></div>
            <input type="checkbox" name="like[VUE]" title="VUE">
            <div class="layui-unselect layui-form-checkbox" lay-skin=""><span>VUE</span><i class="layui-icon"></i></div>
            <input type="checkbox" name="like[XML]" title="XML">
            <div class="layui-unselect layui-form-checkbox" lay-skin=""><span>XML</span><i class="layui-icon"></i></div>
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">邮箱</label>
          <div class="layui-input-block">
            <input type="text" value="" placeholder="请输入邮箱" lay-verify="required|email" class="layui-input userEmail">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">自我评价</label>
          <div class="layui-input-block">
            <textarea placeholder="请输入内容" class="layui-textarea myself"></textarea>
          </div>
        </div>
      </div>
      <div class="user_right">
        <div class="layui-box layui-upload-button">
          <form target="layui-upload-iframe" method="post" key="set-mine" enctype="multipart/form-data" action="../../json/userface.json"><input type="file" name="userFace" class="layui-upload-file" lay-title="掐指一算，我要换一个头像了">
          </form>
          <span class="layui-upload-icon"><i class="layui-icon"></i>掐指一算，我要换一个头像了</span></div>
        <img src="../assets/logo.png" class="layui-circle" id="userFace">
      </div>
      <div class="layui-form-item" style="margin-left: 5%;">
        <div class="layui-input-block">
          <button class="layui-btn" lay-submit="" lay-filter="changeUser">立即提交</button>
          <button type="reset" class="layui-btn layui-btn-primary">重置</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  /*!
   * @author martin-chen <email>
   * date 11/13/2017
   * 个人资料组件
   */
  export default {}
</script>

<style scoped>
  form input.layui-input[disabled] {
    background: #f2f2f2;
    color: #595963!important;
  }
  .user_left {
    width: 45%;
    float: left;
    margin: 20px 0 0 5%;
  }
  .user_right {
    width: 25%;
    float: left;
    margin: 20px 0 0 5%;
    text-align: center;
  }
  .user_right p {
    margin: 10px 0 25px;
    font-size: 12px;
    text-align: center;
    color: #FF5722;
  }
  .user_right img#userFace {
    width: 200px;
    height: 200px;
  }
  .layui-table,
  .layui-table th {
    text-align: center;
  }
  .userAddress.layui-form-item .layui-input-inline {
    width: 23%;
  }
  .userAddress.layui-form-item .layui-input-inline:last-child {
    margin-right: 0;
  }
  /*用户列表*/
  #page {
    text-align: right;
  }
  /*修改密码*/
  .changePwd {
    width: 30%;
    margin: 3% 0 0 5%;
  }
  /*适配*/
  @media screen and (max-width:1050px) {
    /*用户信息*/
    .user_left,
    .user_right,
    .changePwd {
      width: 100%;
      float: none;
      margin-left: 0;
    }
    .user_right {
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width:450px) {
    .userAddress.layui-form-item .layui-input-inline {
      width: auto;
    }
  }
</style>