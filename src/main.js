/**
 * @file: main.js
 * @author: Paulo Alves
 * @description: responsável pelas configurações de inicialização da aplicação.
 * @version 1.0.1(05/05/2020)
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
