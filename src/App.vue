<template>
  <div id="app">
    <router-link to="/">首页</router-link>
    <router-link to="/other">其他</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>