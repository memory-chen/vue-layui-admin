<template>
  <div id="selectBtn">
    <blockquote class="layui-elem-quote news_search">
      <div class="layui-inline selectMsg">
        <select name="msgColl" lay-filter="selectMsg">
  					<option value="0">全部</option>
  			        <option value="1">已收藏</option>
  			    </select>
        <div class="layui-unselect layui-form-select">
          <div class="layui-select-title"><input type="text" placeholder="全部" value="全部" readonly="" class="layui-input layui-unselect"><i class="layui-edge"></i></div>
          <dl class="layui-anim layui-anim-upbit">
            <dd lay-value="0" class="layui-this">全部</dd>
            <dd lay-value="1" class="">已收藏</dd>
          </dl>
        </div>
      </div>
      <div class="layui-inline">
        <div class="layui-form-mid layui-word-aux">本页所有数据均为静态，刷新后所有操作无效</div>
      </div>
    </blockquote>
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
