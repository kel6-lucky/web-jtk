<template>
    <v-app>
        <nav-bar />
        <img src="../assets/photos/Banner.png">
        <v-app class="main-container">
            <div class="mt-12 d-flex justify-center flex-column">
                    <h2 class="text-md-h2 font-weight-black text-dark-blue">Profil Program Studi D4</h2>
                    <hr class="divider-long">
            </div>
                <div class="mt-16 d-flex justify-center flex-column">
                    <h4 class="text-md-h4 font-weight-black text-dark-blue">Visi dan Misi</h4>
                </div>
                <div class="mt-16 flex-column center">
                    <h5 class="text-md-h5 font-weight-black text-dark-blue">Visi</h5>
                </div>
                <div class="mt-16 d-flex justify-center flex-column">
                     <p class="text-md-body d-inline-flex font-black">Pada tahun 2020, menjadi program studi unggulan
                        pada jenjang pendidikan diploma IV bidang Teknik Informatika ditingkat nasional bahkan
                        internasional. Menjadi program studi yang menghasilkan tenaga profesional pengembang
                        perangkat lunak yang kompeten, memiliki semangat terus berkembang, bermoral, berjiwa
                        wirausaha, dan berwawasan lingkungan.</p>
                </div>
                <div class="mt-16 flex-column center">
                    <h5 class="text-md-h5 font-weight-black text-dark-blue">Misi</h5>
                </div>
                <div class="text-md-body font-black">
                    <p>1. Menyelenggarakan program pendidikan Diploma III Teknik Informatika yang diakui
                            baik di tingkat nasional maupun internasional.</p>
                    <p>2. Melakukan penelitian terapan yang dapat digunakan oleh Industri, Institusi atau
                            Masyarakat baik ditingkat nasional maupun internasional</p>
                    <p>3. Melaksanakan pengabdian kepada masyarakat pada lingkup lokal, regional dan nasional.</p>
                </div>
                <div class="mt-16 d-flex justify-center flex-column">
                    <h4 class="text-md-h4 font-weight-black text-dark-blue">Tujuan</h4>
                </div>
                <div>
                    <p> 1. Menghasilkan tenaga di bidang perancangan dan implementasi perangkat lunak bisnis serta
                        perancangan solusi bisnis berbasis teknologi informasi untuk menunjang kebutuhan masyarakat
                        dan industri di lingkup nasional dan internasional, yang memiliki sikap dan kemampuan sebagai
                        berikut:</p>
                    <ul>
                        <li> beradaptasi terhadap perkembangan teknologi informasi </li>
                        <li> belajar panjang hayat dan ulet </li>
                        <li> berpikir kreatif, analitis dan sistematis </li>
                        <li> berwirausaha </li>
                        <li> bermoral </li>
                        <li> berkomunikasi dalam bahasa Internasional </li>
                        <li> 3. Menghasilkan lulusan dengan kompetensi yang diakui pada tingkat nasional maupun internasional.</li>
                        <li> 4. Mendorong mahasiswa untuk menghasilkan produk terapan di bidang perangkat lunak bisnis yang bermanfaat
                            bagi masyarakat dan industri baik nasional maupun internasional.</li>
                        <li> 5. Menghasilkan produk pelayanan dan produk penelitian terapan di bidang teknologi informasi yang
                            bermanfaat bagi masyarakat dan industri baik di tingkat nasional maupun internasional.</li>
                    </ul>
                    <h5> OPERATOR</h5>
                    <ul>
                        <li>Drafter</li>
                        <li>Tester</li>
                        <li> Office Automation</li>
                    </ul>
                    <h5> PROGRAMMER </h5>
                    <ul>
                        <li>Dokumenter</li>
                        <li> Administrator</li>
                        <li> Programmer</li>
                    </ul>
                    <h5>ANALIS dan DESIGNER</h5>
                    <ul>
                        <li>Testing Engineer</li>
                        <li> Requirement Analyst</li>
                        <li> Designer</li>
                    </ul>
                </div>
            <div class="mt-8 d-flex"> 
                <side-bar />
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
        NavBar, FooterPage, SideBar
    },
    name: 'ProfilProdiD3',

    data() {
        return {
            profil_prodi_d4: [],
            artikel: "",
            articles: []
        };
    },
    mounted() {
        axios
            .get("http://localhost:1337/artikels?_where[0][Kategori]=ProfilProdi")
            .then(response => {
            this.profil_prodi_d4 = response.data;
        })
    }
}
</script>


