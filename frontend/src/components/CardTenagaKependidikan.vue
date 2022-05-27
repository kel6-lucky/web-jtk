<template>
    <div>
        <div class="pegawai-grid">
            <div 
                v-for="(pegawai, index) in pagedAssets"
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
                                :lazy-src="pegawai.foto_pegawai.url"
                                :src="pegawai.foto_pegawai.url"
                            ></v-img>
                        </v-avatar>
                        <h2 class="mt-5">{{pegawai.nama_lengkap}}</h2>
                        <p id="orange" class="my-2">{{pegawai.bidang_profesi}}</p>
                        <p class="font-weight-light">{{pegawai.no_telephone}}</p>
                    </v-card-text>
                </v-card>
            </div>
        </div>
        <div class="text-center mt-8">
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
            detail_tenaga_kependidikan: [],
            pageNo: 1,
            pageSize: 4,
        }
    },
    computed: {
        numPages() {
            return Math.ceil(this.detail_tenaga_kependidikan.length/this.pageSize);
        },
        pagedAssets() {
            const startIndex = (this.pageNo - 1) * this.pageSize;
            const data = [... this.detail_tenaga_kependidikan];

            return data.splice(startIndex, this.pageSize);
        }
    },
    mounted() {
        axios
            .get("http://localhost:1337/tenaga-kependidikans")
            .then(response => {
            this.detail_tenaga_kependidikan = response.data;
            this.detail_tenaga_kependidikan = this.detail_tenaga_kependidikan.sort((a, b) => (a.nama_lengkap > b.nama_lengkap) ? 1 : (b.nama_lengkap > a.nama_lengkap) ? -1 : 0);
            
            for(var i = 0; i < this.detail_tenaga_kependidikan.length; i++) {
                this.detail_tenaga_kependidikan[i].bidang_profesi = 
                    this.detail_tenaga_kependidikan[i].bidang_profesi === "TenagaAdministrasi" ? "Tenaga Administrasi" :
                    (this.detail_tenaga_kependidikan[i].bidang_profesi === "PramuKantor" ? "Pramu Kantor" : 
                    this.detail_tenaga_kependidikan[i].bidang_profesi);
            }
        })
    }
}
</script>

<style>
.pegawai-grid {
    display: grid;
    grid-template-columns: 450px 450px;
}
#photo {
    display:block;
    margin-left:auto;
    margin-right:auto;
    margin-top: 8px;
}
#details-pegawai {
    text-align: center;
    color: white;
}
#details-pegawai #orange {
    color: #F7B633;
}
</style>