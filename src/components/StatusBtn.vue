<template>
  <div id="statusBtn">
    <blockquote class="layui-elem-quote news_search">
      <div class="layui-inline">
        <div class="layui-input-inline">
          <input type="text" value="" placeholder="请输入关键字" class="layui-input search_input">
        </div>
        <a class="layui-btn search_btn">查询</a>
      </div>
      <div class="layui-inline">
        <a class="layui-btn layui-btn-normal newsAdd_btn">添加文章</a>
      </div>
      <div class="layui-inline">
        <a class="layui-btn recommend" style="background-color:#5FB878">推荐文章</a>
      </div>
      <div class="layui-inline">
        <a class="layui-btn audit_btn">审核文章</a>
      </div>
      <div class="layui-inline">
        <a class="layui-btn layui-btn-danger batchDel">批量删除</a>
      </div>
      <div class="layui-inline">
        <div class="layui-form-mid layui-word-aux">本页面刷新后除新添加的文章外所有操作无效，关闭页面所有数据重置</div>
      </div>
    </blockquote>
  </div>
</template>

<script>
  export default {
  }
</script>

<style>

</style>
