import Vue from 'vue'
import VueRouter from 'vue-router'
import HalamanBeranda from '../views/HalamanBeranda.vue'
import AboutView from '../views/AboutView.vue'
import HalamanSaranaPrasarana from '../views/HalamanSaranaPrasarana.vue'
import HalamanAgenda from '../views/HalamanAgenda.vue'

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
