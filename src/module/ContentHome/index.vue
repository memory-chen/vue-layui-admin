<template>
  <div id="contentHome " class="layui-body">
    <div class="layui-row layui-col-space20">
      <div class="layui-col-xs12 layui-col-sm4 layui-col-md2">
        <goto-page-btn></goto-page-btn>
      </div>
      <div class="layui-col-xs12 layui-col-sm4 layui-col-md2">
        <goto-page-btn></goto-page-btn>
      </div>
      <div class="layui-col-xs12 layui-col-sm4 layui-col-md2">
        <goto-page-btn></goto-page-btn>
      </div>
      <div class="layui-col-xs12 layui-col-sm4 layui-col-md2">
        <goto-page-btn></goto-page-btn>
      </div>
      <div class="layui-col-xs12 layui-col-sm4 layui-col-md2">
        <goto-page-btn></goto-page-btn>
      </div>
      <div class="layui-col-xs12 layui-col-sm4 layui-col-md2">
        <goto-page-btn></goto-page-btn>
      </div>
    </div>
  </div>
</template>

<script>
import GotoPageBtn from "@/components/GotoPageBtn.vue";
export default {
  components: {
    GotoPageBtn
  }
};
</script>

<style scoped>
.layui-body {
  top: 60px;
  bottom: 44px;
  padding: 0 20px;
  left: 112px;
}
</style>
