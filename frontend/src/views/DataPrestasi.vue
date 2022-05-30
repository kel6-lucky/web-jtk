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
                <!-- <div id="app">
                    <v-app dark>
                        <v-layout row justify-center>
                        <v-btn color="dark" dark @click="dialog = true">Detail</v-btn>
                        <v-dialog v-model="dialog" max-width="550">
                            <v-card>
                            <v-card-title class="headline">Gefi Aulia Sanjaya</v-card-title>
                            <v-card-img>
                                <v-img
                                    class="photo-group"
                                    src="../assets/photos/Banner.png">
                                </v-img>
                            </v-card-img>
                            <div class="ml-2">    
                                <v-card-text>Daftar Anggota: </v-card-text>
                                <v-card-text><v-icon>mdi-square-small</v-icon>Gefi Aulia Sanjaya</v-card-text>
                            </div>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="#50BA87" flat="flat" @click="dialog = false">Close</v-btn>
                            </v-card-actions>
                            </v-card>
                        </v-dialog>
                        </v-layout>   
                    </v-app>
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
.photo-group {
    max-width: 100%;
    max-height: 50%;
    margin: 0 30%;
}
</style>

