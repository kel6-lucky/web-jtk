<!-- <template>
    <div id="app">
        <v-app dark>
            <v-layout row justify-cente>
                <v-btn color="dark" dark @click="dialog = true">Detail</v-btn>
                    <v-dialog v-model="dialog" max-width="40%">
                        <v-card>
                            <v-card-title class="headline">Gefi Aulia Sanjaya</v-card-title>
                            <div class="d-flex flex-row">
                                <div>
                                    <v-img
                                        class="ml-5 mb-0"
                                        src="../assets/photos/SamplePrestasi.jpg"
                                        height="100%"
                                    >
                                    </v-img>
                                </div>
                                <div>
                                    <div class="ml-5">    
                                        <p class="mb-0">Daftar Anggota: </p>
                                        <p><v-icon>mdi-square-small</v-icon>Gefi Aulia Sanjaya</p>
                                    </div>
                                </div>
                            </div>
                            <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="#50BA87" flat="flat" @click="dialog = false">Close</v-btn>
                            </v-card-actions>
                        </v-card>
                </v-dialog>
            </v-layout>   
        </v-app>
    </div>
</template> -->

<template>
    <v-app>
        <div class="main-grid">
            <v-container>
                <div class="table-style">
                        <v-data-table
                        :headers="headers"
                        :items="rincian_prestasi"
                        class="elevation-1"
                        :itemsPerPage="5"
                        :page.sync="page"
                        @page-count="pageCount = $event"
                        hide-default-footer
                        >
                        </v-data-table>
                    <div class="text-center mt-8">
                        <v-pagination
                            v-model="page"
                            :length="pageCount"
                        ></v-pagination>
                    <br>
                    </div>
                </div>
            </v-container>
        </div>
    </v-app>
</template>

<script>
import axios from "axios";
export default {
    name: 'RincianPrestasi',
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
            dialog: false
        }
    },
    mounted() {
        axios
            .get("http://localhost:1337/rincian-prestasis")
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