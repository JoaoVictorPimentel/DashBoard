import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import axios from 'axios'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'

import ClientsComponent from './pages/clients/ClientsComponent.vue'
import HomeComponent from './pages/home/HomeComponent.vue'
import LoginComponent from './pages/login/LoginComponent.vue'
import ProductComponent from './pages/products/ProductComponent.vue'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

const routes = [
    { path: '/', name: 'login', component: LoginComponent },
    { path: '/home', name: 'home', component: HomeComponent },
    { path: '/produtos', name: 'product', component: ProductComponent },
    { path: '/clientes', name: 'clients', component: ClientsComponent },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
