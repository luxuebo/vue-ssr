<template>
  <div class="">
    <div class="title">other</div>
    <button @click="clickHandler">点击事件</button>
    <div>vuex-index:{{ this.$store.state.index }}</div>
    <div>vuex-items:{{ this.$store.state.items }}</div>
  </div>
</template>
<script>
export default {
  name: "other",
  data() {
    return {};
  },
  asyncData ({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('fetchItem')
  },
  methods: {
    clickHandler() {
      alert("dianji");
    },
  },
};
</script>
<style scoped>
.title {
  background: red;
}
</style>