<template>
  <div id="newsTable">
    <table class="layui-table msg_box" lay-skin="line">
      <colgroup>
        <col width="45%">
        <col width="25%">
        <col width="15%">
        <col>
      </colgroup>
      <tbody class="msgHtml">
        <tr>
          <td class="msg_info"> <img src="../assets/logo.png" width="50" height="50"><input type="hidden" value="1111">
            <div class="user_info">
              <h2>小王</h2>
              <p>马哥你好，请问你这个模版用的是什么框架啊？</p>
            </div>
          </td>
          <td class="msg_time">2017-05-27 12:50</td>
          <td class="msg_reply">已回复</td>
          <td class="msg_opr"> <a class="layui-btn layui-btn-mini layui-btn-normal msg_collect"><i class="layui-icon"></i> 收藏</a> <a class="layui-btn layui-btn-mini reply_msg"><i class="layui-icon"></i> 回复</a> </td>
        </tr>
        <tr>
          <td class="msg_info"> <img src="../assets/logo.png" width="50" height="50"><input type="hidden" value="2222">
            <div class="user_info">
              <h2>小李</h2>
              <p>马哥你好，请问你多大了？</p>
            </div>
          </td>
          <td class="msg_time">2017-05-27 12:50</td>
          <td class="msg_reply"></td>
          <td class="msg_opr"> <a class="layui-btn layui-btn-mini layui-btn-normal msg_collect"><i class="layui-icon"></i> 收藏</a> <a class="layui-btn layui-btn-mini reply_msg"><i class="layui-icon"></i> 回复</a> </td>
        </tr>
        <tr>
          <td class="msg_info"> <img src="../assets/logo.png" width="50" height="50"><input type="hidden" value="3333">
            <div class="user_info">
              <h2>小赵</h2>
              <p>马哥你好，请问你家是哪的？</p>
            </div>
          </td>
          <td class="msg_time">2017-05-27 12:50</td>
          <td class="msg_reply"></td>
          <td class="msg_opr"> <a class="layui-btn layui-btn-mini layui-btn-normal msg_collect"><i class="layui-icon"></i> 收藏</a> <a class="layui-btn layui-btn-mini reply_msg"><i class="layui-icon"></i> 回复</a> </td>
        </tr>
        <tr>
          <td class="msg_info"> <img src="../assets/logo.png" width="50" height="50"><input type="hidden" value="4444">
            <div class="user_info">
              <h2>小高</h2>
              <p>马哥你好，请问你有没有女朋友啊？</p>
            </div>
          </td>
          <td class="msg_time">2017-05-27 12:50</td>
          <td class="msg_reply">已回复</td>
          <td class="msg_opr"> <a class="layui-btn layui-btn-mini layui-btn-normal msg_collect"><i class="layui-icon"></i> 收藏</a> <a class="layui-btn layui-btn-mini reply_msg"><i class="layui-icon"></i> 回复</a> </td>
        </tr>
        <tr>
          <td class="msg_info"> <img src="../assets/logo.png" width="50" height="50"><input type="hidden" value="5555">
            <div class="user_info">
              <h2>小楚</h2>
              <p>马哥你好，请问你一个月工资多少啊？</p>
            </div>
          </td>
          <td class="msg_time">2017-05-27 12:50</td>
          <td class="msg_reply"></td>
          <td class="msg_opr"> <a class="layui-btn layui-btn-mini layui-btn-normal msg_collect"><i class="layui-icon"></i> 收藏</a> <a class="layui-btn layui-btn-mini reply_msg"><i class="layui-icon"></i> 回复</a> </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
.selectMsg {
    width: 110px;
    margin-right: 15px;
  }
  .selectMsg select{
    display: none;
  }
  .msg_info,
  .msg_time,
  .msg_reply,
  .msg_opr {
    min-height: 50px;
    text-align: center;
  }
  .msg_info {
    text-align: left;
    position: relative;
  }
  .msg_info>img {
    position: absolute;
    left: 10px;
    top: 10px;
    cursor: pointer;
  }
  .msg_info .user_info {
    padding-left: 55px;
    line-height: 25px;
  }
  .msg_info .user_info h2 {
    color: #222;
    cursor: pointer;
  }
  .msg_info .user_info h2:hover {
    color: #1AA094;
  }
  .msg_info .user_info p {
    color: #8d8d8d;
  }
  .msg_reply {
    color: #e15f63;
  }
  /*回复*/
  .replay_edit {
    overflow: hidden;
    margin-bottom: 20px;
  }
  .replay_edit a {
    margin-top: 10px;
    width: 100px;
    float: right;
  }
</style>
