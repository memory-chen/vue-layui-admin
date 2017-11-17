<template>
  <div id="navListbar">
    <div class="layui-tab marg0" lay-filter="bodyTab" id="top_tabs_box">
      <ul class="layui-tab-title top_tab" id="top_tabs">
        <!-- class="layui-this" 显示高亮 -->
        <!-- 根据当前的页面添加class：依据是路由的名字的组件的名字 -->
        <li :class="{'layui-this':'ContentHome' == $route.name}">
          <router-link :to="{name:'ContentHome'}">
            <i class="iconfont icon-text"></i><cite>后台首页</cite>
          </router-link>
        </li>
        <li v-for="(data,index) in currentPage" :key='data.id' :class="{'layui-this':data.name == $route.name}">
          <router-link :to="{name:data.name}">
            <i class="iconfont icon-text"></i><cite>{{data.text}}</cite>
          </router-link>
          <i class="layui-icon layui-unselect layui-tab-close" @click="closePage(data)">ဆ</i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // 整个数据的所有展示
        routerLinkList: [{
          text: '文章列表',
          id: 1,
          name: 'ContentArticle',
          show: false
        }, {
          text: '新消息',
          id: 2,
          name: 'ContentNewsInfo',
          show: false
        }, {
          text: '新增人数',
          id: 3,
          name: 'ContentAddPerson',
          show: false
        }, {
          text: '用户总数',
          id: 4,
          name: 'ContentTotalPerson',
          show: false
        }, {
          text: '待审核文章',
          id: 5,
          name: 'ContentWaitArticle',
          show: false
        }, {
          text: '通过文章',
          id: 6,
          name: 'ContentPassArticle',
          show: false
        }, {
          text: '个人资料',
          id: 7,
          name: 'PersonResource',
          show: false
        }, {
          text: '修改密码',
          id: 8,
          name: 'ChangePassword',
          show: false
        }],
        arr: []
      }
    },
    mounted() {
      
    },
    methods: {
      closePage(data) {
        // data.show = true;
        var len = this.currentPage.length;
        var index = this.isHasElementOne(this.currentPage, data.name)
        if (this.$route.name == data.name && index !== 0) {
          this.$router.push(this.arr[index - 1].name)
          data.show = true;
        } else if (this.$route.name === data.name && index === 0) {
          this.$router.push('ContentHome');
          data.show = true;
        } else {
          this.arr.splice(index, 1)
        }
      },
      // 数组下标
      isHasElementOne(arr, value) {
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].name == value) {
            return i;
          }
        }
        return -1;
      },
      // 保存当前的数据
      // keepData(arr) {
      //   for (let i = 0; i < arr.length; i++) {
      //     const element = arr[i];
      //   }
      // }
    },
    computed: {
      currentPage() {
        for (let i = 0; i < this.routerLinkList.length; i++) {
          const element = this.routerLinkList[i];
          if (this.$route.name == element.name && !element.show) {
            this.arr.push(element)
          }
        }
        this.arr = Array.from(new Set(this.arr))
        for (let i = 0; i < this.arr.length; i++) {
          const element = this.arr[i];
          if (element.show) {
            for (let i = 0; i < this.routerLinkList.length; i++) {
              const data = this.routerLinkList[i];
              if (element.id == data.id) {
                data.show = false
              }
            }
            this.arr.splice(i, 1)
          }
        }
        return Array.from(new Set(this.arr))
      },
      // 保存数据
      // sessionBar() {
      //   return this.currentPage.join('-');
      // }
    },
    // 
    mounted() {
      // 
    }
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
