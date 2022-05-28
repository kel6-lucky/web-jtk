<template>
    <v-app>
        <nav-bar />
        <img src="../assets/photos/Banner-Kurikulum.png">
        <v-app>
            <div class="ma-16 d-flex justify-center flex-column">
                <h2 class="text-md-h2 font-weight-black text-dark-blue">Kurikulum</h2>
                <hr style="width: 18rem;">
            </div>
            <div class="main-grid">
                <div class="mx-13">
                    <div>
                        <p class=" text-md-h4 font-weight-bold text-dark-blue">Kurikulum Diploma 3 Jurusan Teknik
                            Komputer dan Informatika</p>
                        <p class=" text-md-subtitle-1 text-black mt-6 mb-14" style="text-align: justify">
                            Scelerisque arcu diam eu sit aliquam suscipit feugiat mauris. Nisi, dictumst phasellus
                            sodales tristique suspendisse urna. Vulputate malesuada donec viverra sociis. Risus iaculis
                            diam faucibus nibh donec morbi. Eget vel sit viverra viverra. Interdum morbi diam eu ipsum
                            gravida et morbi donec sodales. Nulla scelerisque viverra elementum elementum sed neque quis
                            aliquet accumsan. <br> Imperdiet euismod bibendum proin dui, cras nec risus, nisi. Metus
                            posuere quam nibh consequat amet, ut auctor aliquam maecenas. Nisi, nibh pharetra a sed
                            consectetur non. In sed metus aliquam elit tempus mollis. Purus neque.
                        </p>
                        <p class=" text-md-h4 font-weight-bold text-dark-blue">Kurikulum Diploma 4 Jurusan Teknik
                            Komputer dan Informatika</p>
                        <p class=" text-md-subtitle-1 text-black mt-6 mb-14" style="text-align: justify">
                            Proin tempus, eleifend malesuada sed. Orci erat urna, lacus cursus. Arcu id hac lectus
                            semper. Mi enim proin augue scelerisque dui egestas mi massa. Gravida in amet aliquet enim
                            laoreet non velit nibh. Eu at integer orci et sagittis, amet, eu, eget. Feugiat enim etiam
                            dolor rutrum neque. Turpis nulla risus malesuada augue sem amet massa. Pellentesque ornare
                            magna neque vitae vel, amet volutpat facilisi. Hac sed pulvinar volutpat volutpat enim, nec.
                            Semper luctus imperdiet amet sollicitudin aliquam diam posuere. Enim interdum vel,
                            vestibulum arcu risus turpis. Neque senectus adipiscing elit id sed id nisi libero vitae.
                        </p>
                    </div>
                    <div class="mb-14">
                        <p class=" text-md-h4 font-weight-bold text-dark-blue">Struktur Mata Kuliah</p>
                        <div>
                            <p class=" text-md-h5 font-weight-bold text-center my-6" style="color: #1F3C88">Daftar Mata
                                Kuliah D3</p>
                            <table-matkul-d3 />
                        </div>
                        <div>
                            <p class=" text-md-h5 font-weight-bold text-center my-6" style="color: #1F3C88">Daftar Mata
                                Kuliah D4</p>
                            <!-- <table-mata-kuliah /> -->
                        </div>
                    </div>
                    <div>
                        <p class=" text-md-h4 font-weight-bold text-dark-blue">Profil Lulusan Diploma 3</p>
                        <p class=" text-md-subtitle-1 text-black mt-6 mb-14" style="text-align: justify">
                            {{profil_lulusan.ProfilLulusanD3}}
                        </p>
                        <p class=" text-md-h4 font-weight-bold text-dark-blue">Profil Lulusan Diploma 4</p>
                        <p class=" text-md-subtitle-1 text-black mt-6 mb-14" style="text-align: justify">
                            {{profil_lulusan.ProfilLulusanD4}}
                        </p>
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
import TableMatkulD3 from '../components/Table/TableMatkulD3'

export default {
    components: { NavBar, FooterPage, SideBar, TableMatkulD3 },
    data() {
        return {
            profil_lulusan: []
        }
    },
    mounted() {
        axios
            .get("http://localhost:1337/profil-lulusan")
            .then(response => {
            this.profil_lulusan = response.data;
            console.log(this.profil_lulusan)
        })
    }
}
</script>

<style>
.main-grid {
    display: grid;
    grid-template-columns: 70% auto;
}
</style>