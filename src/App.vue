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
      ApiKey: "9b46b3d0d560dce29295098155e7ddae"
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
          query: store.querySearch
        }
      })
        .then((response) => {
          console.log(response)
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
