<template>
  <div class="min-h-screen admin d-flex align-items-center justify-content-center">
    <div v-if="this.$root.$data.authToken.length > 0">
      <h1>Admin</h1>
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
export default {
  name: 'Admin',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    isAuthenticated() {
      return this.$root.$data.authToken.length > 0;
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      if (this.username === 'Savannah' && this.password === "Beauty") {
        this.$root.$data.authToken = "authenticated";
      }
      else {
        return;
      }
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

</style>