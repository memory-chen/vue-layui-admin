<template>
  <div id="navListbar">
    <div class="layui-tab marg0" lay-filter="bodyTab" id="top_tabs_box">
				<ul class="layui-tab-title top_tab" id="top_tabs">
					<li class="layui-this" lay-id=""><i class="iconfont icon-computer"></i> <cite>后台首页</cite></li>
				  <li lay-id="1510282499027" class=""><i class="iconfont icon-text"></i><cite>文章列表</cite><i class="layui-icon layui-unselect layui-tab-close" data-id="1">ဆ</i></li>
        </ul>
			</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.layui-body{overflow:hidden; border-top:5px solid #1AA094;border-left:2px solid #1AA094;}
.layui-tab-content{ height:100%; padding:0; }
.layui-tab-item{ position: absolute; top: 41px; bottom:0; left: 0; right: 0; padding: 0; margin: 0; -webkit-overflow-scrolling:touch; overflow:auto;}
.layui-tab-title .layui-this{ background-color:#1AA094; color:#fff; }
.layui-tab-title .layui-this:after{ border:none; }
.layui-tab-title li cite{ font-style: normal; padding-left:5px; }
.clildFrame.layui-tab-content{ padding-right: 0; }
.clildFrame.layui-tab-content iframe{ width: 100%; height:100%; border:none; min-width: 320px; position:absolute; }

</style>
