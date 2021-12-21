<template>
  <section-c>
    <template #title>
      <span class="title">SPONSORS 2021</span>
    </template>
    <template #default>
      <a class="wrap-img"  v-for="n in 3" :key="n">
        <img class="sponsor" src="@/assets/etisalat.svg" alt="" />
      </a>
      <a class="wrap-img" v-for="n in 3" :key="n">
        <img class="sponsor" src="@/assets/adnoc.svg" alt="" />
      </a>
    </template>
  </section-c>
</template>

<style scoped>
.title {
  color: #18344a;
}

.wrap-img {
  padding: 1vw 0 4vw 0;
  width: 20%;
  color: initial;
  text-decoration: none;
}

.sponsor {
  max-height: 5vw;
  display: block;
  margin: 0 auto;
  padding: 0;
  cursor: pointer;
  -webkit-transition: all 0.35s ease-in-out 0s;
  -moz-transition: all 0.35s ease-in-out 0s;
  -o-transition: all 0.35s ease-in-out 0s;
  transition: all 0.35s ease-in-out 0s;
}

.sponsor:hover {
    transform: scale(1.2);

}
</style>