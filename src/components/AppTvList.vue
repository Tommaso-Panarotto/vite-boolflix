<script>
import AppTvListCard from "./AppListCard.vue";

import { store } from "../store.js"

export default {
    data() {
        return {
            store,
        }
    },
    components: {
        AppTvListCard
    }
}
</script>

<template>
    <h2>SERIE TV</h2>
    <ul>
        <AppTvListCard v-for="card in store.cardItemsTv" :key="card.id" :cardObj="card" />
    </ul>
</template>

<style lang="scss" scoped></style>