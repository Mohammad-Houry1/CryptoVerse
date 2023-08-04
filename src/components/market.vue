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
  <div class="mx-16 max-sm:mx-8">
    <div
      class="flex items-center justify-center p-4 mb-8 w-full justify-evenly max-sm:flex-wrap max-sm:gap-12"
    >
      <img
        src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
        alt="Bitcoin"
        id="move"
        class="h-full w-auto"
      />
      <div class="flex flex-col items-center">
        <h1 class="text-white text-4xl font-bold z-10 max-sm:text-center">
          Explore the Crypto Market
        </h1>
        <p class="text-center mt-4 text-gray-400 text-md">
          Stay up-to-date with the latest cryptocurrency prices and market trends.
        </p>
      </div>
      <img
        src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
        alt="Eth"
        id="move"
        class="h-full w-auto"
      />
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xl text-white bg-purple-900">
          <tr>
            <th scope="col" class="px-6 py-3">Coin</th>
            <th scope="col" class="px-6 py-3">Price</th>
            <th scope="col" class="px-6 py-3">Circulating Supply</th>
            <th scope="col" class="px-6 py-3">Total Supply</th>
            <th scope="col" class="px-6 py-3">Volume 24hr</th>
            <th scope="col" class="px-6 py-3">Market Cap</th>
          </tr>
        </thead>
        <tr
          v-for="crypto in paginatedCryptos"
          :key="crypto.id"
          class="border-b bg-inherit hover:bg-indigo-950 hover:cursor-pointer"
        >
          <router-link
            class="contents"
            :to="{
              name: 'Crypto',
              params: {
                cryptoName: crypto['Coin'],
                cryptoSymbol: crypto['Symbol']
              }
            }"
          >
            <th scope="row" class="px-6 py-4 whitespace-nowrap flex items-center gap-4">
              <img :src="crypto['Image']" :alt="crypto['Coin']" class="w-16" /><span
                class="font-bold text-white text-xl"
                >{{ crypto['Coin'] }}</span
              >
            </th>
            <td class="px-6 py-4 text-lg text-white align-middle">{{ crypto['Price'] }}</td>
            <td class="px-6 py-4 text-lg text-white align-middle">
              {{ crypto['Circulating Supply'] }}
            </td>
            <td class="px-6 py-4 text-lg text-white align-middle">{{ crypto['Total Supply'] }}</td>
            <td class="px-6 py-4 text-lg text-white align-middle">{{ crypto['Volume 24hr'] }}</td>
            <td class="px-6 py-4 text-lg text-white align-middle">{{ crypto['Market Cap'] }}</td>
          </router-link>
        </tr>
      </table>
    </div>
    <nav aria-label="Pagination" class="flex justify-center mt-8 mb-4">
      <ul class="flex items-center space-x-2">
        <li class="text-white transition duration-150 ease-in-out">
          <a
            class="py-2 px-4 border border-gray-300 rounded select-none cursor-pointer"
            @click="prevPage"
            :class="{ 'pagination-btn': true, disabled: currentPage === 1 }"
            >&laquo; Prev</a
          >
        </li>
        <li
          v-for="page in totalPageCount"
          :key="page"
          class="text-white transition duration-150 ease-in-out"
        >
          <a
            class="py-2 px-4 border border-gray-300 rounded select-none cursor-pointer"
            :class="{ 'pagination-btn': true, 'bg-purple-800': currentPage === page }"
            @click="changePage(page)"
            >{{ page }}</a
          >
        </li>
        <li class="text-white transition duration-150 ease-in-out">
          <a
            class="py-2 px-4 border border-gray-300 rounded select-none cursor-pointer"
            @click="nextPage"
            :class="{ 'pagination-btn': true, disabled: currentPage === totalPageCount }"
            >Next &raquo;</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
#move {
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;
}
@-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-30px);
  }
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-30px);
  }
}
.disabled {
  pointer-events: none;
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
<script setup>
import { ref, computed } from 'vue'
import { watch } from 'vue'

const cryptos = ref([])
$('#loading').show()
const settings = {
  async: true,
  crossDomain: true,
  url: 'https://crypto-update-live.p.rapidapi.com/top-currency/top_50_details',
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ffa1e90d65mshc8214b7621f02cep1827bcjsnde0aed321ec5',
    'X-RapidAPI-Host': 'crypto-update-live.p.rapidapi.com'
  }
}

$.ajax(settings).done(function (response) {
  cryptos.value = response['Top 50 Cryptocurrency Details']
  $('#loading').hide()
})

const currentPage = ref(1)
const itemsPerPage = 10

const totalPageCount = computed(() => {
  return Math.ceil(cryptos.value.length / itemsPerPage)
})

const paginatedCryptos = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return cryptos.value.slice(startIndex, endIndex)
})

function changePage(pageNumber) {
  currentPage.value = pageNumber
}

function prevPage() {
  currentPage.value--
}

function nextPage() {
  currentPage.value++
}
watch(totalPageCount, (newTotalPageCount) => {
  if (currentPage.value > newTotalPageCount) {
    currentPage.value = 1
  }
})
</script>
