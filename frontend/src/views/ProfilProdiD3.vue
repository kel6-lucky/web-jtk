<template>
    <v-app>
        <nav-bar />
        <img src="../assets/photos/Banner.png">
        <v-app class="main-container">
            <div class="mt-16 d-flex justify-center flex-column">
                <h2 class="text-md-h2 font-weight-black text-dark-blue">Program Studi D-3</h2>
                <hr class="divider-long">
            </div>
            <div class="main-grid mt-8">
                <div>
                    <div class="prodi_D3-container">
                        <p class="mr-16" text-md style="text-align: justify">{{Profil_Prodi_D3.Deskripsi}}</p>
                        <br>
                        <h4 class="text-md-h4 font-weight-black text-dark-blue">Visi dan Misi</h4>
                        <br>
                        <h5 class="text-md-h5 d-flex justify-center font-weight-black text-dark-blue">Visi</h5>
                        <p class="mr-16" text-md style="text-align: justify">{{Profil_Prodi_D3.Visi}}</p>
                        <br>
                        <h5 class="text-md-h5 d-flex justify-center font-weight-black text-dark-blue">Misi</h5>
                        <p class="mr-16" text-md style="text-align: justify">{{Profil_Prodi_D3.Misi}}</p>
                        <br>
                        <h5 class="text-md-h5 d-flex justify-center font-weight-black text-dark-blue">Tujuan</h5>
                        <p class="mr-16" text-md style="text-align: justify">{{Profil_Prodi_D3.Tujuan}}</p>
                        <br>
                    </div>
                </div>
            <!-- <div class="main-grid mt-8">
                <div class="mr-16" text-md style="text-align: justify">
                    <h4 class="text-md-h4 font-weight-black text-dark-blue">Visi dan Misi</h4>
                    <br>
                    <h5 class="text-md-h5 d-flex justify-center font-weight-black text-dark-blue">Visi</h5>
                    <p> Menjadi Program Studi unggulan dan terdepan dalam program pendidikan Diploma III
                        Teknik Informatika yang diakui baik di tingkat nasional maupun internasional pada tahun 2025.</p>
                    <br>
                    <h5 class="text-md-h5 d-flex justify-center font-weight-black text-dark-blue">Misi</h5>
                    <p>1. Menyelenggarakan program pendidikan Diploma III Teknik Informatika yang diakui baik di tingkat nasional maupun internasional.</p>
                    <p><v-icon>mdi-square-small</v-icon> beradaptasi terhadap perkembangan teknologi informasi</p>
                    <p><v-icon>mdi-square-small</v-icon> belajar sepanjang hayat dan ulet</p>
                    <p><v-icon>mdi-square-small</v-icon> berpikir kreatif, analitis dan sistematis</p>
                    <p><v-icon>mdi-square-small</v-icon> berwirausaha
                    <p><v-icon>mdi-square-small</v-icon> bermoral</p>
                    <p><v-icon>mdi-square-small</v-icon> berkomunikasi dalam bahasa Internasional</p>
                    <p>2. Melakukan penelitian terapan yang dapat digunakan oleh Industri, Institusi atau Masyarakat baik ditingkat nasional maupun internasional.</p>
                    <p>3. Melaksanakan pengabdian kepada masyarakat pada lingkup lokal, regional dan nasional.</p>
                    <br>
                    <h5 class="text-md-h5 d-flex justify-center font-weight-black text-dark-blue">Tujuan Program Studi</h5>
                    <p>1. Menghasilkan tenaga di bidang perancangan dan implementasi perangkat lunak bisnis serta perancangan
                        solusi bisnis berbasis teknologi informasi untuk menunjang kebutuhan masyarakat dan industri di lingkup
                        nasional dan internasional yang memiliki sikap dan kemampuan sebagai berikut:</p>
                    <p>2. Menghasilkan lulusan dengan kompetensi yang diakui pada tingkat nasional maupun internasional.</p>
                    <p>3. Mendorong mahasiswa untuk menghasilkan produk terapan di bidang perangkat lunak bisnis yang bermanfaat bagi masyarakat dan industri baik nasional maupun internasional.</p>
                    <p>4. Menghasilkan produk pelayanan dan produk penelitian terapan di bidang teknologi informasi yang bermanfaat bagi masyarakat dan industri baik di tingkat nasional maupun internasional.</p>
                    <br>
                    <h5 class="text-md-h5 d-flex justify-center font-weight-black text-dark-blue">Profil Lulusan</h5>
                    <p>Lulusan program studi Teknik Informatika dibekali dengan pengetahuan teoritis dan pengalaman praktek sehingga siap masuk ke dunia kerja. Lulusan dikategorikan sebagai Informatic-workers,
                        yaitu profesional yang bekerja dibidang informatika atau bidang lain yang berbasis teknologi informatika sebagai operator, programmer, atau analis dan designer. Lulusan akan mampu bekerja
                        pada bidang, misalnya seperti :</p>
                    <p><v-icon>mdi-square-small</v-icon> Pengembangan Perangkat Lunak dan aplikasi</p>
                    <p><v-icon>mdi-square-small</v-icon> Konsultan Industri Teknologi Informasi</p>
                    <p><v-icon>mdi-square-small</v-icon> Pengembangan Perangkat Lunak multimedia</p>
                    <p><v-icon>mdi-square-small</v-icon> Teknologi Jaringan</p>
                    <h5 class="text-md-h5 d-flex justify-center font-weight-black text-dark-blue">Posisi Pekerjaan yang Tersedia</h5>
                    <p> Hampir semua bidang memerlukan keahlian TI, dengan berbagai kriteria dan kompetensi. Pekerjaan yang Tersedia diantaranya:</p>
                    <p class="font-weight-black text-dark-blue">OPERATOR</p>
                    <p><v-icon>mdi-square-small</v-icon> Drafter</p>
                    <p><v-icon>mdi-square-small</v-icon> Tester</p>
                    <p><v-icon>mdi-square-small</v-icon> Office Automation</p>
                    <p class="font-weight-black text-dark-blue">PROGRAMMER</p>
                    <p><v-icon>mdi-square-small</v-icon> Dokumenter</p>
                    <p><v-icon>mdi-square-small</v-icon> Administrator</p>
                    <p><v-icon>mdi-square-small</v-icon> Programmer</p>
                    <p class="font-weight-black text-dark-blue">ANALIS dan DESIGNER</p>
                    <p><v-icon>mdi-square-small</v-icon> Testing Engineer</p>
                    <p><v-icon>mdi-square-small</v-icon> Requirement Analyst</p>
                    <p><v-icon>mdi-square-small</v-icon> Designer</p>
                    <br>
                </div> -->
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
// import marked from 'marked'

export default {
    components: {
        NavBar, SideBar, FooterPage
    },
    name: 'ProfilProdiD3',

    data() {
        return {
            Profil_Prodi_D3: [],
            deskripsi: "",
            htmlString: ""
        };
    },
     mounted() {
         axios
             .get("http://localhost:1337/profil-prodi-d-3")
             .then(response => {
             this.Profil_Prodi_D3 = response.data;
         })
    }
}
</script>

<style>
.main-grid {
    display: grid;
    grid-template-columns: 900px auto;
}
</style>

