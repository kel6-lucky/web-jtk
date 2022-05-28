<template>
    <v-app>
        <nav-bar />
        <v-app class="main-container">
            <div class="mt-16 d-flex justify-center flex-column">
                <h2 class="text-md-h2 font-weight-black text-dark-blue">Profil Pegawai</h2>
                <hr class="divider-medium">
            </div>
            <div class="main-grid mt-8">
                <div>
                    <h1 class="sub-title-pegawai">Tenaga Kependidikan</h1>
                    <card-tenaga-kependidikan></card-tenaga-kependidikan>
                    <h1 class="mt-4 sub-title-pegawai">Dosen</h1>
                    <card-dosens></card-dosens>
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
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import FooterPage from '../components/FooterPage'
import CardTenagaKependidikan from '../components/CardTenagaKependidikan.vue'
import CardDosens from '../components/CardDosens.vue'
export default {
    components: { SideBar, NavBar, FooterPage, CardTenagaKependidikan, CardDosens }
}
</script>
<style>
.sub-title-pegawai {
    color: #070D59;
}
</style>