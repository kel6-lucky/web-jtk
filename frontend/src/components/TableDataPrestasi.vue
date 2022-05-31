<template>
    <v-app>
        <div class="main-grid">
            <v-container>
                <div class="table-style">
                        <v-data-table
                        :headers="headers"
                        :items="prestasi"
                        class="elevation-1"
                        :itemsPerPage="5"
                        :page.sync="page"
                        @page-count="pageCount = $event"
                        hide-default-footer
                        >
                            <template v-slot:[`item.rincian_prestasi.Nama_Group`]=" item ">
                                <p @click="goToRincian()" style="color: blue; text-decoration: underline;">
                                    {{item.item.rincian_prestasi.Nama_Group}}
                                    <!-- <popup-rincian-prestasi /> -->
                                </p>
                                <!-- <v-dialog v-model="dialog" max-width="40%">
                                        <v-card>
                                            <v-container>
                                                {{item.item.rincian_prestasi}}
                                                Nama Peraih: {{item.item.prestasi.Nama_Penghargaan}}
                                                {{item.item.rincian_prestasi.Foto_Group}}

                                                <v-row>
                                                    <v-col cols="8">
                                                        Nama Peraih
                                                    </v-col>
                                                    <v-col cols="8">
                                                        : {{item.item.rincian_prestasi.Nama_Group}}
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                        </v-card>
                                    </v-dialog> -->
                            </template>
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
    name: 'TableDataPrestasi',
    data() {
        return {
            page: 1,
			pageCount: 0,
            headers: [
                { text: 'Nama Peraih', sortable: false, value: 'rincian_prestasi.Nama_Group'},
                { text: 'Kategori', sortable: false, value: 'Kategori' },
                { text: 'Nama Penghargaan', sortable: false, value: 'Nama_Penghargaan' },
                { text: 'Tingkatan', sortable: false, value: 'Tingkatan' }
            ],
            prestasi: [],
            dialog: false
        }
    },
    mounted() {
        axios
            .get("http://localhost:1337/prestasis")
            .then(response => {
            this.prestasi = response.data;
            console.log(this.prestasi);
        })
    },
    methods: {
        goToRincian() { 
            this.$router.push(`/rincian-prestasi`)
        }
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