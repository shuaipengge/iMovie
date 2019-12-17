<template>
  <div>
    <van-nav-bar left-text="DiliDili">
      <div name="search" slot="right">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          show-action
          shape="round"
          @search="onSearch"
        >
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
      </div>
    </van-nav-bar>
    <div>
      <van-swipe class="wrapper" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item of banners" :key="item.bannerId">
          <img class="wraper-img" :src="item.pic" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      // 轮播图
      banners: []
    }
  },
  async mounted() {
    const { data: res } = await this.$http.get('/banner?type=2')
    console.log(res)
    if (res.code !== 200) return this.$toast('轮播图获取失败')
    this.banners = res.banners
    // console.log(this.banners[0].bannerId)
    // console.log(this.banners[0].pic)
  },
  methods: {
    onSearch() {
      console.log('搜索' + this.value)
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar__text {
  font-size: 0.4rem;
  font-weight: 700;
  color: #fb7299;
}
.van-search {
  padding: 6px 0px;
}
.wrapper {
  overflow: hidden;
  background: red;
  margin: 0.1rem 0.2rem 0.2rem 0.2rem;
  border-radius: 0.2rem;
  .wraper-img {
    width: 100%;
  }
}
</style>
