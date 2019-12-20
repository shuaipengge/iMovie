<template>
  <div class="item">
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.query.id)
  }
}
</script>

<style lang="less" scoped>
.item {
  height: 10rem;
  background: #eee;
}
</style>
