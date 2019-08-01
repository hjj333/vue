import Vue from 'vue'
import Router from 'vue-router'
import Msite from './views/Msite.vue'
import Order from './views/Order.vue'
import Profile from './views/Profile.vue'
import Search from './views/Search.vue'
import Login from './views/Login.vue'
import Shop from './views/shop/Shop.vue'
import ShopGoods from './views/shop/ShopGoods.vue'
import ShopRatings from './views/shop/ShopRatings.vue'
import ShopInfo from './views/shop/ShopInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    }
  ]
})
