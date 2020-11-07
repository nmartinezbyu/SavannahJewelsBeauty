import Vue from 'vue'
import App from './App.vue'
import router from './router'
import lashes from './assets/mock-data';

Vue.config.productionTip = false

let data = {
  selectedLash: {},
  lashes: lashes
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
