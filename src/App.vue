<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

import { store } from "./store.js"
import axios from 'axios';

export default {
  data() {
    return {
      store,
      apiUrlMovie: "https://api.themoviedb.org/3/search/movie",
      apiUrlTv: "https://api.themoviedb.org/3/search/tv",
      ApiKey: "9b46b3d0d560dce29295098155e7ddae",
      language: "it-IT"
    }
  },
  components: {
    AppHeader,
    AppMain
  },
  methods: {
    search() {
      axios.get(this.apiUrlMovie, {
        params: {
          api_key: this.ApiKey,
          query: store.querySearch,
          language: this.language,
        }
      })
        .then((response) => {
          store.cardItemsMovie = response.data.results;
          console.table(response.data.results)
        })
      axios.get(this.apiUrlTv, {
        params: {
          api_key: this.ApiKey,
          language: this.language,
          query: store.querySearch,
        }
      })
        .then((response) => {
          store.cardItemsTv = response.data.results;
          console.table(response.data.results)
        })
    }
  }
}

</script>

<template>
  <AppHeader @search="search" />
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
