import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import LoginComponent from '@/pages/Login/LoginComponent'
import HomeComponent from '@/pages/Home/HomeComponent'
import ProductsComponent from '@/pages/Products/ProductsComponent'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(VueRouter)
Vue.config.productionTip = false


const routes = [
  { path: '/', name: 'login', component: LoginComponent },
  { path: '/home', name: 'home', component: HomeComponent },
  { path: '/products', name: 'products', component: ProductsComponent },
  { path: '/sales', name: 'sales', component: HomeComponent },
  { path: '/reports', name: 'reports', component: HomeComponent },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
