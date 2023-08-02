import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'
import market from '../components/market.vue'
import buy from '../components/buy.vue'
import sell from '../components/sell.vue'
import about from '../components/about.vue'
import wallet from '../components/wallet.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/Market',
      name: 'market',
      component: market
    },
    {
      path: '/Buy',
      name: 'buy',
      component: buy
    },
    {
      path: '/Sell',
      name: 'sell',
      component: sell
    },
    {
      path: '/AboutUs',
      name: 'about',
      component: about
    },
    {
      path: '/Wallet',
      name: 'wallet',
      component: wallet
    }
  ]
})

export default router
