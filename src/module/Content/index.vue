<template>
  <div id="content" class="layui_body">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "content"
    
  };
</script>

<style scoped>
  #content {
    position: absolute;
    top: 48px;
    width: 100%;
  }
</style>