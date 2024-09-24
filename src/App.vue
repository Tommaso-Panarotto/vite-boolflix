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
          api_key: store.ApiKey,
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
          api_key: store.ApiKey,
          language: this.language,
          query: store.querySearch,
        }
      })
        .then((response) => {
          store.cardItemsTv = response.data.results;
          console.table(response.data.results)
        })
        .finally(() => {
          store.querySearch = "";
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
@use 'bootstrap/scss/bootstrap.scss';
@use "./styles/general.scss" as *;
</style>
