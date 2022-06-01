<template>
    <v-app>
        <nav-bar />
        <img src="../assets/photos/Banner.png">
        <v-app class="main-container">
            <div class="mt-16 d-flex justify-center flex-column">
                <h2 class="text-md-h2 font-weight-black text-dark-blue">Profil Jurusan</h2>
                <hr class="divider-long">
            </div>
            <div class="main-grid mt-8">
                <div div class="mr-16" text-md style="text-align: justify">
                    <p>Jurusan Teknik Komputer dan Informatika Politeknik Negeri Bandung (lebih dikenal dengan singkatan JTK) merupakan jurusan
                        penyelenggara pendidikan diploma bidang teknologi informasi pertama di Indonesia. Jurusan ini telah menyelenggarakan
                        pendidikan D-3 bidang teknik komputer dan informatika sejak 1977 dan pendidikan D-4 sejak 2009.</p>
                    <br>
                    <h4 class="text-md-h4 font-weight-black text-dark-blue">Visi dan Misi</h4>
                    <br>
                    <p> JTK memiliki visi untuk menjadi <b>jurusan unggulan dan terdepan di bidang pengkajian, penerapan dan pengembangan teknologi informasi
                         yang diakui baik di tingkat nasional maupun internasional.</b></p>
                    <p>Visi ini dijabarkan ke dalam misi sebagai berikut:</p>
                    <p>1. Menyelenggarakan pendidikan yang menghasilkan sumber daya manusia yang profesional dibidang teknologi informasi;</p>
                    <p>2.  program penelitian yang menghasilkan produk unggulan dibidang teknologi informasi;</p>
                    <p>3. Meningkatkan pemanfaatan teknologi informasi di lingkungan internal maupun lingkungan eksternal (industri, pemerintah dan masyarakat umum);</p>
                    <p>4. Menjadi tempat bagi sivitas akademika untuk saling bertukar gagasan dalam lingkungan yang kondusif.</p>
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
// import axios from 'axios';
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import FooterPage from '../components/FooterPage'

export default {
    components: {
        NavBar, SideBar, FooterPage
    },
    name: 'ProfilProdiD3',

    data() {
        return {
            profil_jurusan: []
        };
    },
}
</script>

<style>
.main-grid {
    display: grid;
    grid-template-columns: 70% auto;
}
</style>

