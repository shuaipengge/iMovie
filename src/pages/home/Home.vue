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
    <div>
      <div class="index-item">
        <div class="box-itme" v-for="item in indexImg" :key="item.id">
          <img class="item-img" :src="item.cover" />
          <!-- <div class="item-icon">
            <span>
              <van-icon name="play-circle-o" />
            </span>
            <p>{{item.playCount}}</p>
            <span>
              <van-icon name="comment-circle-o" />
            </span>
            <p>{{item.duration}}</p>
          </div> -->
          <p>{{item.name}} -{{item.artistName}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      // 轮播图
      banners: [],
      // 首页视频封面图
      indexImg: []
    }
  },
  mounted() {
    this.getBannerImg()
    this.getIndexImg()
  },
  methods: {
    onSearch() {
      console.log('搜索' + this.value)
    },
    async getBannerImg() {
      // 获取轮播图数据
      const { data: res } = await this.$http.get('/banner?type=2')
      console.log(res)
      if (res.code !== 200) return this.$toast('轮播图获取失败')
      this.banners = res.banners
      // console.log(this.banners[0].bannerId)
      // console.log(this.banners[0].pic)
    },
    async getIndexImg() {
      // 获取首页视频
      const { data: res } = await this.$http.get('/mv/all?limit=10')
      console.log(res)
      if (res.code !== 200) return this.$toast('视频封面获取失败')
      this.indexImg = res.data
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
.index-item {
  width: 100%;
  margin: 0.25rem 0.2rem 0.2rem 0.2rem;
}
.box-itme {
  padding: 0.1rem;
  width: 45%;
  float: left;
  //   background: #eee;
  .item-img {
    width: 100%;
    height: 2rem;
    border-radius: 0.1rem;
  }
  p {
    margin: 0.1rem 0;
    font-size: 0.25rem;
    line-height: 0.3rem;
  }
}
</style>
