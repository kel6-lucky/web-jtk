<template>
    <v-app>
        <nav-bar />
        <img src="../assets/photos/Banner.png">
        <v-app>
            <div class="ma-16 d-flex justify-center flex-column">
                    <h2 class="text-md-h2 font-weight-black text-dark-blue">Data Prestasi</h2>
                    <hr style="width: 25rem">
            </div>
            <div class="main-grid">
                <div class="mx-13">
                    <table-data-prestasi />
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
import TableDataPrestasi from '../components/TableDataPrestasi.vue'

export default {
    name: 'DataPrestasi',

    data() {
        return {
            artikel: "",
            rincian_prestasi: [],
            dialog: false
        };
    },
    components: { NavBar, SideBar, FooterPage, TableDataPrestasi }
}
</script>

<style>
.main-grid {
    display: grid;
    grid-template-columns: 70% auto;
}
</style>

