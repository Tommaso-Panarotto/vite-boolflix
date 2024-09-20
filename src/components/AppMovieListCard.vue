<script>
export default {
    data() {
        return {

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
    <li>
        <p>Titolo: {{ cardObj.title }}</p>
        <p>Titolo originale: {{ cardObj.original_title }}</p>
        <p>Lingua: {{ cardObj.original_language }}</p>
        <p>Voto: {{ cardObj.vote_average }}</p>
    </li>
</template>

<style lang="scss" scoped></style>