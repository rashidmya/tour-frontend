<template>
  <div class="container">
    <div class="row wrapper">
      <div class="background">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 519">
          <g id="Livello_2" data-name="Livello 2">
            <g id="Livello_1-2" data-name="Livello 1">
              <polyline
                points="1280 334 1280 0 0 0 0 444 839.95 444 1203 353"
                class="dark"
              ></polyline>
              <polygon
                points="1280 519 1280 333 917 424.48 1280 519"
                style="fill: #c6b784"
              ></polygon>
            </g>
          </g>
        </svg>
      </div>
      <div class="content">
        <div class="row">
          <div class="col-12 jersey-box">
            <div class="text">
              <h5>JERSEY</h5>
              <h2>HELLO WORLD</h2>
            </div>
          </div>
        </div>
        <Carousel :itemsToShow="3.99" :wrapAround="true">
          <Slide v-for="slide in 5" :key="slide">
            <div class="carousel__item">
              <img src="@/assets/jersey.png" alt="" />
            </div>
          </Slide>

             <template #addons>
      <Pagination />
    </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>


<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Pagination  } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination
  },
});
</script>

<style scoped>
.wrapper {
  margin: 4vw 0;
}

.background {
  width: 100%;
}

svg {
  filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.3));
  z-index: 1;
}

.background #Livello_1-2 > polyline.dark {
  fill: #080d15;
}

.content {
  width: 100%;
  position: absolute;
  top: 12vw;
  color: white;
}

img {
  width: 10vw;
  overflow: auto;
  z-index: 2;
}

.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 0.5;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.3);
  opacity: 1;
}

.carousel__pagination {
  padding: 0;
}

li {
  width: 100%;
  height: 16vw;
  z-index: 5;
}

.jersey-box {
  position: absolute;
  top: -10vw;
}

.text {
  justify-content: center;
  margin: auto;
  width: 80vw;
}

h2 {
  text-align: center;
  font-weight: 600;
  margin: 0;
}

h5 {
  text-align: center;
   margin: 0
}
</style>