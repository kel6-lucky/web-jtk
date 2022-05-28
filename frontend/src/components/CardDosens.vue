<template>
    <div>
        <div class="pegawai-grid">
            <div 
                v-for="(dosen, index) in pagedAssets"
                :key="`asset_index_${index}`"
                class="my-4"
            >
               <v-card
                    max-width="344"
                    color="#1F3C88"
                    class="rounded-lg"
                >
                    <v-card-text id="details-pegawai">
                        <v-avatar
                        size="90"
                        id="photo"
                        >
                            <v-img
                                :lazy-src="dosen.foto_pegawai.url"
                                :src="dosen.foto_pegawai.url"
                            ></v-img>
                        </v-avatar>
                        <h2 class="mt-5">{{dosen.nama_lengkap}}</h2>
                        
                        <p class="mt-3 font-weight-light">{{dosen.no_telephone}}</p>
                    </v-card-text>
                    <v-card-text id="details-dosen" class="ml-5">
                        <p id="orange" class="my-2 font-weight-medium">Keahlian</p>
                        <ul class="mb-4">
                            <li 
                                v-for="keahlian in dosen.keahlian"
                                :key="keahlian.id">
                                <p class="font-weight-light">{{keahlian.keahlian}}</p>
                            </li>
                        </ul>
                        <p id="orange" class="my-2 font-weight-medium">Mata Kuliah yang Diampu</p>
                        <ul class="mb-4">
                            <li 
                                v-for="subject in dosen.mata_kuliahs"
                                :key="subject.id">
                                <p class="font-weight-light">{{subject.Nama_Mata_Kuliah}}</p>
                            </li>
                        </ul>
                        <p id="orange" class="my-2 font-weight-medium">Publikasi</p>
                        <ul>
                            <li 
                                v-for="publikasi in dosen.publikasis"
                                :key="publikasi.id">
                                <p class="font-weight-light"> 
                                    <a :href="publikasi.link_publikasi">
                                        {{publikasi.judul_publikasi}}
                                    </a>
                                </p>
                            </li>
                        </ul>
                    </v-card-text>
                </v-card>
            </div>
        </div>
        <div class="text-center my-8">
                <v-pagination
                    v-model="pageNo"
                    :length="numPages"
                ></v-pagination>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "CardTenagaKependidikan",
    data() {
        return {
            detail_dosen: [],
            pageNo: 1,
            pageSize: 2,
        }
    },
    computed: {
        numPages() {
            return Math.ceil(this.detail_dosen.length/this.pageSize);
        },
        pagedAssets() {
            const startIndex = (this.pageNo - 1) * this.pageSize;
            const data = [... this.detail_dosen];

            return data.splice(startIndex, this.pageSize);
        }
    },
    mounted() {
        axios
            .get("http://localhost:1337/dosens")
            .then(response => {
                this.detail_dosen = response.data;
                this.detail_dosen = this.detail_dosen.sort((a, b) => (a.nama_lengkap > b.nama_lengkap) ? 1 : (b.nama_lengkap > a.nama_lengkap) ? -1 : 0);
                this.detail_dosen.map(x => 
                    x.keahlian.map(y => {
                        for(var i = 0; i < y.keahlian.length; i++) {
                            y.keahlian = y.keahlian.replaceAll('_', ' ');
                        }
                    })
                );
            })
    }
}
</script>

<style>
#details-dosen {
    color: white;
    text-align: justify;
    width: 300px;
    padding-top: 0px;
}
#details-dosen a {
    color: white;
    text-decoration: none;
}

#details-dosen li :hover{
    color: #5893D4;
}

#details-dosen #orange {
    color: #F7B633;
}
</style>