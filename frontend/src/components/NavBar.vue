<template>
   <div id="NavBar">
      <v-app-bar
      app
      fixed
      min-height="6rem"
      class="d-flex align-center"
      color="#1976D2"
      >
         <v-card @click="onClickedHome()" outlined color="transparent" height="40" width="510" class="d-flex align-center">
            <v-img :src="require('../assets/logopolban.png')" height="40" width="27" contain/>
            <v-btn text class="text-h5 white--text no-uppercase" color="#1976D2">Jurusan Teknik Komputer dan Informatika</v-btn>
         </v-card>

         <v-spacer></v-spacer>

         <v-toolbar-items>
            <v-btn
            text
            class="text-subtitle-1 white--text no-uppercase"
            to="/home"
            >
               Beranda
            </v-btn>
            <v-menu
            open-on-hover
            down
            offset-y
            >
               <template
               v-slot:activator="{on,attrs}"
               >
                  <v-btn
                  text
                  v-on="on"
                  v-bind="attrs"
                  class="text-subtitle-1 white--text no-uppercase"
                  >
                     Tentang JTK
                     <v-icon>mdi-menu-down</v-icon>
                  </v-btn>
               </template>
               <v-list color="#1976D2">
                  <v-list-item
                     v-for="(item, index) in artikel"
                     link
                     :key="index"
                     class="text-subtitle-1 white--text"
                     style="min-height: 35px"
                     :to="item.link"
                  >
                     <v-list-item-title>
                        {{ item.title }}
                        <v-divider class="my-1 orange" style="border-width: 1px !important; height: 100%;"></v-divider>
                     </v-list-item-title> 
                  </v-list-item>
               </v-list>
            </v-menu>
            <v-btn text class="text-subtitle-1 white--text no-uppercase" to="/data-prestasi">Data Prestasi</v-btn>
            <v-btn text class="text-subtitle-1 white--text no-uppercase" to="/tracer-study">Tracer Study</v-btn>
            <v-btn text class="text-subtitle-1 white--text no-uppercase" to="/agenda-jurusan">Agenda</v-btn>
         </v-toolbar-items>
      </v-app-bar>
   </div>
</template>

<script>
export default {
   name: 'NavBar',
   data () {
      return {
         toHome: "/home",
         artikel: [
            {title: 'Profil Jurusan', link: "/profil-jurusan"},
            {title: 'Profil Prodi D3', link: "/profil-prodi-d3"},
            {title: 'Profil Prodi D4', link: "/profil-prodi-d4"},
            {title: 'Informasi Kurikulum', link: "/informasi-kurikulum"},
            {title: 'Info Kerjasama', link: "/informasi-kerjasama"},
            {title: 'Sarana dan Prasarana', link: "/sarana-prasarana"},
            {title: 'Berita', link: "berita"}
         ],
      }
   },
   methods: {
      async onClickedHome () {
         if (this.$router.currentRoute.path !== this.toHome) {
         await this.$router.push({ path: this.toHome })
         }
      },
   }
}
</script>

<style>
.btn {
   text-transform: unset !important;
}
.no-uppercase {
   text-transform: unset !important;
}
span.v-btn__content {
   font-family: 'Lato', sans-serif;
   font-style: normal;
   color:white;
}
.v-toolbar__content {
   width: 100vw;
   height: 100vh;
   margin: 0 1rem;
}
.test {
   border-width: 4px !important;
   border-color: black !important;
   height: 100%;
}
</style>
