<script>
export default {
    data() {
        return {
            vote: 0,
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
        },
        getVote(number) {
            this.vote = Math.ceil(number / 2)
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
        <p v-bind="getVote(cardObj.vote_average)"> Voto:
            <font-awesome-icon :icon="['fas', 'star']" style="color: #FFD43B;" v-for="n in vote" />
            <font-awesome-icon :icon="['far', 'star']" style="color: #FFD43B;" v-for="n in (5 - vote)" />
        </p>
    </li>
</template>

<style lang="scss" scoped></style>