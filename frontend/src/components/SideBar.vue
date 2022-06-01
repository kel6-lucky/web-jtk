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
                {title: 'Profil Jurusan', link: "/profil-jurusan"},
                {title: 'Profil Prodi D3', link: "/prodi-d3"},
                {title: 'Profil Prodi D4', link: "/prodi-d4"},
                {title: 'Profil Pegawai', link: "/profil-pegawai"},
                {title: 'Informasi Kurikulum', link: "/informasi-kurikulum"},
                {title: 'Info Kerjasama', link: "/informasi-kerjasama"},
                {title: 'Sarana dan Prasarana', link: "/sarana-prasarana"},
                {title: 'Agenda', link: "/agenda"},
                {title: 'Berita', link: "/berita"}
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