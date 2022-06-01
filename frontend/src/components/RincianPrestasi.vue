<template>
    <v-app>
            <div class="main-grid justify-center">
                <div class="ma-16 d-flex justify-center flex-column">
                    <h2 class="text-md-h2 font-weight-black text-dark-blue">Rincian Prestasi</h2>
                    <hr style="width: 65rem;">
                    <v-card max-height="100%">
                        <v-card-title class="headline">{{rincian_prestasi.prestasi.Nama_Penghargaan}}</v-card-title>
                            <div class="d-flex flex-row">
                                <div>
                                    <v-img
                                        class="ml-5 mb-5"
                                        :src="rincian_prestasi.foto_group.url"
                                        height="90%"
                                        width="100%"
                                    >
                                    </v-img>
                                </div>
                                <div>
                                    <div class="ml-10">    
                                        <p class="mb-0">Daftar Anggota: </p>
                                        <p><v-icon>mdi-square-small</v-icon>{{rincian_prestasi.Nama_Anggota}}</p>
                                        <div>
                                            <markdown-display />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </v-card>
                    <p></p>
                </div>
                <div class="mt-16"> 
                    <side-bar />
                </div>
            </div>
        </v-app>
</template>

<script>
import axios from "axios";
import MarkdownDisplay from '../components/MarkdownDisplay'

export default {
    name: 'RincianPrestasi',
    components: { MarkdownDisplay },
    data() {
        return {
            page: 1,
			pageCount: 0,
            headers: [
                { text: 'Nama Peraih', sortable: false, value: 'Nama_Group'},
                { text: 'Nama Anggota', sortable: false, value: 'Nama_Anggota' },
                { text: 'Foto group', sortable: false, value: 'Foto_group' }
            ],
            rincian_prestasi: [],
            dialog: false,
            prestasi: []
        }
    },
    created() {
        const id = this.$route.query.id;
        axios
            .get("http://localhost:1337/rincian-prestasis/" + id)
            .then(response => {
            this.rincian_prestasi = response.data;
        })
    }
}
</script>

<style>
.v-application--wrap {
    min-height: auto;
}
.table-style {
    font-family: 'Lato', sans-serif;
    border-collapse: collapse;
}
th {
    text-align: center;
    background: #1F3C88;
    cursor: pointer;
}
.table-style th span {
    color: #FFFFFF;
}
td {
    border: 1px solid #1F3C88;
}
</style>