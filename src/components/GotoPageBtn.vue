<template>
  <div id="gotoPage">
    <div class="panel_box row">
		<div class="panel col">
			<a href="javascript:;">
				<div class="panel_icon">
					<i class="layui-icon"></i>
				</div>
				<div class="panel_word newMessage">
					<span>5</span>
					<cite>新消息</cite>
				</div>
			</a>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      gotoData:{//多按钮抽离出的数据及图片

      }
    }
  }
}
</script>

<style scoped>
.row,.col,.panel_word,.panel_icon{ box-sizing:border-box; -webkit-box-sizing:border-box; -moz-box-sizing:border-box; -o-box-sizing:border-box;}
.row{ margin-left:-10px; overflow:hidden;}
.col{ padding-left:10px;}
.panel{float: left; text-align: center; width:16.666%; min-width:210px; margin-bottom: 10px;}
.panel_box a{display:block; background-color:#f2f2f2; border-radius:5px; overflow:hidden; }
.panel_icon{ width:40%; display: inline-block; padding:22px 0; background-color:#54ade8;float:left;}
.panel_icon i{ font-size:3em; color:#fff;}
.panel a:hover .panel_icon i{ display:inline-block; transform:rotate(360deg); -webkit-transform:rotate(360deg); -moz-transform:rotate(360deg); -o-transform:rotate(360deg); -ms-transform:rotate(360deg);}
.panel_word{ width:60%; display: inline-block; float:right; margin-top: 22px; }
.panel_word span{ font-size:25px; display:block; height:30px; line-height:30px; }
.allNews em{ font-style:normal; font-size:16px;display: block; }
.panel_box a .allNews cite{ display:none; }
.panel_box a cite{ font-size:16px; display: block; font-style:normal; }
.sysNotice{ width:50%; float: left; }
.sysNotice .layui-elem-quote{ line-height:26px; position: relative;}
.sysNotice .layui-table{ margin-top:0; border-left:5px solid #e2e2e2; }
.sysNotice .title .icon-new1{ position: absolute; top:8px; margin-left: 10px; color:#f00; font-size:25px; }
.explain .layui-btn{ margin:5px 5px 5px 0; }
</style>
