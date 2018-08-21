import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMovies from './pages/AppMovies.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/movies' },
  { path: '/proba', redirect: '/movies' },
  { path: '/movies', component: AppMovies, name:'movies' }
]

export const router = new VueRouter({
  routes
})