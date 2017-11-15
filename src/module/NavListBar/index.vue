<template>
  <div id="navListbar">
    <div class="layui-tab marg0" lay-filter="bodyTab" id="top_tabs_box">
      <ul class="layui-tab-title top_tab" id="top_tabs">
        <!-- class="layui-this" 显示高亮 -->
        <router-link :to="{name:'Home'}">
          <li><i class="iconfont icon-computer"></i> <cite>后台首页</cite></li>
        </router-link>
        <li v-for="(data,index) in routerLinkList" :key='data.id'>
          <router-link :to="{name:data.name}">
            <i class="iconfont icon-text"></i><cite>{{data.text}}</cite>
          </router-link>
          <i class="layui-icon layui-unselect layui-tab-close" @click="closePage(data.id)">ဆ</i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        routerLinkList: [{
          text: '文章列表',
          id: 1,
          name: 'ContentArticle'
        }, {
          text: '新消息',
          id: 2,
          name: 'ContentNewsInfo'
        }, {
          text: '新增人数',
          id: 3,
          name: 'ContentAddPerson'
        }, {
          text: '用户总数',
          id: 4,
          name: 'ContentTotalPerson'
        }, {
          text: '待审核文章',
          id: 5,
          name: 'ContentWaitArticle'
        }, {
          text: '个人资料',
          id: 6,
          name: 'PersonResource'
        }, {
          text: '修改密码',
          id: 7,
          name: 'ChangePassword'
        }]
      }
    },
    mounted() {
        console.log(this.$route.name)
    },
    methods: {
      closePage(index) {

      }
    },
  };
</script>

<style scoped>
  #navListbar {
    top: 60px;
    bottom: 44px;
    position: fixed;
    left: 200px;
    width: 100%;
    height: 50px;
  }
  .layui-tab-title li .layui-tab-close {
    position: absolute;
    top: 11px;
    right: -2px;
  }
</style>
