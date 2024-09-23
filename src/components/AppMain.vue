<script>
import AppMovieList from "./AppMovieList.vue";
import AppTvList from "./AppTvList.vue";

import { store } from "../store.js"

export default {
    data() {
        return {
            store
        }
    },
    components: {
        AppMovieList,
        AppTvList
    }
}
</script>

<template>
    <main v-if="!store.cardItemsMovie.length">
        <div class="container-fluid">
            Cerca film o serie tv
        </div>
    </main>
    <main v-else>
        <div class="container-fluid">
            <h2>FILM</h2>
            <div class="row">
                <AppMovieList />
            </div>
            <h2>SERIE TV</h2>
            <div class="row">
                <AppTvList />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    color: white;
    text-align: center;
}
</style>