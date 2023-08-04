<template>
  <div
    id="loading"
    wire:loading
    class="fixed top-0 left-0 right-0 overflow-hidden bottom-0 w-full h-screen z-[999] overflow-hidden bg-wh flex flex-col items-center justify-center"
  >
    <div
      class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"
    ></div>
    <h2 class="text-center text-white text-xl font-semibold">Loading...</h2>
    <p class="w-1/3 text-center text-white my-2">
      This may take a few seconds, please don't close this page.
    </p>
  </div>
  <div class="w-full h-full p-4 px-16">
    <div v-if="crypto1" class="flex max-sm:flex-col max-sm:items-center w-full h-full mb-12">
      <img
        :src="crypto1.data.coins[0].iconUrl"
        :alt="crypto1.data.coins[0].name"
        class="w-56 mr-24 max-sm:mr-0"
      />
      <div class="flex flex-col justify-evenly text-white w-full">
        <div class="flex flex-col">
          <h1 class="text-4xl font-bold mb-2">{{ crypto1.data.coins[0].name }}</h1>
          <span class="text-lg">Rank: {{ crypto1.data.coins[0].rank }}</span>
          <span class="text-lg">Total Coins Available: {{ crypto1.data.stats.totalCoins }}</span>
          <span class="text-lg">Total Exchanges: {{ crypto1.data.stats.totalExchanges }}</span>
          <span class="text-lg">Total Market: {{ crypto1.data.stats.totalMarkets }}</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-xl">
            Current Price:
            <span v-if="!isNaN(crypto1.data.coins[0].price)">
              {{ parseFloat(crypto1.data.coins[0].price).toFixed(3) }}$
            </span>
            <span v-else>Price not available</span>
          </span>
          <span
            :class="crypto1.data.coins[0].change < 0 ? 'bg-red-600' : 'bg-green-600'"
            class="p-2 border text-xl rounded-xl border-transparent"
            >{{ crypto1.data.coins[0].change }}</span
          >
        </div>
      </div>
    </div>
    <h1 class="text-2xl text-white font-bold mb-4">Latest news about {{ crypto1.name }}:</h1>
    <div class="grid-cols-3 gap-4 grid max-lg:grid-cols-2 max-sm:grid-cols-1">
      <div
        v-for="news in crypto.slice(0, 9)"
        class="bg-wh p-6 rounded-lg flex flex-col justify-between shadow-lg"
      >
        <h3 class="text-2xl text-white font-bold">{{ news.title }}</h3>
        <span class="text-lg text-white">Source: {{ news.source }}</span>
        <p class="text-gray-600 text-md mb-2">{{ news.text }}</p>
        <button class="text-white hover:underline mt-2 inline-block">
          <a target="_blank" :href="news.url">Read More</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const cryptoName = ref(route.params.cryptoName).value.toLowerCase()
    const cryptoSymbol = ref(route.params.cryptoSymbol).value.toLowerCase()
    const crypto = ref([])
    const crypto1 = ref([])
    $('#loading').show()
    const settings1 = {
      async: true,
      crossDomain: true,
      url:
        'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&search=' +
        cryptoName +
        '&orderDirection=desc&limit=50&offset=0',
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ffa1e90d65mshc8214b7621f02cep1827bcjsnde0aed321ec5',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    }
    $.ajax(settings1).done(function (response) {
      crypto1.value = response
      console.log(crypto1.value)
    })

    const settings = {
      async: true,
      crossDomain: true,
      url:
        'https://crypto-news11.p.rapidapi.com/cryptonews/' +
        cryptoName +
        '?max_articles=10&last_n_hours=48&top_n_keywords=9',
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ffa1e90d65mshc8214b7621f02cep1827bcjsnde0aed321ec5',
        'X-RapidAPI-Host': 'crypto-news11.p.rapidapi.com'
      }
    }

    $.ajax(settings).done(function (response) {
      crypto.value = response.articles
      console.log(response)
      $('#loading').hide()
    })
    return {
      cryptoName,
      crypto,
      crypto1,
      cryptoSymbol
    }
  }
}
</script>
