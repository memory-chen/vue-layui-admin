<template>
  <div id="article">
    <status-btn @delInfo='delFn'></status-btn>
    <div class="layui-form news_list">
      <table-data :btnStstus= 'status'></table-data>
    </div>
  </div>
</template>
<script>
  // 头部按钮
  import StatusBtn from '@/components/StatusBtn'
  // 列表数据
  import TableData from '@/components/TableData'
  export default {
    data(){
      return {
        status:{
          del:false
        }
      }
    },
    components: {
      StatusBtn,
      TableData
    },
    methods: {
      delFn(data) {
        this.status.del = data.isDel;
      }
    }
  }
</script>

<style>

</style>
