<template>
  <section-a link="#">
    <template #title>LATEST NEWS</template>
    <template #default
      >Don't miss a Sharjah Tour moment, with the latest news, videos, Stages
      and results.</template
    >
    <template #link-label> MORE NEWS </template>
    <template #content>
      <news-card v-for="n in news" :key="n.id" link="#">
        <template #image>
          <q-parallax :src="'http://localhost:1337' + n.attributes.image.data.attributes.url"/>
        </template>
        <template #date>{{n.attributes.createdAt}}</template>
        <template #default
          >
          {{n.attributes.title}}
          </template
        >

        <template #link-label>Read More</template>
      </news-card>
    </template>
  </section-a>
</template>

<script>
import NewsCard from "../UI/NewsCard.vue";

export default {
  props: ['news'],
  components: {
    NewsCard,
  },
  setup(){
  }
};
</script>

<style scoped>
.card {
  margin: 1vw;
}
.card-body {
  padding: 10px;
}

.q-parallax {
  max-height: 300px;
  margin-bottom: 1vw;
}
.img-box {
  max-height: 287px;
  margin: 0;
  padding: 0;
}

.news-description {
  position: relative;
  margin: 2vw 0 0 0;
  height: 18vw;
}

.title,
.date {
  color: rgb(0, 0, 0);
}

h1 {
  text-transform: uppercase;
  font-size: 3.2vw;
  line-height: 3.2vw;
  font-weight: 800;
  margin-left: 1.5vw;
  padding: 0;
  width: 0;
  height: 3.2vw;
  color: #18344a;
}

.hvr-animate {
  background: white;
}

.hvr-animate:before {
  background-color: #18344a;
}

.link {
  text-decoration: none;
}
</style>