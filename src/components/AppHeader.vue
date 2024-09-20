<script>
import { store } from "../store.js"

export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        sendAMessage(message) {
            console.log(message)
        }
    }
}
</script>

<template>
    <section id="search">
        <input type="text" v-model="store.querySearch" @keyup.enter="$emit(search)">
        <button @click="$emit('search')">Cerca</button>
    </section>
</template>

<style lang="scss" scoped></style>