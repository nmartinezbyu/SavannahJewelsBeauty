<template>
  <div class="portfolioContainer">
    <div class="portfolioItem" v-for="item in items" :key="item._id" v-on:click="selectLash(item)">
      <div class="title">{{item.name}}</div>
      <img :src="item.image"/>
      <div class="overlay">
        <div class="text">View Details</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioList',
  props: {
    items: Array,
    onSelect: Function
  },
  methods: {
    selectLash(lash) {
      this.$root.$data.selectedLash = lash
      if (this.onSelect) {
        this.onSelect(lash);
      }
      else {
        this.$router.push({ path: 'Scheduling' })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.portfolioContainer {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 35px;
    margin-bottom: 1rem;
}

.portfolioItem {
    width: 80%;
    height: 80%;
    object-fit: fill;
    box-shadow: 10px 5px 9px 5px rgba(255, 255, 255, 0.2);
    transition: 0.3s;
    margin: 25px auto auto;
    background: #fff;
    cursor: pointer;
    position: relative;
}

.portfolioItem > img {
    width: 100%;
    height: 100%;
}

.portfolioItem > .title {
    font-family: Brush Script MT, Brush Script Std, cursive;
    font-size: 30px;
    margin-top: 10px;
    color: black;
    text-shadow: 2px 2px 6px black
}

.portfolioItem:hover {
    box-shadow: 20px 10px 18px 10px rgba(255, 255, 255, 0.2);
}

.overlay {
  position: absolute;
  top: 55px;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #000000;
}

.portfolioItem:hover .overlay {
  opacity: .6;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { 
  
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { 
  .portfolioContainer {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
  .portfolioContainer {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 
  
}

</style>
