import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/article/:slug/',
    name: 'Article',
    component: () => import('../views/Article.vue')
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import('../views/ArticleList.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
