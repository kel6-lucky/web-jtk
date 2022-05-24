import Vue from 'vue'
import VueRouter from 'vue-router'
import HalamanBeranda from '../views/HalamanBeranda.vue'
import AboutView from '../views/AboutView.vue'
import HalamanSaranaPrasarana from '../views/HalamanSaranaPrasarana.vue'
import ProfilProdiD3 from '../views/ProfilProdiD3.vue'
import ProfilProdiD4 from '../views/ProfilProdiD4.vue'
import ProfilJurusan from '../views/ProfilJurusan.vue'
import HalamanBerita from '../views/HalamanBerita.vue'
import DataPrestasi from '../views/DataPrestasi.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HalamanBeranda
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
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
    path: '/halaman-berita',
    name: 'halaman-berita',
    component: HalamanBerita
  },
  {
    path: '/data-prestasi',
    name: 'data-prestasi',
    component: DataPrestasi
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
