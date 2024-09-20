<script>
import { store } from "../store.js"

export default {
    data() {
        return {
            store
        }
    },
    props: {
        cardObj: {
            type: Object,
            required: true,
        }
    }
}
</script>

<template>
    <li>{{ cardObj.title }}</li>
</template>

<style lang="scss" scoped></style>