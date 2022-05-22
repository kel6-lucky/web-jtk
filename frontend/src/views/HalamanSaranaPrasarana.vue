<template>
    <v-app>
        <img src="../assets/photos/Banner-SaranaPrasarana.jpg">
        <v-app class="main-container">
            <div class="mt-16 d-flex justify-center flex-column">
                <h2 class="text-md-h2 font-weight-black text-dark-blue">Sarana dan Prasarana</h2>
                <hr class="divider-long">
            </div>
            <div class="main-grid mt-8">
                <div>
                    <div class="grid-row-container">
                        <div 
                            v-for="(sarana_prasarana, index) in pagedAssets"
                            :key="`asset_index_${index}`"
                            class="mr-12"
                        >
                            <v-img
                                    :lazy-src="sarana_prasarana.Banner[0].url"
                                    max-height="300"
                                    max-width="300"
                                    :src="sarana_prasarana.Banner[0].url"
                                    class="my-6 rounded-lg mb-0 image"
                            ></v-img>
                            <div class="mt-2 font-weight-medium judul">{{sarana_prasarana.Judul}}</div>
                        </div>
                    </div>
                    <div class="text-center mt-8">
                        <v-pagination
                        v-model="pageNo"
                        :length="numPages"
                        ></v-pagination>
                    </div>
                </div>
                <div> test </div>
            </div>
        </v-app>
    </v-app>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            sarana_prasaranas: [],
            pageNo: 1,
            pageSize: 9,
            total_asets: 0
        };
    },
    computed: {
        numPages() {
            return Math.ceil(this.sarana_prasaranas.length/this.pageSize);
        },
        pagedAssets() {
            const startIndex = (this.pageNo - 1) * this.pageSize;
            const data = [... this.sarana_prasaranas];

            return data.splice(startIndex, this.pageSize);
        }
    },
    mounted() {
        axios
            .get("http://localhost:1337/artikels?_where[0][Kategori]=SaranaPrasarana")
            .then(response => {
            this.sarana_prasaranas = response.data;
        })
    },
}
</script>

<style>
.judul {
    font-size: 20px;
    color: #1F3C88;
}
.grid-row-container {
    display: grid;
    grid-template-columns: 300px 300px 300px;
}
.image {
    box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.25);
}
.main-grid {
    display: grid;
    grid-template-columns: 900px auto;
}
.main-container {
    margin-left: 56px;
}
</style>
