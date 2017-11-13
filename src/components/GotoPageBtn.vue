<template>
  <div id="gotoPage" class="childrenBody">
    <div class="panel_box row">
      <div class="panel col">
        <router-link to="/ContentNewsInfo">
          <div class="panel_icon">
            <i class="layui-icon" data-icon="&#xe63a;">&#xe63a;</i>
          </div>
          <div class="panel_word newMessage">
            <span>4</span>
            <cite>新消息</cite>
          </div>
        </router-link>
      </div>
      <div class="panel col">
        <router-link to="/ContentAddPerson">
          <div class="panel_icon" style="background-color:#FF5722;">
            <i class="iconfont icon-dongtaifensishu" data-icon="icon-dongtaifensishu"></i>
          </div>
          <div class="panel_word userAll">
            <span>4</span>
            <cite>新增人数</cite>
          </div>
        </router-link>
      </div>
      <div class="panel col">
        <router-link to="/ContentTotalPerson">
          <div class="panel_icon" style="background-color:#009688;">
            <i class="layui-icon" data-icon="&#xe613;">&#xe613;</i>
          </div>
          <div class="panel_word userAll">
            <span>4</span>
            <cite>用户总数</cite>
          </div>
        </router-link>
      </div>
      <div class="panel col">
        <router-link to="/ContentPassArticle">
          <div class="panel_icon" style="background-color:#009688;">
            <i class="iconfont icon-wenben" data-icon="icon-wenben"></i>
          </div>
          <div class="panel_word imgAll">
            <span>4</span>
            <cite>通过文章</cite>
          </div>
        </router-link>
      </div>
      <div class="panel col">
        <router-link to="/ContentWaitArticle">
          <div class="panel_icon" style="background-color:#F7B824;">
            <i class="iconfont icon-wenben" data-icon="icon-wenben"></i>
          </div>
          <div class="panel_word waitNews">
            <span>4</span>
            <cite>待审核文章</cite>
          </div>
        </router-link>
      </div>
      <div class="panel col max_panel">
        <router-link to="/ContentArticle">
          <div class="panel_icon" style="background-color:#2F4056;">
            <i class="iconfont icon-text" data-icon="icon-text"></i>
          </div>
          <div class="panel_word allNews">
            <span>4</span>
            <em>文章总数</em>
            <cite>文章列表</cite>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gotoData: [
        //多按钮抽离出的数据及图片
        {}
      ]
    };
  }
};
</script>

<style scoped>
.childrenBody {
  margin: 10px 10px 0;
}
/* 给一个固定的高 */
.panel {
  height: 100px;
}
@media screen and (max-width: 1440px) {
  .panel {
    width: 33.3333%;
  }
}
</style>
