<template>
  <div class="index">
    <div>index</div>
    <div>vuex-index:{{ this.$store.state.index }}</div>
    <div>vuex-items:{{ this.$store.state.items }}</div>
  </div>
</template>
<script>
export default {
  name: "index",
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("fetchItemIndex");
  },
};
</script>
<style scoped>
.index {
  color: seagreen;
}
</style>