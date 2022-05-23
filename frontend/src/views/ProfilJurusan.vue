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
                <div>
                    <p>Jurusan Teknik Komputer dan Informatika Politeknik Negeri Bandung (lebih dikenal dengan singkatan JTK) merupakan jurusan
                        penyelenggara pendidikan diploma bidang teknologi informasi pertama di Indonesia. Jurusan ini telah menyelenggarakan pendidikan
                        D-3 bidang teknik komputer dan informatika sejak 1977 dan pendidikan D-4 sejak 2009.</p>
                    <p>Dengan daya tampung sekitar 96 mahasiswa per tahun, sampai saat ini JTK telah menghasilkan lebih dari 2.500 alumni yang bekerja
                        pada berbagai sektor industri, baik di dalam maupun di luar negeri.</p>
                    <p>Selain menjalankan pendidikan, JTK juga menyelenggarakan penelitian dan pengabdian kepada masyarakat dalam bidang teknologi informasi.
                        Sebagai jurusan pertama yang menyelenggarakan pendidikan profesional bidang teknologi informasi, JTK selalu dijadikan tolok ukur dan
                        telah banyak memberikan bantuan teknis dan non-teknis kepada institusi lain maupun kepada masyarakat umum. Beberapa aktivitas yang
                        sering dilakukan di antaranya adalah pembinaan institusi, pelatihan bidang TI, konsultasi pemanfaatan TI untuk menunjang kegiatan kerja, pengembangan sistem informasi, dan lab/bengkel komputer layanan masyarakat.</p>
                    <br>
                    <h4 class="text-md-h4 font-weight-black text-dark-blue">Visi dan Misi</h4>
                    <br>
                    <p> JTK memiliki visi untuk menjadi jurusan unggulan dan terdepan di bidang pengkajian, penerapan dan pengembangan teknologi informasi, yang diakui baik di tingkat nasional maupun internasional.</p>
                    <p>Visi ini dijabarkan ke dalam misi sebagai berikut:</p>
                    <p>1. Menyelenggarakan pendidikan yang menghasilkan sumber daya manusia yang profesional dibidang teknologi informasi;</p>
                    <p>2.  program penelitian yang menghasilkan produk unggulan dibidang teknologi informasi;</p>
                    <p>3. Meningkatkan pemanfaatan teknologi informasi di lingkungan internal maupun lingkungan eksternal (industri, pemerintah dan masyarakat umum);</p>
                    <p>4. Menjadi tempat bagi sivitas akademika untuk saling bertukar gagasan dalam lingkungan yang kondusif.</p>
                    <br>
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
// import marked from 'marked'

export default {
    components: {
        NavBar, SideBar, FooterPage
    },
    name: 'ProfilProdiD3',

    data() {
        return {
            profil_prodi_d3: [],
            artikel: "",
            articles: []
        };
    },
    // mounted() {
    //     axios
    //         .get("http://localhost:1337/artikels?_where[0][Kategori]=ProfilProdiD3")
    //         .then(response => {
    //         this.articles = response.data;
    //         this.articles = this.articles.sort((a, b) => (a.published_at < b.published_at) ? 1 : (b.published_at < a.published_at) ? -1 : 0);
    //         this.articles = this.articles.slice(0, 3);
    //         console.log(this.articles)
    //     })
    // },
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

