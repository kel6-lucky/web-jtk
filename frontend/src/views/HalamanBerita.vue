<template>
    <v-app>
        <nav-bar />
        <v-app class="main-container">
            <div class="mt-16 d-flex justify-center flex-column">
                <h2 class="text-md-h2 font-weight-black text-dark-blue">Kuliah Tamu "The Future Work"</h2>
                <hr class="divider-long">
            </div>
            <div class="main-grid mt-8">
                <div>
                    <v-img class="d-flex justify-center flex-column center" max-height="800" max-width="600" src="../assets/photos/Webinar-Future-Work.jpeg"></v-img>
                    <br>
                    <p>Sabtu (21/05), HIMAKOM beserta panitia kuliah tamu dari Jurusan Teknik Informatika POLBAN telah menyelenggarakan
                        kuliah tamu pada platform Zoom Meeting.
                        Dunia kerja pun berada dalam kondisi yang berubah-ubah. Salah satunya pergeseran secara masif di berbagai bidang,
                        mulai pertanian, manufaktur, pertambangan, transportasi, teknologi, dan sebagainya. Keadaan tersebut secara disadari
                        atau tidak telah menyebabkan kecemasan pada kalangan pencari kerja. Dengan memahami perubahan yang terjadi melalui
                        pengenalan tren yang dapat terjadi di tempat kerja, tenaga kerja, dan sifat pekerjaan, “The future of work” dapat
                        membantu pembuat kebijakan, pemimpin bisnis, dan pekerja bergerak maju. Pada kesempatan kali ini Kuliah Tamu
                        Industri/Praktisi menghadirkan pemateri <b>Cici Sucipta</b>, yang akan sharing pengalaman untuk meningkatkan pengetahuan
                        keluarga JTK dengan tema <b>"The Future of Work"</b>.</p>
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

