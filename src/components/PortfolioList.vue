<template>
  <div class="portfolioContainer">
    <div class="portfolioItem" v-for="item in items" :key="item.id">
      <div class="title">{{item.name}}</div>
      <img :src="'/images/' + item.image"/>
      <div class="flex flex-row justify-content-around">
        <div>
          <button class="btn btn-primary">Full Set: ${{item.full_price}}.00</button>
        </div>
        <div>
          <button class="btn btn-secondary">Fill Set: ${{item.fill_price}}.00</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioList',
  props: {
    items: Array
  },
  methods: {
    addToCart(item) {
      // this.$root.$data.cart.push(item)
      console.log(item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.portfolioContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 35px;

}

.portfolioItem {
    width: 80%;
    height: 80%;
    object-fit: fill;
    box-shadow: 10px 5px 9px 5px rgba(255, 255, 255, 0.2);
    transition: 0.3s;
    margin: 25px auto auto;
    background: #fff;
}

.portfolioItem > img {
    width: 100%;
    height: 100%;
}

.portfolioItem .title {
    text-align: center;
    font-family: Brush Script MT, Brush Script Std, cursive;
    font-size: 30px;
    margin-top: 10px;
    color: black;
    text-shadow: 2px 2px 6px black
}

.portfolioItem:hover {
    box-shadow: 20px 10px 18px 10px rgba(255, 255, 255, 0.2);
}

</style>
