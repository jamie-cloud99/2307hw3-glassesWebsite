import { createRouter, createWebHashHistory } from 'vue-router'
import LayoutView from '../views/LayoutView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: LayoutView,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: 'blog',
          name: 'blogList',
          component: () => import('../views/BlogList.vue')
        },
        {
          path: 'blog/post',
          name: 'blogPost',
          component: () => import('../views/BlogPost.vue')
        },
        {
          path: 'shops',
          name: 'shopList',
          component: () => import('../views/ShopList.vue')
        },
        {
          path: 'shops/shop-detail',
          component: () => import('../views/ShopDetail.vue')
        },
        {
          path: 'products',
          component: () => import('../views/ProductList.vue')
        },
        {
          path: 'faq',
          name: 'faq',
          component: () => import('../views/FaqView.vue')
        }
      ]
    }
  ]
})

export default router
