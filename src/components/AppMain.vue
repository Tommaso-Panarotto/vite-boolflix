<script>
import AppMovieList from "./AppMovieList.vue";
import AppTvList from "./AppTvList.vue";

export default {
    data() {
        return {

        }
    },
    components: {
        AppMovieList,
        AppTvList
    }
}
</script>

<template>
    <AppMovieList />
    <AppTvList />
</template>

<style lang="scss" scoped></style>