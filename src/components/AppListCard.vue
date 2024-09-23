<script>
export default {
    data() {
        return {
            vote: 0,
            imageUrl: "https://image.tmdb.org/t/p/w342",
        }
    },
    props: {
        cardObj: {
            type: Object,
            required: true,
        }
    },
    methods: {
        getFlagUrl(Url) {
            return new URL(`../assets/flags/${Url}.png`, import.meta.url).href;
        },
        getVote(number) {
            this.vote = Math.ceil(number / 2)
        }
    }
} 
</script>

<template>
    <div class="col overflow-y-auto">
        <div class="card">
            <img :src="(imageUrl + cardObj.poster_path)" :alt="cardObj.title || cardObj.name" class="d-block">
            <div class="card-body d-none">
                <p><span>Titolo: </span>{{ cardObj.title }} {{ cardObj.name }}</p>
                <p><span>Titolo originale:</span> {{ cardObj.original_title }} {{ cardObj.original_name }}</p>
                <div><span>Lingua:</span>{{ cardObj.original_language }}<img
                        :src="getFlagUrl(cardObj.original_language)" alt="top"></div>
                <p v-bind="getVote(cardObj.vote_average)"> <span>Voto:</span>
                    <font-awesome-icon :icon="['fas', 'star']" style="color: #FFD43B;" v-for="n in vote" />
                    <font-awesome-icon :icon="['far', 'star']" style="color: #FFD43B;" v-for="n in (5 - vote)" />
                </p>
                <p><span>Overview:</span> {{ cardObj.overview }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.col {
    border: 0;
    max-height: 600px;

    .flag {
        height: 15px;
        width: 25px;
    }

    &:hover .card-body {
        display: block !important;
    }

    &:hover img {
        display: none !important;
    }

    .card {
        background-color: #141414;
        color: white;
        border: 0;

        span {
            font-weight: bold;
        }
    }
}
</style>