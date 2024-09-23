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
    },
    methods: {
        getImageUrl(imageUrl) {
            return new URL(`../assets/flags/${imageUrl}.png`, import.meta.url).href;
        }
    }
} 
</script>

<template>
    <li>
        <p>Titolo: {{ cardObj.title }} {{ cardObj.name }}</p>
        <p>Titolo originale: {{ cardObj.original_title }} {{ cardObj.original_name }}</p>
        <p class="image">Lingua: <img :src="getImageUrl(cardObj.original_language)" :alt="cardObj.original_language">
        </p>
        <p>Voto: {{ Math.ceil(cardObj.vote_average / 2) }}</p>
    </li>
</template>

<style lang="scss" scoped>
.image {
    background-color: gray;
}
</style>