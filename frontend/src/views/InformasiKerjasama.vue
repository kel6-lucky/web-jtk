<template>
    <v-app>
        <nav-bar />
        <img src="../assets/photos/Banner-InformasiKerjasama.png">
        <v-app>
            <div class="ma-16 d-flex justify-center flex-column">
                <h2 class="text-md-h2 font-weight-black text-dark-blue">Informasi Kerjasama</h2>
                <hr style="width: 35rem;">
            </div>
            <div class="main-grid">
                <div class="mx-13">
                    <div>
                        <p class=" text-md-h4 font-weight-bold text-dark-blue">Jenis Kerjasama</p>
                        <p class=" text-md-subtitle-1 text-black mt-6 mb-14" style="text-align: justify">
                            {{rincian_kerjasama.JenisKerjasama}}
                        </p>
                    </div>
                    <div>
                        <p class=" text-md-h4 font-weight-bold text-dark-blue my-6">Riwayat Kerjasama</p>
                        <table-riwayat-kerjasama />
                    </div>
                    <div>
                        <p class=" text-md-h4 font-weight-bold text-dark-blue my-6">Pengajuan Kerjasama</p>
                        <p class=" text-md-subtitle-1 text-black mt-6 mb-14" style="text-align: justify">
                            Untuk mulai melakukan kerjasama dengan Jurusan Teknik Komputer dan Informatika Politeknik Negeri Bandung diperlukan beberapa prosedur sebelum kerjasama terjalin. Untuk informasi lebih lanjut mengenai pendaftaran, prosedur kerjasama, dan narahubung kerjasama silahkan
                            <a :href="rincian_kerjasama.LinkPengajuan">klik di sini.</a>
                        </p>
                    </div>
                    <div class="my-16">
                        <p class=" text-md-h4 font-weight-bold text-dark-blue my-6">Kerjasama Jurusan Teknik Komputer dan Informatika</p>
                        <div class="img">
                            <v-img
                            :src="rincian_kerjasama.LogoPartnerKerjasama[0].url"
                            max-height="100"
                            max-width="100"
                            style="margin-right: 5%;"
                            contain
                            />
                        </div>
                        <!-- <div class="img" v-for="item in LogoPartnerKerjasama.url" v-bind:key="item">
                            <v-img :src="item"/>
                        </div> -->
                    </div>
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
import axios from "axios";
import NavBar from '../components/NavBar'
import FooterPage from '../components/FooterPage'
import SideBar from '../components/SideBar'
import TableRiwayatKerjasama from '../components/Table/TableRiwayatKerjasama.vue'

export default {
    components: { NavBar, FooterPage, SideBar, TableRiwayatKerjasama },
    data() {
        return {
            rincian_kerjasama: []
        };
    },
    mounted() {
        axios
            .get("http://localhost:1337/rincian-kerjasama")
            .then(response => {
            this.rincian_kerjasama = response.data;
            console.log(this.rincian_kerjasama)
        })
    }
}
</script>

<style>
.main-grid {
    display: grid;
    grid-template-columns: 70% auto;
}
.img v-img {
    width: auto;
    vertical-align: middle;
    margin: 5% 0;
}
</style>