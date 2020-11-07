<template>
<div class="py-5 mt-5 text-center text-white" style="background: url(./images/repeatinglashesinverse.jpg);">
    <div class="header">
      <h1>Classic</h1>
    </div>
    <PortfolioList :items="classicItems" />
    <div class="header">
      <h1>Hybrid</h1>
    </div>    
    <PortfolioList :items="hybridItems" />
    <div class="header">
      <h1>Volume</h1>
    </div>
    <PortfolioList :items="volumeItems" />
  </div>
</template>

<script>
import PortfolioList from "../components/PortfolioList.vue"

export default {
  name: 'Portfolio',
  components: {
    PortfolioList
  },
  data() {
    return {
      searchText: '',
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
    }
  }
}
</script>

<style scoped>
.header { 
  line-height: 1.4;
  padding: 20px
}

h1 {
  color: #ffffff;
  background-color: var(--primary);
  display: inline;
  padding: 0.5rem 1rem;
  --webkit-box-decoration: clone;
  box-decoration-break: clone;
}
</style>
