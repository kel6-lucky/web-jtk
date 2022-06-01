<template>
    <v-app>
        <nav-bar />
        <img src="../assets/photos/Banner.png">
        <v-app>
            <div class="main-grid">
                <div class="ma-16 d-flex justify-center flex-column">
                    <h2 class="text-md-h2 font-weight-black text-dark-blue">Kuliah Tamu "The Future Work"</h2>
                    <hr style="width: 45rem;">
                    <v-img
                        src="../assets/photos/Webinar-Future-Work.jpeg"
                        class="my-6 rounded-lg"
                    ></v-img>
                    <p class="text-md-subtitle-1 text-black mt-6 mb-14" style="text-align: justify">
                        Sabtu (21/05), HIMAKOM beserta panitia kuliah tamu dari Jurusan Teknik Informatika POLBAN telah menyelenggarakan
                        kuliah tamu pada platform Zoom Meeting.
                        Dunia kerja pun berada dalam kondisi yang berubah-ubah. Salah satunya pergeseran secara masif di berbagai bidang,
                        mulai pertanian, manufaktur, pertambangan, transportasi, teknologi, dan sebagainya. Keadaan tersebut secara disadari
                        atau tidak telah menyebabkan kecemasan pada kalangan pencari kerja. Dengan memahami perubahan yang terjadi melalui
                        pengenalan tren yang dapat terjadi di tempat kerja, tenaga kerja, dan sifat pekerjaan, “The future of work” dapat
                        membantu pembuat kebijakan, pemimpin bisnis, dan pekerja bergerak maju. Pada kesempatan kali ini Kuliah Tamu
                        Industri/Praktisi menghadirkan pemateri <b>Cici Sucipta</b>, yang akan sharing pengalaman untuk meningkatkan pengetahuan
                        keluarga JTK dengan tema <b>"The Future of Work"</b>
                    </p>
                </div>
                <div class="mt-16"> 
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
            page: 1,
			pageCount: 0,
            articles: []
        };
    },
    mounted() {
        axios
            .get("http://localhost:1337/artikels?_where[0][Kategori]=Berita")
            .then(response => {
            this.articles = response.data;
            console.log(this.articles[0])
        })
    },
}
</script>

<style>
.main-grid {
    display: grid;
    grid-template-columns: 60% auto;
}
</style>

