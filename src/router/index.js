import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import Movie from '../pages/movie/Movie.vue'
import TabMovie from '../pages/movie/components/TabMovie.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/home', component: Home },
    {
      path: '/movie',
      component: Movie,
      children:
        [
          {
            path: '/movie/tabmovie',
            component: TabMovie
          }
        ]
    }
  ]
})

// 挂在路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径来
  // next 是一个函数，表示放行
  // next() 放行 next('/login') 强制跳转
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
