<template>
    <v-app>
        <nav-bar />
        <img src="../assets/photos/Banner.png">
        <v-app class="main-container">
            <div class="mt-16 d-flex justify-center flex-column">
            <div 
                v-for="(article) in articles" 
                :key="article.id" 
                class="article"
            >
            <h2 class="text-md-h2 text-dark-blue font-weight-black">{{article.Judul}}</h2>
            <hr class="divider-long">
            <v-img
                :lazy-src="article.Banner[0].url"
                :src="article.Banner[0].url"
                class="my-6 rounded-lg"
            ></v-img>
            <p class="article-content">{{article.Konten}}</p>
        </div>
                <div> 
                    <side-bar />
                </div>
            </div>
        </v-app>
        <footer-page />
    </v-app>
</template>

<script>
import axios from 'axios';
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import FooterPage from '../components/FooterPage'

export default {
    components: {
        NavBar, SideBar, FooterPage
    },
    name: 'HalamanBerita',

    data() {
        return {
            berita: [],
            artikel: "",
            articles: []
        };
    },
    mounted() {
        axios
            .get("http://localhost:1337/artikels?_where[0][Kategori]=Berita")
            .then(response => {
            this.articles = response.data;
            // this.articles = this.articles.sort((a, b) => (a.published_at < b.published_at) ? 1 : (b.published_at < a.published_at) ? -1 : 0);
            // this.articles = this.articles.slice(0, 3);
            // console.log(this.articles)
        })
    },
    // computed: {
    //     markdownToHtml() {
    //          return marked(this.articles)
    //     }
    // }
}
</script>

<style>
.main-grid {
    display: grid;
    grid-template-columns: 70% auto;
}
</style>

