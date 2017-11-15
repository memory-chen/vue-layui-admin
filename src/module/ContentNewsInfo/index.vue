<template>
  <div id="contentNewsInfo">
    <!-- contentNewsInfo -->
    <select-btn @changeCart="changeCollect"></select-btn>
    <news-table :tablist="copyData"></news-table>
  </div>
</template>

<script>
  //消息选择
  import SelectBtn from '@/components/SelectBtn'
  // 信息列表
  import NewsTable from '@/components/NewsTable'
  export default {
    data() {
      return {
        newsTable: [{
            img: require("@/assets/logo.png"),
            name: "小楚111",
            content: "11111",
            time: "2017-05-27 12:50",
            reply: false, //1表示已回复 0表示未回复
            collection: false
          },
          {
            img: require("@/assets/logo.png"),
            name: "小楚22222",
            content: "2222222",
            time: "2017-05-27 12:50",
            reply: false, //1表示已回复 0表示未回复
            collection: false
          },
        ],
        changelltyyy: "0",
        copyData: []
      }
    },
    components: {
      SelectBtn,
      NewsTable
    },
    methods: {
      changeCollect(msg) {
        if (msg === '1') {
          this.copyData = [];
          console.log(this.newsTable)
          for (let index = 0; index < this.newsTable.length; index++) {
            const element = this.newsTable[index];
            if (element.collection == true) {
              console.log(element)
              this.copyData.push(element)
            }
          }
        } else {
          this.copyData = this.newsTable;
        }
      }
    },
    mounted() {
      this.copyData = this.newsTable;
    }
  }
</script>

<style>

</style>
