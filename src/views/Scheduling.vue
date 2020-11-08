
<template>
  <div class="mt-5" style="background: url(/images/repeatinglashesinverse.jpg); padding: 30px; ">
    <div v-if="!selectedLash.name"  class="vh-75 d-flex align-items-center justify-content-center">
      <button class="btn btn-primary btn-xlg"  @click="showModal = true"> Select Lash Type </button>
    </div>
    <div v-else class="container">
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="card w-100">
            <img class="w-100" :src="'/images/' + selectedLash.image" alt="lash" />
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
                <span v-else-if="selectedSet === 'Fill'">${{this.selectedLash.fill_price}}</span>
                <span v-else-if="selectedSet === 'Full'">${{this.selectedLash.full_price}}</span>
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
          <button v-on:click="schedule" class="btn btn-primary bt-lg" v-bind:disabled="selectedSet === 'Choose...'">Schedule</button>
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
      return this.selectedSet !== "Choose..."
    }
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    schedule() {
      this.showReceipt = true;
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