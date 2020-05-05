/**
 * @file: index.js
 * @author: Paulo Alves
 * @description: responsável pela atribuição das rotas da aplicação.
 * @version 1.0.1(05/05/2020)
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'adicionar',
    component: () => import('../components/AdicionarSeries.vue')
  },
  {
    path: '/listar',
    name: 'listar',
    component: () => import('../components/ListarSeries.vue')
  },
  {
    path: '/editar/:id',
    name: 'editar',
    component: () => import('../components/EditarSeries.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
