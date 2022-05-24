<template>
    <v-app>
        <nav-bar />
        <img src="../assets/photos/Banner.png">
        <v-app class="main-container">
            <div class="mt-16 d-flex justify-center flex-column">
                    <h2 class="text-md-h2 font-weight-black text-dark-blue">Data Prestasi</h2>
                    <hr class="divider-long">
            </div>
            <div class="main-grid mt-8">
                <div>
                    <p> Table</p>
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
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import FooterPage from '../components/FooterPage'

export default {
    name: 'DataPrestasi',

    data() {
        return {
            artikel: "",
            articles: [],
        };
    },
    components: { NavBar, SideBar, FooterPage }
}
</script>


