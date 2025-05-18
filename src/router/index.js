import Home from '../views/Home.vue'
import Cars4sale from '../views/Cars4sale.vue'
import EvService from '../views/EvService.vue'
import Bespoke from '../views/Bespoke.vue'
import Shop from '../views/Shop.vue'
import Support from '../views/Support.vue'
import ProductPage from '../views/ProductPage.vue'
import ProductPageMerch from '../views/ProductPageMerch.vue'
import 1Of1Series from '../views/1Of1Series.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/cars4sale', name: 'Cars4sale', component: Cars4sale },
  { path: '/ev-service', name: 'EvService', component: EvService },
  { path: '/bespoke', name: 'Bespoke', component: Bespoke },
  { path: '/shop', name: 'Shop', component: Shop },
  { path: '/support', name: 'Support', component: Support },
  { path: '/product-page', name: 'ProductPage', component: ProductPage },
  { path: '/product-page-merch', name: 'ProductPageMerch', component: ProductPageMerch },
  { path: '/1-of-1-series', name: '1Of1Series', component: 1Of1Series }
]


import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
