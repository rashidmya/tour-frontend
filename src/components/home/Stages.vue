<template>
  <section-b>
    <template #title> <div class="header">STAGES</div> </template>
    <template #default>
      <Carousel :settings="settings" :breakpoints="breakpoints">
        <Slide class="my-slides" v-for="slide in 6" :key="slide">
          <stage-card img="https://cdn.quasar.dev/img/parallax2.jpg">
            
            <template #title>Adnoc Stage</template>
            <template #subtitle>STAGE 1</template>
            <template #default>
              <q-list separator>
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
            </template>
            <template #button-label>See Details</template>
          </stage-card>
        </Slide>
        <template #addons>
          <Navigation v-if="1 < 0" />
        </template>
      </Carousel>
    </template>
  </section-b>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import StageCard from '../UI/StageCard.vue';

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
    StageCard,
  },
  setup() {
    const settings = {
      itemsToShow: 1,
      snapAlign: "center",
    };
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    const breakpoints = {
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
    };

    return {
      settings,
      breakpoints,
    };
  },
};
</script>

<style scoped>
.header {
  color: #c6b784;
}

.carousel {
  width: 100%;
  padding: 0.10vw;
  overflow: hidden;
}
.my-slides {
  padding: 2vw 0;
}

.q-card {
  border: 1px solid #18344a;
}

.highlight {
  color: #c6b784;
  font-size: 0.8vw;
  line-height: 1;
  font-weight: 500;
}

</style>