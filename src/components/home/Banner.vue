<template>
  <div id="banner" :style="'background-image: url(http://localhost:1337' + banner.url + ')'">
    <div class="row">
      <div class="column">
        <div class="container">
          <div class="hc">{{ banner.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ["banner"],
  setup() {
    return {};
  },
};
</script>

<style scoped>
#banner {
  height: 95vh;
  display: block;
  margin: 0;
  overflow-x: hidden;
  background-color: white;
  background-position: top;
  background-repeat: no-repeat;
  background-size: 70%;
  background-position-y: calc(66vh - 30vw);
  overflow: hidden;
}

.hc {
  margin: 0;
  color: rgb(0, 0, 0);
  text-transform: uppercase;
  text-align: center;
  font-size: 3vw;
  font-weight: 700;
  padding: 0 12vw;
  text-shadow: 1px 1px 20px rgb(0 0 0 / 20%);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  top: 1%;
  line-height: 1em;
  z-index: 1;
}

.container {
  margin-top: 18vw;
  height: calc(100vh - 18vw);
}
</style>