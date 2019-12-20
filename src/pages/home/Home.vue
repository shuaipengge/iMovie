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
          <img @click="click_img(item.id)" class="item-img" :src="item.coverImgUrl" />
          <div class="item-icon">
            <div>
              <span>
                <van-icon name="play-circle-o" />
                {{item.playCount}}
              </span>
              <span>
                <van-icon name="comment-circle-o" />
                {{item.subscribedCount}}
              </span>
            </div>
          </div>
          <div class="item-title left">{{item.name}}</div>
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
      // 获取首页歌单
      const { data: res } = await this.$http.get('/top/playlist/highquality')
      console.log(res)
      if (res.code !== 200) return this.$toast('视频封面获取失败')
      this.indexImg = res.playlists
    },
    click_img(id) {
      this.$toast(id)
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
  position: relative;
  //   background: #eee;
  .item-img {
    width: 100%;
    height: 3.3rem;
    border-radius: 0.1rem;
  }
}
.item-icon {
  height: 0;
  top: 35rem;
  position: absolute;
  top: 3.1rem;
  padding: 0rem 0.1rem;
  line-height: 0.25rem;
  font-size: 0.24rem;
  color: #fff;
}
.item-title {
  margin: 0.1rem 0 0 0;
  font-size: 0.25rem;
  line-height: 0.3rem;
  height: 0.5rem;
}
.right {
  position: absolute;
  right: -1.9rem;
}
</style>
