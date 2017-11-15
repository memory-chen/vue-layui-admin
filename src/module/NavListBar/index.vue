<template>
  <div id="navListbar">
    <div class="layui-tab marg0" lay-filter="bodyTab" id="top_tabs_box">
      <ul class="layui-tab-title top_tab" id="top_tabs">
        <!-- class="layui-this" 显示高亮 -->
        <li :class="{'layui-this':'ContentHome'== $route.name}">
          <router-link :to="{name:'Home'}">
            <i class="iconfont icon-computer"></i> <cite>后台首页</cite>
          </router-link>
        </li>
        <li v-for="(data,index) in currentPage" :key='data.id' :class="{'layui-this':data.name == $route.name}">
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
          text: '通过文章',
          id: 6,
          name: 'ContentPassArticle'
        }, {
          text: '个人资料',
          id: 7,
          name: 'PersonResource'
        }, {
          text: '修改密码',
          id: 8,
          name: 'ChangePassword'
        }],
        copyRouterList: []
      }
    },
    mounted() {
      this.copyRouterList = this.routerLinkList;
    },
    methods: {
      closePage(id) {
        for (let index = 0; index < this.copyRouterList.length; index++) {
          const element = this.copyRouterList[index];
          if (id == this.copyRouterList[0].id) {
            this.$router.push({
              name: 'ContentHome'
            })
            this.copyRouterList.splice(0, 1);
          } else {
            if (element.id == id) {
              this.$router.push({
                name: this.copyRouterList[index - 1]['name']
              })
              this.copyRouterList.splice(index, 1);
            }
          }
        }
      }
    },
    computed: {
      currentPage() {
        if (this.$route.name == '/' || this.$route.name == 'ContentHome') {
          return this.copyRouterList;
        } else {
          for (let index = 0; index < this.routerLinkList.length; index++) {
            const element = this.routerLinkList[index];
            if (this.$route.name == element.name) {
              this.copyRouterList.push(element);
            }
          }
          return this.copyRouterList = Array.from(new Set(this.copyRouterList));
        }
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
  .layui-tab-title li {
    padding: 0 20px;
  }
  .layui-tab-title li .layui-tab-close {
    position: absolute;
    top: 11px;
    right: 0px;
  }
</style>
