<template>
    <v-app>
        <nav-bar />
        <img src="../assets/photos/Banner.png">
        <div class="mt-8 d-flex justify-center flex-column center">
            <h2 class="text-md-h2 font-weight-black text-dark-blue">Berita</h2>
            <hr class="divider-short">
        </div>
        <GridBerita></GridBerita>
        <div class="mt-16 d-flex justify-center flex-column center">
            <h2 class="text-md-h2 font-weight-black text-dark-blue">Agenda Jurusan</h2>
            <hr class="divider-medium">
        </div>
        <CarouselAgenda></CarouselAgenda>
        <footer-page />
    </v-app>
</template>

<script>
import CarouselAgenda from '../components/CarouselAgenda.vue';
import GridBerita from '../components/GridBerita.vue'
import NavBar from '../components/NavBar'
import FooterPage from '../components/FooterPage'

export default {
    name: 'HalamanBeranda',

    data() {
        return {
            artikel: "",
            articles: [],
            agendas: [],
        };
    },
    components: { CarouselAgenda, GridBerita, NavBar, FooterPage }
}
</script>


