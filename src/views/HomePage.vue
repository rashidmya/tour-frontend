<template>
  <q-page id="body">
    <q-scroll-observer @scroll="scrollPosition" />
    <Banner />
    <Winner :class="position < positions[0] ? 'hide' : 'show'" />
    <News :class="position < positions[1] ? 'hide' : 'show'" />
    <Jersey :class="position < positions[2] ? 'hide' : 'show'" />
    <Stages :class="position < positions[3] ? 'hide' : 'show'"/>
    <Footer/>
  </q-page>
</template>

<script>
import Stages from "../components/home/Stages.vue";
import News from "../components/home/News.vue";
import Banner from "../components/home/Banner.vue";
import Winner from "../components/home/Winner.vue";
import Jersey from "../components/home/Jersey.vue";
import Footer from "../components/home/Footer.vue";
import { onMounted, ref } from "vue";

export default {
  components: {
    Banner,
    Stages,
    News,
    Winner,
    Jersey,
    Footer
  },
  setup() {
    const position = ref(null);
    const positions = [100, 325, 1157, 2100];

    function scrollPosition(e) {
      // console.log(position.value); // get position of scroll
      position.value = e.position.top;
    }
    onMounted(() => {});
    return {
      position,
      scrollPosition,
      positions,
    };
  },
};
</script>

<style scoped>
.hide {
  transition: all 0.1s ease-out;
  transform: translateY(250px);
  opacity: 0;
}

.show {
  transition: all 0.4s ease-in;
  transform: translateY(0px);
  opacity: 1;
}
</style>