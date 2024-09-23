<script>
import AppMovieListCard from "./AppListCard.vue";

import { store } from "../store.js"

export default {
    data() {
        return {
            store,
        }
    },
    components: {
        AppMovieListCard
    }
}
</script>

<template>
    <AppMovieListCard v-for="card in store.cardItemsMovie" :key="card.id" :cardObj="card" />
</template>

<style lang="scss" scoped></style>