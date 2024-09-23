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
    <AppTvListCard v-for="card in store.cardItemsTv" :key="card.id" :cardObj="card" />
</template>

<style lang="scss" scoped></style>