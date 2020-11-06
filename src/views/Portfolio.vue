<template>
<div class="mt-5 text-center text-white" style="background: url(./images/repeatinglashesinverse.jpg); padding: 30px;">
    <h1>Portfolio</h1>
    <h2>Classic</h2>
    <PortfolioList :items="classicItems" />
    <h2>Hybrid</h2>
    <PortfolioList :items="hybridItems" />
    <h2>Volume</h2>
    <PortfolioList :items="volumeItems" />
  </div>
</template>

<script>
import PortfolioList from "../components/PortfolioList.vue"
import Mock from "../assets/mock-data";

export default {
  name: 'Portfolio',
  components: {
    PortfolioList
  },
  data() {
    return {
      searchText: '',
      portfolio: Mock
    }
  },
  computed: {
    classicItems() {
      return this.portfolio.classic.filter(item => item.name.toLowerCase().includes(this.searchText))
    },
    hybridItems() {
      return this.portfolio.hybrid.filter(item => item.name.toLowerCase().includes(this.searchText))
    },
    volumeItems() {
      return this.portfolio.hybrid.filter(item => item.name.toLowerCase().includes(this.searchText))
    }
  }
}
</script>
