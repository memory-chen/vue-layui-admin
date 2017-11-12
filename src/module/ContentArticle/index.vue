<template>
  <div id="article">
    <status-btn></status-btn>
    <div class="layui-form news_list">
      <table-data></table-data>
    </div>
  </div>
</template>

<script>
  // 头部按钮
  import StatusBtn from '@/components/StatusBtn'
  // 列表数据
  import TableData from '@/components/TableData'
  export default {
    components: {
      StatusBtn,
      TableData
    }
  }
</script>

<style>

</style>
