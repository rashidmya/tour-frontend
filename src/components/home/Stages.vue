<template>
  <section-two>
    <template #title> <div class="header">STAGES</div> </template>
    <template #default>
      <Carousel :settings="settings" :breakpoints="breakpoints">
        <Slide v-for="slide in 6" :key="slide">
          <q-card bordered square flat class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom">
                <div class="text-h6 stage-name">{{ slide }} ADNOC STAGE</div>
                <div class="text-subtitle2">STAGE 1</div>
              </div>
            </q-img>

            <div class="details">
              <q-list bordered separator>
                <q-item v-ripple>
                  <q-item-section>Mon, Feb 21st 2021</q-item-section>
                </q-item>

                <q-item v-ripple>
                  <q-item-section>
                    <q-item-label>130</q-item-label>
                    <q-item-label class="highlight" caption>KM</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item v-ripple>
                  <q-item-section>
                    <q-item-label class="highlight" overline>FROM</q-item-label>
                    <q-item-label>Al Dhafra Castle</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item v-ripple>
                  <q-item-section>
                    <q-item-label class="highlight" overline>TO</q-item-label>
                    <q-item-label>Al Hudayriyat Island</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>

              <q-card-actions>
                <q-btn flat>See Details</q-btn>
              </q-card-actions>
            </div>
          </q-card>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </template>
  </section-two>
</template>

<script>
import SectionTwo from "../UI/SectionTwo.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  components: {
    SectionTwo,
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 6,
        snapAlign: "start",
      },
    },
  }),
};
</script>

<style scoped>
.header {
  color: #c6b784;
}

.carousel {
  width: 100%;
  margin: 1vw;
  overflow: hidden;
}

.carousel__track {
  padding: 10px 0;
}

li {
  margin: 6px 0;
}

.q-card {
  width: 100%;
  height: 100%;
  margin: 0;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
}

.q-img {
  height: 300px;
}

.details {
  border-left: 1px solid #c6b784;
  border-right: 1px solid #c6b784;
  -webkit-transition: all 0.35s ease-in-out 0s;
  -moz-transition: all 0.35s ease-in-out 0s;
  -o-transition: all 0.35s ease-in-out 0s;
  transition: all 0.35s ease-in-out 0s;
}

.stage-name {
  font-weight: 700;
}

.highlight {
  color: #c6b784;
  font-size: 0.8vw;
  line-height: 1;
  font-weight: 500;
  -webkit-transition: all 0.35s ease-in-out 0s;
  -moz-transition: all 0.35s ease-in-out 0s;
  -o-transition: all 0.35s ease-in-out 0s;
  transition: all 0.35s ease-in-out 0s;
}

.my-card {
  color: black;
  transform: translateY(0px) scale(1);
  transition: all 0.3s ease-in;
  z-index: 2;
}

.my-card:hover {
  color: white;
  transform: translateY(-35px) scale(1.1);
  transition: all 0.3s ease-out;
  z-index: 3;
}

.details:hover {
  color: white;
    background-color: #18344a;
  transition: all 0.3s ease-out;
}

.details {
  color: rgb(0, 0, 0);
  transition: all 0.3s ease-in;
}
</style>