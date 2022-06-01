import Vue from 'vue'
import VueRouter from 'vue-router'
import HalamanBeranda from '../views/HalamanBeranda.vue'
import HalamanSaranaPrasarana from '../views/HalamanSaranaPrasarana.vue'
import ProfilProdiD3 from '../views/ProfilProdiD3.vue'
import ProfilProdiD4 from '../views/ProfilProdiD4.vue'
import ProfilJurusan from '../views/ProfilJurusan.vue'
import HalamanBerita from '../views/HalamanBerita.vue'
import DataPrestasi from '../views/DataPrestasi.vue'
import RincianPrestasi from '../components/RincianPrestasi.vue'
import InformasiKerjasama from '../views/InformasiKerjasama.vue'
import InformasiKurikulum from '../views/InformasiKurikulum.vue'
import ProfilPegawai from '../views/HalamanProfilPegawai.vue'
import TracerStudy from '../views/HalamanTracerStudy.vue'
import HalamanAgenda from '../views/HalamanAgenda.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HalamanBeranda
  },
  {
    path: '/sarana-prasarana',
    name: 'sarana-prasarana',
    component: HalamanSaranaPrasarana
  },
  {
    path: '/prodi-d3',
    name: 'prodi-d3',
    component: ProfilProdiD3
  },
  {
    path: '/prodi-d4',
    name: 'prodi-d4',
    component: ProfilProdiD4
  },
  {
    path: '/profil-jurusan',
    name: 'profil-jurusan',
    component: ProfilJurusan
  },
  {
    path: '/berita',
    name: 'berita',
    component: HalamanBerita
  },
  {
    path: '/data-prestasi',
    name: 'data-prestasi',
    component: DataPrestasi
  },
  {
    path: '/rincian-prestasi',
    name: 'rincian-prestasi',
    component: RincianPrestasi
  },
  {
    path: '/informasi-kerjasama',
    name: 'informasi-kerjasama',
    component: InformasiKerjasama
  },
  {
    path: '/informasi-kurikulum',
    name: 'informasi-kurikulum',
    component: InformasiKurikulum
  },
  {
    path: '/profil-pegawai',
    name: 'profil-pegawai',
    component: ProfilPegawai
  },
  {
    path: '/tracer-study',
    name: 'tracer-study',
    component: TracerStudy
  },
  {
    path: '/agenda',
    name: 'agenda',
    component: HalamanAgenda
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
