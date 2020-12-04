
<template>
  <div class="mt-5" style="background: url(/images/repeatinglashesinverse.jpg); padding: 30px; ">
    <div v-if="!selectedLash.name"  class="vh-75 d-flex align-items-center justify-content-center">
      <button class="btn btn-primary btn-xlg"  @click="showModal = true"> Select Lash Type </button>
    </div>
    <div v-else class="container">
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="card w-100">
            <img class="w-100" :src="selectedLash.image" alt="lash" />
            <div class="text-center text-black card-body font-brush display-4">
              {{selectedLash.name}}
            </div>
          </div>
        </div>
        <div class="text-white col-12 col-md-8 lashDetails">
          <p>
            This is something interesting describing the type of lash. 
            Depending on the lash the description can change.
            This will also include information about the visit. 
            It could include warnings or requirements for customers.
            Customers can read the description to make sure its the right lash. 
            We hope we can settle this info with Savannah later.
          </p>
          
          <div>
              Price: 
                <span v-if="selectedSet === 'Choose...'"> Select Set Type</span> 
                <span v-else-if="selectedSet === 'Fill'">${{this.selectedLash.fillPrice}}</span>
                <span v-else-if="selectedSet === 'Full'">${{this.selectedLash.fullPrice}}</span>
                <span v-else></span>
          </div>
          <div >
              Refill frequency: Every 2 weeks
          </div>
          <div class="mb-3 input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">Set</label>
            </div>
            <select v-model="selectedSet" class="custom-select" id="inputGroupSelect01" >
              <option selected>Choose...</option>
              <option value="Fill">Fill</option>
              <option value="Full">Full Set</option>
            </select>
          </div>
          <div class="mb-3 input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect02">Time</label>
            </div>
            <select v-model="selectedTime" class="custom-select" id="inputGroupSelect02" >
              <option selected>Choose Time...</option>
              <option value="12">12:00PM</option>
              <option value="15">3:00PM</option>
              <option value="17">5:00PM</option>
            </select>
          </div>
          <button v-on:click="schedule" class="btn btn-primary bt-lg" v-bind:disabled="selectedSet === 'Choose...' || selectedTime === 'Choose Time...'">Schedule</button>
        </div>
          <!-- details -->
        </div>
    </div>
    <Modal :showing="showModal" @close="showModal = false">
      <h1>Select a Lash Extension</h1>
      <div class="header">
        <h1>Classic</h1>
      </div>
      <PortfolioList :items="classicItems" :onSelect="closeModal"/>
      <div class="header">
        <h1>Hybrid</h1>
      </div>    
      <PortfolioList :items="hybridItems" :onSelect="closeModal"/>
      <div class="header">
        <h1>Volume</h1>
      </div>
      <PortfolioList :items="volumeItems" :onSelect="closeModal"/>
    </Modal>
    <Modal :showing="showReceipt" @close="showReceipt = false">
      <h1>Thank you for your purchase!</h1>
    </Modal>
  </div>
</template>

<script>
import Modal from '../components/Modal.vue';
import PortfolioList from '../components/PortfolioList';
import axios from 'axios';

export default {
  name: 'Scheduling',
  components: {
    Modal,
    PortfolioList
  },
  data() {
    return {
      showModal: false,
      selectedSet: 'Choose...',
      selectedTime: 'Choose Time...',
      showReceipt: false
    }
  },
  computed: {
    classicItems() {
      return this.$root.$data.lashes.classic
    },
    hybridItems() {
      return this.$root.$data.lashes.hybrid
    },
    volumeItems() {
      return this.$root.$data.lashes.hybrid
    },
    selectedLash() {
      return this.$root.$data.selectedLash
    },
    isScheduleDisabled() {
      return this.selectedSet !== "Choose..." || this.selectedTime !== "Choose Time..."
    }
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    schedule() {
      this.showReceipt = true;
      let price = 0;
      if(this.selectedSet === 'Fill') {
        price = this.selectedLash.fillPrice
      }
      else {
        price = this.selectedLash.fullPrice
      }
      var date = new Date();
      date.setDate(new Date().getDate()+1);
      date.setHours(this.selectedTime, 0, 0);
      var url = "http://localhost:3000/appointments";
      axios.post(url, {
              lasdId: this.selectedLash.id,
              lashName: this.selectedLash.name,
              lashType: this.selectedLash.type,
              lashSet: this.selectedSet,
              price: price,
              date: date.toString(), 
          })
          .then(response => {
              console.log("Post Response "); 
              console.log(response.data);
          })
          .catch(e => {
              console.log(e);
          });
            
      this.selectedSet = 'Choose...';
      this.selectedTime = 'Choose Time...';
    }
  }
}
</script>

<style scoped>
.vh-75 {
  height: 75vh;
}

.btn-xlg {
  font-size: 25px;
  font-weight: bold;
  padding: 20px;
}
</style>