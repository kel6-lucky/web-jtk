<template>
    <div id="SideBar">
        <div>
            <v-card
            v-for="(item, index) in sideBar"
            :key="index"
            max-width="14rem"
            >
            <v-btn
                class="side-bar text-h6 no-uppercase pa-0"
                text
                :to="item.link"
                id="no-background-hover"
            >
                {{ item.title }}
            </v-btn>
        </v-card>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBar',
    data () {
        return {
            sideBar: [
                {title: 'Profil Jurusan', link:"/home"},
                {title: 'Profil Prodi', link:""},
                {title: 'Profil Pegawai', link:""},
                {title: 'Informasi Kurikulum', link:""},
                {title: 'Informasi Kerjasama', link:""},
                {title: 'Sarana dan Prasarana', link:""},
                {title: 'Berita', link:""},
            ]
        }
    }
}
</script>


<style>
#no-background-hover::before {
   background-color: transparent !important;
}
.no-uppercase {
   text-transform: unset !important;
}
.side-bar .v-btn__content {
   text-decoration: underline;
}
#SideBar span.v-btn__content {
    font-family: "Lato", sans-serif !important;
    color: #1976D2;
}
#SideBar .v-card.v-sheet.theme--light {
    box-shadow: none !important;
}
</style>