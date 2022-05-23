<template>
    <v-app>
        <nav-bar />
        <img src="../assets/photos/Banner.png">
        <v-app class="main-container">
            <div class="mt-12 d-flex justify-center flex-column">
                    <h2 class="text-md-h2 font-weight-black text-dark-blue">Profil Jurusan</h2>
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
    name: 'ProfilJurusan',

    data() {
        return {
            profil_jurusan: [],
            artikel: "",
            articles: []
        };
    },
    mounted() {
        axios
            .get("http://localhost:1337/artikels?_where[0][Kategori]=ProfilJurusan")
            .then(response => {
            this.profil_jurusan = response.data;
        })
    }
}
</script>


