<template>
  <div id="contentWaitPerson">
    <status-btn></status-btn>
    <div class="layui-form news_list">
      <table-data></table-data>
    </div>
  </div>
</template>

<script>
import StatusBtn from '@/components/StatusBtn'
import TableData from '@/components/TableData'
export default {
  components:{
    StatusBtn,
    TableData
  }
}
</script>

<style>

</style>
