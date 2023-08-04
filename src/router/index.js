import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'
import market from '../components/market.vue'
import why from '../components/Why.vue'
import News from '../components/News.vue'
import about from '../components/about.vue'
import wallet from '../components/wallet.vue'
import Crypto from '../components/cryptoPage.vue'

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
      path: '/Why',
      name: 'Why',
      component: why
    },
    {
      path: '/News',
      name: 'News',
      component: News
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
    },
    {
      path: '/Crypto/:cryptoName/:cryptoSymbol',
      name: 'Crypto',
      component: Crypto
    }
  ]
})

export default router
