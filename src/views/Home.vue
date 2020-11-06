<template>
  <div class="home">
    <div class="mt-5">
      <div id="lashModelCarousel" class="carousel slide position-relative" data-ride="carousel" data-interval="4000">
        <div class="position-absolute absolute-center w-100" style="z-index: 10;">
          <h1 id="homeCarouselHeader" class="text-white text-uppercase">Savannah Jewels Beauty</h1>
          <button class="btn btn-primary btn-lg text-uppercase">Shop Lashes</button>
        </div>
        <div class="carousel-inner carousel-responsive-height">
          <div class="carousel-item active">
            <img src="images/slideshow/slideshow1.jpg" class="d-block w-100" alt="1">
          </div>
          <div class="carousel-item">
            <img src="images/slideshow/slideshow3.jpg" class="d-block w-100" alt="3">
          </div>
          <div class="carousel-item">
            <img src="images/slideshow/slideshow4.jpg" class="d-block w-100" alt="4">
          </div>
          <div class="carousel-item">
            <img src="images/slideshow/slideshow5.jpg" class="d-block w-100" alt="5">
          </div>
        </div>
      </div>

      <div class="mb-0 jumbotron jumbotron-fluid">
        <div class="container py-4">
          <h1 class="display-4">THE WOW EFFECT. ALL DAY LONG.</h1>
          <p class="lead">
            Semi-permanent lashes give longer, thicker and natural looking lashes that can last as long as your lash cycle. 
            Virtually weightless and applied to your own lashes one by one. Darker than your own lashes there is simply no need to wear mascara. 
            Shower, swim, sleep or cry they won’t fall out! Offering 3 different types of semi-permanent lashes. 
            Silk Lashes, Mink Lashes and Volume Lashes
          <p>        
          <div class="text-secondary">Learn More</div>
        </div>
      </div>
    
      <div class="parallax parallax-repeating" style="background-image: url(images/repeatinglashes.jpg);">
        <div class="position-relative w-100 h-100">
          
        
          
        </div>
      </div>
    
      <div class="parallax" style="background-color: black;">
        <div class="text-center d-flex flex-column justify-content-center">
          <h1 class="text-white display-4">Glamorous Lashes</h1>
          <button class="m-auto btn btn-outline-primary btn-lg">Shop Now</button>
          <div class="portfolioContainer" style="grid-template-rows: repeat(1, 30vw);">
            <img class="portfolioItem"  src="images/lashOne.jpg"/>
            <img class="portfolioItem"  src="images/lashTwo.jpg"/>
            <img class="portfolioItem"  src="images/lashThree.jpg"/>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>
