<script>
import AppMovieListCard from "./AppMovieListCard.vue";

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
    <ul>
        <AppMovieListCard v-for="card in store.cardItems" :key="card.id" :cardObj="card" />
    </ul>
</template>

<style lang="scss" scoped></style>