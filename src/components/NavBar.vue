<template>
    <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark position-fixed fixed-top">
        <a class="navbar-brand" href="/">SJB</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <router-link to="/">Home</router-link>
                <router-link to="/portfolio">Portfolio</router-link>
                <router-link to="/scheduling">Scheduling/Pricing</router-link>
                <router-link to="/about">About</router-link>
            </div>
        </div>
    </nav>
</template>


<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
#nav {
  padding: 0 30px;
}

#nav a {
  font-weight: bold;
  color: #dddd;
  padding: 15px 10px;
  text-decoration: none;
}

#nav a:hover {
    color: #cccc;
    background: #343434;
}

#nav a.router-link-exact-active {
  color: var(--primary);
}
</style>