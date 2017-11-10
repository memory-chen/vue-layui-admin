<template>
  <div id="content">
    <content-home></content-home>
  </div>
</template>

<script>
import ContentHome  from '@/module/ContentHome'
export default {
  components:{
    ContentHome,
  }
}
</script>

<style scoped>
#content {
  top: 60px;
  bottom: 44px;
}
</style>
