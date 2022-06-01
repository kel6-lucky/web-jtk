<template>
    <v-app>
        <div class="table-style">
            <v-data-table
            :headers="headers"
            :items="mata_kuliah"
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
    name: 'TableMatkulD4',
    data() {
        return {
            page: 1,
			pageCount: 0,
            headers: [
                { text: 'Kode Mata Kuliah', sortable: false, value: 'Kode_Mata_Kuliah'},
                { text: 'Nama Mata Kuliah', sortable: false, value: 'Nama_Mata_Kuliah' },
                { text: 'Prerequisite', sortable: false, value: 'prerequisite' },
                { text: 'Semester', sortable: false, value: 'Semester' },
            ],
            mata_kuliah: []
        }
    },
    mounted() {
        axios
            .get("http://localhost:1337/mata-kuliahs?_where[0][Program_Studi]=D4_TI")
            .then(response => {
            this.mata_kuliah = response.data;
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