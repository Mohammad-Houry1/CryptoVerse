<template>
  <div
    class="container mx-auto px-4 py-4 h-screen flex items-center justify-center max-sm:mt-32 max-sm:mb-20 max-lg:mt-28 max-lg:mb-20"
  >
    <div class="flex justify-around max-lg:flex-wrap w-full max-sm:gap-10">
      <div class="flex flex-col">
        <section class="py-12 max-sm:p-4 max-sm:px-20 text-center">
          <h1 class="text-5xl font-bold text-white mb-4 max-sm:text-3xl">Welcome to CryptoVerse</h1>
          <p class="text-gray-600 text-lg max-sm:text-md">
            Discover the world of cryptocurrencies and blockchain technology.
          </p>
        </section>
        <section>
          <div class="mx-8">
            <swiper
              :loop="true"
              :autoplay="{
                delay: 2500
              }"
              :pagination="pagination"
              :modules="modules"
              class="mySwiper w-[35rem] rounded-lg py-4"
            >
              <swiper-slide class="max-sm:px-12">
                <div class="text-white p-10 rounded-xl shadow-md">
                  <i class="fa-solid fa-chart-bar text-4xl text-white mb-4"></i>
                  <h2 class="text-xl font-semibold mb-2">Real-time Market Data</h2>
                  <p class="text-gray-600">
                    Stay updated with the latest cryptocurrency prices and market trends.
                  </p>
                </div>
              </swiper-slide>
              <swiper-slide class="max-sm:px-12">
                <div class="text-white p-10 rounded-xl shadow-md">
                  <i class="fa-solid fa-money-bill text-4xl text-white mb-4"></i>
                  <h2 class="text-xl font-semibold mb-2">Buy and Sell Cryptocurrencies</h2>
                  <p class="text-gray-600">
                    Easily buy and sell various cryptocurrencies securely on our platform.
                  </p>
                </div>
              </swiper-slide>
              <swiper-slide class="max-sm:px-12">
                <div class="text-white p-10 rounded-xl shadow-md">
                  <i class="fa-solid fa-wallet text-4xl text-white mb-4"></i>
                  <h2 class="text-xl font-semibold mb-2">Secure Wallet</h2>
                  <p class="text-gray-600">
                    Safeguard your valuable crypto assets with our reliable and ultra-secure wallet.
                  </p>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </section>
      </div>
      <img src="../images/hero-banner.png" alt="crypto" class="" />
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import '../assets/base.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      pagination: {
        clickable: true,
        loop: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>'
        }
      },
      autoplay: {
        delay: 100
      },
      modules: [Pagination, Autoplay]
    }
  }
}
</script>
