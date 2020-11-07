
<template>
  <div class="mt-5" style="background: url(/images/repeatinglashesinverse.jpg); padding: 30px; ">
    <div v-if="!selectedLash.name"  class="vh-75 d-flex align-items-center justify-content-center">
      <button class="btn btn-primary btn-xlg"  @click="showModal = true"> Select Lash Type </button>
    </div>
    <div v-else class="container">
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="card w-100">
            <img class="w-100" src="/images/lashOne.jpg" alt="lash" />
            <div class="text-center text-black card-body font-brush display-4">
              {{selectedLash.name}}
            </div>
          </div>
        </div>
        <div class="text-white col-12 col-md-8 lashDetails">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aenean laoreet commodo quam, id fermentum augue fringilla ac. 
            Etiam nec augue laoreet, pharetra orci ut, hendrerit tellus. 
            Phasellus malesuada maximus elit sit amet convallis. 
            Aenean id justo at dui aliquet pretium. 
            Aenean aliquet purus lacus, id consectetur neque sagittis in.
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
      selectedSet: 'Choose...'
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
      this.$router.push({ path: 'Calendar' })
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