<template>
    <v-app>
        <div class="table-style">
            <v-data-table
            :headers="headers"
            :items="riwayat_kerjasama"
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
            </div>
        </div>
    </v-app>
</template>

<script>
import axios from "axios";

export default {
    name: 'TableRiwayatKerjasama',
    data() {
        return {
            page: 1,
			pageCount: 0,
            headers: [
                { text: 'Nama Kerjasama', sortable: false, value: 'NamaKerjasama'},
                { text: 'Partner Kerjasama', sortable: false, value: 'PartnerKerjasama' },
                { text: 'Periode Kerjasama', sortable: false, value: 'PeriodeKerjasama' }
            ],
            riwayat_kerjasama: []
        }
    },
    mounted() {
        axios
            .get("http://localhost:1337/riwayat-kerjasamas")
            .then(response => {
            this.riwayat_kerjasama = response.data;
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