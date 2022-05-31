import Vue from 'vue'
import VueRouter from 'vue-router'
import HalamanBeranda from '../views/HalamanBeranda.vue'
import HalamanSaranaPrasarana from '../views/HalamanSaranaPrasarana.vue'
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
