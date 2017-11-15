<template>
  <div id="selectBtn">
    <blockquote class="layui-elem-quote news_search">
			<div class="layui-inline selectMsg">
				<select name="msgColl" lay-filter="selectMsg" @change="areadyCol" v-model="allCollect">
					<option value="0" >全部</option>
			    <option value="1" >已收藏</option>
			  </select>
			</div>
			<div class="layui-inline">
				<div class="layui-form-mid layui-word-aux">本页所有数据均为静态，刷新后所有操作无效</div>
			</div>
		</blockquote>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allCollect:0
    };
  },
  computed: {},
  methods: {
    areadyCol() {
      // console.log(this.allCollect);
      this.$emit('changeCart',this.allCollect)/*向父组件派发事件，同时传递参数event.target,后面的参数的个数不限*/
    }
  }
};
</script>

<style scoped>
.selectMsg {
  width: 110px;
  margin-right: 15px;
}
.selectMsg select {
  width: 110px;
  height: 38px;
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
