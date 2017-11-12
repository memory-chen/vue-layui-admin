<template>
  <div id="contentHome" class="childrenBody">
    <goto-page-btn></goto-page-btn>
    <div class="layui-row layui-col-space10">
      <div class="layui-col-md6">
        <system-list></system-list>
      </div>
      <div class="layui-col-md6">
        <news-list></news-list>
      </div>
    </div>
  </div>
</template>

<script>
  import GotoPageBtn from "@/components/GotoPageBtn.vue";
  // 添加系统的表单
  import SystemList from "@/components/SystemList"
  // 添加最新消息的列表
  import NewsList from '@/components/NewsList'
  export default {
    components: {
      GotoPageBtn,
      SystemList,
      NewsList
    }
  };
</script>

<style scoped>
  .layui-body {}
</style>
