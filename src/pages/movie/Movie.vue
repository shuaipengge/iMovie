<template>
  <div>
    <div class="item">
      <van-nav-bar left-text="DiliDili">
        <div name="search" slot="right">
          <van-search placeholder="请输入搜索关键词" show-action shape="round">
            <div slot="action">搜索</div>
          </van-search>
        </div>
      </van-nav-bar>
    </div>
    <div class="tab-list">
      <van-tabs animated @click="goto">
        <van-tab v-for="item in title" :name="item.id" :title="item.name" :key="item.id">
          <router-view></router-view>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: [
        { id: '001', name: '最新', url: '' },
        { id: '002', name: '网易出品', url: '' },
        { id: '003', name: '推荐', url: '' },
        { id: '004', name: '排行', url: '/top/mv' },
        { id: '005', name: '全部', url: '' }
      ]
    }
  },
  mounted() {
    this.goto(this.title[0].id)
  },
  methods: {
    goto(name) {
      console.log(name)
      this.$router.push({
        path: '/movie/tabmovie',
        query: {
          id: name
        }
      })
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
</style>
