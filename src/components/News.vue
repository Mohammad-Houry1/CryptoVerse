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
  <div class="mx-auto lg:max-w-7xl mt-3">
    <div class="max-w-7xl mx-auto px-5 mb-3">
      <h1 class="text-5xl text-white font-bold">Latest News:</h1>
      <div
        class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 mb-4"
      >
        <div
          v-for="news in totalNews"
          class="max-w-xl rounded-lg border border-transparent shadow-md bg-wh flex flex-col justify-between"
        >
          <img class="rounded-t-lg px-5 py-2 rounded-xl" :src="news.thumbnail" :alt="news.title" />
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {{ news.title }}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ news.description }}
            </p>
            <a
              :href="news.url"
              target="_blank"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-purple-950 hover:bg-purple-900 rounded-lg"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const totalNews = ref([])

    const settings = {
      async: true,
      crossDomain: true,
      url: 'https://cryptocurrency-news2.p.rapidapi.com/v1/bsc',
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ffa1e90d65mshc8214b7621f02cep1827bcjsnde0aed321ec5',
        'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
      }
    }
    $('#loading').show()
    $.ajax(settings).done(function (response) {
      console.log(response)
      totalNews.value = response.data.slice(0, 9)
      $('#loading').hide()
    })

    return {
      totalNews
    }
  }
}
</script>
