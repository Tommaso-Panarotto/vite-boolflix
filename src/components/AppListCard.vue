<script>
import { store } from "../store.js";
import axios from 'axios';


export default {
    data() {
        return {
            store,
            vote: 0,
            imageUrl: "https://image.tmdb.org/t/p/w342",
            castApi: "https://api.themoviedb.org/3/movie/383498/credits",
            castActhors: [],
            visibleCast: false,
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
        },
        getCast(id) {
            axios.get(`https://api.themoviedb.org/3/movie/${id.toString()}/credits`, {
                params: {
                    api_key: store.ApiKey,
                }
            })
                .then((response) => {
                    for (let i = 0; i < 5; i++) {
                        this.castActhors.push(response.data.cast[i].name)
                    }
                })
        },
        showCast() {
            if (this.visibleCast === false) {
                this.visibleCast = true
            } else {
                this.visibleCast = false
            }
        }
    }
} 
</script>

<template>
    <div class="col overflow-y-auto">
        <div class="card">
            <img :src="(imageUrl + cardObj.poster_path)" :alt="cardObj.title || cardObj.name" class="poster">
            <div class="card-body ds-none" v-show="visibleCast === false" :class="(visibleCast) ? 'ds-none' : ''">
                <ul>
                    <li><font-awesome-icon class="fs-2 cast" :icon="['fas', 'user-secret']" @click="showCast()" />
                    </li>
                    <li><span>Titolo: </span>
                        <h3>{{ cardObj.title }} {{ cardObj.name }}</h3>
                    </li>
                    <li><span>Titolo originale:</span>
                        <h4>{{ cardObj.original_title }} {{ cardObj.original_name }}</h4>
                    </li>
                    <div><span>Lingua:</span> <img class=" flag" :src="getFlagUrl(cardObj.original_language)"
                            :alt="cardObj.original_language"></div>
                    <li v-bind="getVote(cardObj.vote_average)"> <span>Voto:</span>
                        <font-awesome-icon :icon="['fas', 'star']" style="color: #FFD43B;" v-for="n in vote" />
                        <font-awesome-icon :icon="['far', 'star']" style="color: #FFD43B;" v-for="n in (5 - vote)" />
                    </li>
                    <li class="overview"><span>Overview:</span> {{ cardObj.overview }}</li>
                </ul>
            </div>
            <div v-bind="getCast(cardObj.id)" :class="(visibleCast) ? '' : 'ds-none'" @mouseleave="showCast()">
                <h3>CAST</h3>
                <ul>
                    <li v-for="n in 5">{{ castActhors[n] }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.col {
    border: 0;
    max-width: 420px;

    li {
        margin: 25px 0;
    }

    &:hover .card-body {
        display: block;
    }

    &:hover .poster {
        display: none;
    }

    .card {
        background-color: #141414;
        color: white;
        border: 0;

        span {
            font-weight: bold;
        }

        .card-body {
            max-height: 210px;
        }
    }

    .cast {
        cursor: pointer;
    }
}
</style>