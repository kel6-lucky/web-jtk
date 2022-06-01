<template>
   <div id="FooterPage">
      <v-footer
         color="#1976D2"
         padless
      >
         <v-row
            no-gutters
         >
            <v-col
            class="ma-10"
            min-height="6rem"
            color="#1976D2"
            >
               <div class="grid-row-container mx-6">
                  <div> 
                     <p class="text-h5 font-weight-bold">Alamat</p>
                     <p class="text-subtitle-1 white--text">Jurusan Teknik Komputer dan Informatika <br> Politeknik Negeri Bandung <br> Jl. Gegerkalong Hilir, Ciwaruga, Kec. Parongpong, Kabupaten Bandung Barat, Jawa Barat Kode Pos 40559  |  Kotak Pos Bandung 1234</p>
                  </div>
                  <div>
                     <div class="ml-10 mt-10">
                        <iframe src="https://maps.google.com/maps?q=Gedung%20JTK%20Politeknik%20Negeri%20bandung&t=&z=13&ie=UTF8&iwloc=&output=embed" width="90%" height="90%" frameborder="0" style="border:0"></iframe>
                     </div>
                  </div>
                  <div class="mx-8">
                     <p class="text-h5 font-weight-bold">Kontak</p>
                     <v-btn
                        v-for="(item, index) in kontak"
                        :key="index"
                        class="mr-4"
                        color="#FFFFFF"
                        icon
                        :href="item.link"
                     >
                        <v-icon size="24px">
                        {{ item.icon }}
                        </v-icon>
                     </v-btn>
                  </div>
                  <div>
                     <p class="text-h5 font-weight-bold">Akses Cepat</p>
                     <div
                        v-for="(item, index) in aksesCepat"
                        :key="index"
                     >
                        <v-btn
                           class="akses-cepat text-subtitle-1 white--text no-uppercase pa-0"
                           text
                           :to="item.link"
                           id="no-background-hover"
                        >
                           {{ item.title }}
                        </v-btn>
                     </div>
                  </div>
               </div>
            </v-col>

            <v-col
               cols="12"
               class="orange py-1 text-center"
            >
               <v-text class="text-subtitle-1 black--text no-uppercase">
               @2021 - 2022 Jurusan Teknik Komputer dan Informatika Politeknik Negeri Bandung
               </v-text>
            </v-col>
         </v-row>
      </v-footer>
   </div>
</template>

<script>
export default {
   name: 'FooterPage',
   data () {
      return {
         kontak: [
            {icon: 'mdi-instagram', link:"https://www.instagram.com/jtkpolban/?hl=en"},
            {icon: 'mdi-facebook', link:"https://www.facebook.com/jtkpolban/"},
            {icon: 'mdi-phone', link:"http://jtk.polban.ac.id/"},
            {icon: 'mdi-email', link:"humas@jtk.polban.ac.id"}
         ],
         aksesCepat: [
            {title: 'Beranda', link:"/home"},
            {title: 'Data Prestasi', link:"/data-prestasi"},
            {title: 'Tracer Study', link:"tracer-study"},
            {title: 'Agenda', link:"/agenda"},
         ]
      }
   }
}
</script>

<style>
.v-application .text-subtitle-1 {
   font-family: "Lato", sans-serif !important;
}
.v-application .text-h5 {
   font-family: "Lato", sans-serif !important;
   color: #070D59;
}
.grid-row-container {
   display: grid;
   grid-template-columns: 29% 27% 23% 20%;
}
.img {
   width: auto;
   vertical-align: middle;
}
#no-background-hover::before {
   background-color: transparent !important;
}
.no-uppercase {
   text-transform: unset !important;
}
.akses-cepat .v-btn__content {
   text-decoration: underline;
}
</style>