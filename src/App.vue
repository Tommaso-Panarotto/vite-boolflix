<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

import { store } from "./store.js"
import axios from 'axios';

export default {
  data() {
    return {
      store,
      ApiUrl: "https://api.themoviedb.org/3/search/movie?",
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
      axios.get(this.ApiUrl, {
        params: {
          api_key: this.ApiKey,
          query: store.querySearch,
          language: this.language,
        }
      })
        .then((response) => {
          store.cardItems = response.data.results;
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
