<template>
  <section-b>
    <template #title> <div class="header">STAGES</div> </template>
    <template #default>
      <Carousel :settings="settings" :breakpoints="breakpoints">
        <Slide class="my-slides" v-for="s,i in stages" :key="s.id">
          <stage-card :img="'http://localhost:1337' + s.attributes.image.data.attributes.url">
            <template #title>{{s.attributes.title}}</template>
            <template #subtitle>STAGE {{i+1}}</template>
            <template #default>
              <q-list separator>
                <q-item v-ripple>
                  <q-item-section>{{s.attributes.date}}</q-item-section>
                </q-item>

                <q-item v-ripple>
                  <q-item-section>
                    <q-item-label>{{s.attributes.km}}</q-item-label>
                    <q-item-label class="highlight" caption>KM</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item v-ripple>
                  <q-item-section>
                    <q-item-label class="highlight" overline>FROM</q-item-label>
                    <q-item-label>{{s.attributes.from}}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item v-ripple>
                  <q-item-section>
                    <q-item-label class="highlight" overline>TO</q-item-label>
                    <q-item-label>{{s.attributes.to}}</q-item-label>
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
  props: ['stages'],
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
  padding: 1vw 0;
    margin: 0 auto;
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