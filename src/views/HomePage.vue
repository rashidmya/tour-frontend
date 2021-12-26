<template>
  <q-page id="body">
    <q-scroll-observer @scroll="scrollPosition" />
    <Banner />
    <Winner :class="position < positions[0] ? 'hide' : 'show'" />
    <News :news="news" :class="position < positions[1] ? 'hide' : 'show'" />
    <Jersey :class="position < positions[2] ? 'hide' : 'show'" />
    <Stages :class="position < positions[3] ? 'hide' : 'show'"/>
    <Sponsors :class="position < positions[4] ? 'hide' : 'show'"/>
    <Footer/>

  </q-page>
</template>

<script>
import Stages from "../components/home/Stages.vue";
import News from "../components/home/News.vue";
import Banner from "../components/home/Banner.vue";
import Winner from "../components/home/Winner.vue";
import Jersey from "../components/home/Jersey.vue";
import Footer from "../layout/Footer.vue";
import Sponsors from "../components/home/Sponsors.vue";
import { onMounted, ref, computed } from "vue";
import {useStore} from 'vuex';

export default {
  components: {
    Banner,
    Stages,
    News,
    Winner,
    Jersey,
    Footer,
    Sponsors
  },
  setup() {
    const store = useStore();
    const position = ref(null);
    const positions = [100, 325, 1157, 2200, 3000];
    
    store.dispatch('loadNews')

const news = computed(()=> store.getters.news)
    function scrollPosition(e) {
      // console.log(position.value); // get position of scroll
      position.value = e.position.top;
    }

    onMounted(() => {});
    return {
      position,
      scrollPosition,
      positions,
      news
    };
  },
};
</script>

<style scoped>
.hide {
  transition: all 0.1s ease-out;
  transform: translateY(100px);
  opacity: 0;
}

.show {
  transition: all 0.3s ease-in;
  transform: translateY(0px);
  opacity: 1;
}
</style>