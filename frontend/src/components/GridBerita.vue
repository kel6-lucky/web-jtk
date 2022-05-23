<template>
    <div class="d-flex justify-space-around mt-8">
        <div 
                v-for="(article) in articles" 
                :key="article.id" 
                class="article"
            >
            <h5 class="text-md-h5 text-dark-blue font-weight-bold">{{article.Judul}}</h5>
            <v-img
                :lazy-src="article.Banner[0].url"
                max-height="150"
                :src="article.Banner[0].url"
                class="my-6 rounded-lg"
            ></v-img>
            <p class="article-content">{{article.Konten}}</p>
            <v-btn
                depressed
                color="#1976D2"
                class="btn-article"
            >
                More
            </v-btn>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "GridBerita",
    data() {
        return {
            artikel: "",
            articles: [],
            agendas: [],
        };
    },
    mounted() {
        axios
            .get("http://localhost:1337/artikels?_where[0][Kategori]=Berita")
            .then(response => {
            this.articles = response.data;
            this.articles = this.articles.sort((a, b) => (a.published_at < b.published_at) ? 1 : (b.published_at < a.published_at) ? -1 : 0);
            this.articles = this.articles.slice(0, 3);
            console.log(this.articles)
        })
    },
}
</script>

<style>
.article {
    width: 400px;
    text-align: justify;
}
.article-content{
    overflow:hidden;
    max-height: 8rem;
    -webkit-box-orient: vertical;
    display: block;
    display: -webkit-box;
    overflow: hidden !important;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
}
.btn-article {
    float: right;
}
</style>