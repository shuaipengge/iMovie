<template>
  <div id="app">
    <!-- 路由占位符 -->
    <router-view></router-view>
    <van-tabbar v-model="active" active-color="#fb7299" inactive-color="#000">
      <van-tabbar-item name="home" to="/home" icon="music-o">发现</van-tabbar-item>
      <van-tabbar-item name="mv" to="/movie" icon="video-o">视频</van-tabbar-item>
      <van-tabbar-item name="like" to="/like" icon="like-o">收藏</van-tabbar-item>
      <van-tabbar-item name="me" to="/login" icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      active: 'home'
    }
  }
}
</script>

<style>
</style>
