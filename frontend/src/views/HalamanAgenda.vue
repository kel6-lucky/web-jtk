<template>
    <v-app>
        <nav-bar />
        <img src="../assets/photos/Banner-Agenda.png">
        <v-app class="main-container">
            <div class="mt-16 d-flex justify-center flex-column">
                <h2 class="text-md-h2 font-weight-black text-dark-blue">Agenda Jurusan</h2>
                <hr class="divider-medium">
            </div>
            <div class="main-grid mt-8">
                <div>
                    <iframe src="KalenderAkademik.pdf" width="80%" height="800px"></iframe>
                </div>
                <div> 
                    <side-bar />
                </div>
            </div>
            <carousel-agenda class="my-10"></carousel-agenda>
        </v-app>
        <footer-page />
    </v-app>
</template>

<script>
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import FooterPage from '../components/FooterPage'
import CarouselAgenda from '../components/CarouselAgenda'

export default {
    title () {
        return `Foo Page`
    },
    components: {
      NavBar, FooterPage, SideBar, CarouselAgenda
    },
    data() {
        return {
        };
    }
}
</script>

<style>
</style>
