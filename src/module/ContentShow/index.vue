<template>
  <div class="contentShow">
    <nav-list-bar></nav-list-bar>
    <content-data></content-data>
  </div>
</template>

<script>
import NavListBar from '@/module/NavListBar'
import ContentData from '@/module/Content'
export default {
  components:{
    NavListBar,
    ContentData
  }
}
</script>

<style scoped>
.contentShow {
  top: 60px;
  bottom: 44px;
}
</style>
