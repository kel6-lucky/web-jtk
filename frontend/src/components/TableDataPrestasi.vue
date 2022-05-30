<template>
    <v-app>
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
                <!-- <template #prestasi.nama="{ value }">
                    <a :href="`mailto:${value}`">
                    {{ value }}
                    </a>
                </template>
                <template #item.url="{ value }">
                    <a target="_blank" :href="value">
                    {{ value }}
                    </a>
                </template> -->
            </v-data-table>
            <div class="text-center mt-8">
                <v-pagination
                    v-model="page"
                    :length="pageCount"
                ></v-pagination>
            <br>
            </div>
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
            prestasi: []
        //     items: [
        //     {
        //     "_id": "5ea1e60a93027edf047920df",
        //     "name": {
        //       "first": "Roxie",
        //       "last": "Huber"
        //     },
        //     "company": "ISOLOGICS",
        //     "email": "roxie.huber@isologics.name",
        //     "phone": "+1 (866) 403-3864",
        //     "url": "//stackoverflow.com",
        //     "address": "144 Hawthorne Street, Rodman, Mississippi, 5592"
        //   },
        //   {
        //     "_id": "5ea1e60a7104924488c67093",
        //     "name": {
        //       "first": "Wilma",
        //       "last": "Ferrell"
        //     },
        //     "company": "OMATOM",
        //     "email": "wilma.ferrell@omatom.info",
        //     "phone": "+1 (815) 526-2057",
        //     "url": "//google.com",
        //     "address": "621 Pilling Street, Elliston, Arizona, 4968"
        //   },
        // ]
        }
    },
    mounted() {
        axios
            .get("http://localhost:1337/prestasis")
            .then(response => {
            this.prestasi = response.data;
            console.log(this.prestasi);
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