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
        <tr v-for="(news,index) in tablist" :key="news.id" >
          <td class="msg_info"> <img :src="news.img" width="50" height="50"><input type="hidden" value="1111">
            <div class="user_info">
              <h2>{{news.name}}</h2>
              <p> {{news.content}} </p>
            </div>
          </td>
          <td class="msg_time">{{news.time}}</td>
          <td class="msg_reply"><span v-show="news.reply">已回复</span></td>
          <td class="msg_opr"> 
            <button v-show="!news.collection" @click="Collection(news)" class="layui-btn layui-btn-mini layui-btn-normal msg_collect">
              <i class="layui-icon"></i> 收藏
            </button> 
            <button v-show="news.collection" @click="Collection(news)" class="layui-btn layui-btn-mini layui-btn-normal msg_collect">
              <i class="iconfont icon-star"></i> 已收藏
            </button> 
            <a class="layui-btn layui-btn-mini reply_msg"><i class="layui-icon"></i> 回复
            </a> 
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["tablist"],
  data() {
    return {};
  },
  mounted() {
   
  },
  methods:{
    // 根据传入的值取相反的值。
    Collection(data) {
      data.collection = !data.collection;
    }
  },
  computed:{
     
    
  }
};
</script>

<style scoped>
.selectMsg {
  width: 110px;
  margin-right: 15px;
}
.selectMsg select {
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
.msg_info > img {
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
  color: #1aa094;
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
