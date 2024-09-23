<script>
import { store } from "../store.js"

export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <header id="search" class="navbar">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <h1>BOOLFLIX</h1>
            </a>
            <div class="d-flex">
                <button type="button" @click="$emit('search')"><font-awesome-icon
                        :icon="['fas', 'magnifying-glass']" /></button>
                <input type="text" placeholder="Cerca Film e Serie Tv" v-model="store.querySearch"
                    @keyup.enter="$emit('search')">
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    min-height: 90px;
    background-color: #141414;

    h1 {
        color: red;
    }

    input,
    button {
        padding: 5px 10px;
        color: white;
        background-color: black;
        border: 2px solid grey;
    }

    input {
        border-left: 0;
    }

    button {
        border-right: 0;
    }
}
</style>