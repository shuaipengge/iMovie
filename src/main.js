import Vue from 'vue'
import App from './App.vue'
import router from './router'
// vuex数据仓库
import store from './store'
// 导入vant
import Vant from 'vant'
import 'vant/lib/index.css'
// 重置样式
import './assets/styles/reset.css'
// 解决1像素边框问题
import './assets/styles/border.css'
import axios from 'axios'

// 请求的根路径
axios.defaults.baseURL = 'https://autumnfish.cn/'
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
