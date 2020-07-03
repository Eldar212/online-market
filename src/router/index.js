import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main page',
    component: () => import('../components/main-page/main-page')
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import('../components/catalog')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../components/cart'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
