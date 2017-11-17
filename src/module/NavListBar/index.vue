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
      // 关闭按钮的方法
      closePage(data) {
        var len = this.currentPage.length;
        // 获取元素当前在数组的下标。
        var index = this.isHasElementOne(this.currentPage, data.name)
        // 点击按钮有三种情况
        // 1，点击的按钮是当前的组件，并且不等于0，不在第一个位置，则路由跳转到前一个位置。
        if (this.$route.name == data.name && index !== 0) {
          this.$router.push(this.arr[index - 1].name)
          data.show = true;
        } else if (this.$route.name === data.name && index === 0) {//2,点击按钮是当前组价，并且index是为0，则跳转到后台首页。
          this.$router.push('ContentHome');
          data.show = true;
        } else {// 3,不是当前的组件按钮，所以直接删除当前的值。
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
      }
    },
    computed: {
      // 根据点击的路由放到导航的数据。
      currentPage() {
        for (let i = 0; i < this.routerLinkList.length; i++) {
          const element = this.routerLinkList[i];
          // 根据路由的名字，判断在data数据里面是否有这个元素，然后添加到新的数组中。
          if (this.$route.name == element.name && !element.show) {
            this.arr.push(element)
          }
        }
        // 用es6的set去重
        this.arr = Array.from(new Set(this.arr));
        // 
        for (let i = 0; i < this.arr.length; i++) {
          const element = this.arr[i];
          // 根据元素里面show的值，改变this.arr的值。
          if (element.show) {
            // 回归原始的值。吧show改成false
            for (let i = 0; i < this.routerLinkList.length; i++) {
              const data = this.routerLinkList[i];
              if (element.id == data.id) {
                data.show = false
              }
            }
            // 去除选中的值。
            this.arr.splice(i, 1)
          }
        }
        // 放回数据。
        return Array.from(new Set(this.arr))
      }
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
