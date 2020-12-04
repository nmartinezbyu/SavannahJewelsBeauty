import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import lashes from './assets/mock-data';
import axios from 'axios';

Vue.config.productionTip = false

let data = {
  selectedLash: {},
  lashes: [],
  appointments: [],
  authToken: '',
}

new Vue({
  router,
  data,
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.getLashes(),
      this.getAppointments()
    },
    async getLashes() {
      try {
        let response = await axios.get("http://localhost:3001/lashes");
        this.lashes = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async getAppointments() {
      try {
        let response = await axios.get("http://localhost:3001/appointments");
        this.appointments = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
  render: h => h(App)
}).$mount('#app')
