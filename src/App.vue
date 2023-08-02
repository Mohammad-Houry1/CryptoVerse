<template>
  <navbar />
  <RouterView />
  <foter />
</template>

<script>
import { RouterView } from 'vue-router'
import navbar from './components/navbar.vue'
import foter from './components/fotter.vue'

export default {
  name: 'App',
  components: {
    navbar,
    foter
  }
}
</script>
