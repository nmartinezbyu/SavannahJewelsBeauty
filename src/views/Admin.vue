<template>
  <div class="min-h-screen admin d-flex align-items-center justify-content-center">
    <div v-if="this.$root.$data.authToken.length > 0" class="w-100 container">
      <h1>Admin</h1>
      <CategoryItems category="Classic" :items="classicItems" />
      <CategoryItems category="Hybrid" :items="hybridItems" />
      <CategoryItems category="Volume" :items="volumeItems" />
      <h2 style="marginTop: 20px">Appointments</h2>
      <div class="d-flex flex-row align-items-center justify-content-around hover:bg-light-gray" v-for="item in appointments" :key="item.id">
        <div>{{item.lashName}}</div>
        <div>{{item.lashType}}</div>
        <div>${{item.price}}</div>
        <div>{{item.date}}</div>
      </div>
    </div>
    <div v-else>
      <div class="p-4 bg-white rounded shadow-lg">
        <h1>Admin Portal</h1>
        <form v-on:submit="onSubmit">
          <div class="form-group">
            <input v-model="username" name="username" placeholder="Username" class="form-control" required/>
            <div class="invalid-feedback">
              Please enter a username.
            </div>
          </div>
          <div class="form-group">
            <input v-model="password" name="password" type="password" placeholder="password" class="form-control" required/>
            <div class="invalid-feedback">
              Please enter a password.
            </div>
          </div>
          <button type="submit" class="btn btn-primary w-100">
            LOGIN 
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryItems from '../components/CategoryItems.vue';
import axios from 'axios';
export default {
  name: 'Admin',
  components: {
    CategoryItems
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    isAuthenticated() {
      return this.$root.$data.authToken.length > 0;
    },
    classicItems() {
      return this.$root.$data.lashes.filter(x => x.type == "Classic")
    },
    hybridItems() {
      return this.$root.$data.lashes.filter(x => x.type == "Hybrid")
    },
    volumeItems() {
      return this.$root.$data.lashes.filter(x => x.type == "Volume")
    },
    appointments() {
      return this.$root.$data.appointments
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      var url = "http://localhost:3000/login";
      axios.post(url, {
              username: this.username,
              password: this.password
          })
          .then(response => {
              console.log("Post Response "); 
              console.log(response.data);
              if(response.data.authenticated) {
                this.$root.$data.authToken = "authenticated";
              }
          })
          .catch(e => {
              console.log(e);
          });
    }
  }
}
</script>

<style>
.min-h-screen {
  min-height: 100vh;
}
.max-w-sm {
  max-width: 24rem;
}
.bg-white {
  background-color: white;
}
.text-black {
  color: black;
}
.form-control:focus {
  border-color: var(--secondary);
  box-shadow: 0 0 0 0.1rem var(--secondary);
}
.hover\:bg-light-gray:hover {
  background-color: lightgray !important;
}

</style>