<template>
  <div id="contentNewsInfo">
    <!-- contentNewsInfo -->
    <select-btn></select-btn>
    <news-table></news-table>
  </div>
</template>

<script>
//消息选择
import SelectBtn from '@/components/SelectBtn'
// 信息列表
import NewsTable from '@/components/NewsTable'
export default {
  components:{
    SelectBtn,
    NewsTable
  }
}
</script>

<style>

</style>
