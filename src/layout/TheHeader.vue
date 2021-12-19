<template>
  <q-header reveal class="bg-none text-white">
    <div class="container flex q-m-0">
      <img class="logo" src="@/assets/TLogoW.png" alt="tawaf" />
      <q-slide-transition>
        <q-tabs indicator-color="white" align="right" class="nav-ul">
          <q-route-tab class="nav-item" to="/">Home</q-route-tab>
          <q-route-tab class="nav-item" to="/">About</q-route-tab>
          <q-route-tab class="nav-item" to="/">Stages</q-route-tab>
          <q-route-tab class="nav-item" to="/">Teams</q-route-tab>
          <q-route-tab class="nav-item" to="/">Results</q-route-tab>
          <q-route-tab class="nav-item" to="/">Media Center</q-route-tab>
          <q-route-tab class="nav-item" to="/">Contact Us</q-route-tab>
        </q-tabs>
      </q-slide-transition>
    </div>
  </q-header>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.q-header {
  font: initial;
  background-color: #000000;
  border-bottom: 0px solid;
  border-color: white;
}

.logo {
  width: 60px;
  margin: 5px 0 5px 80px;
}

.container {
  justify-content: space-between;
  width: 100%;
}

.q-tab--active {
  background-color: #ffffff;
  color: #000000;
  transition: all 0.3s ease-in;
}

.q-router-tab {
display: block;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1vw;
    padding: 2.2vw 1.2vw;
    -webkit-transition: all .35s ease-in-out 0s;
    -moz-transition: all .35s ease-in-out 0s;
    -o-transition: all .35s ease-in-out 0s;
    transition: all .35s ease-in-out 0s;
}

.q-tab--hover,
.q-route-tab--hover,
.nav-item:hover {
  opacity: 1;
  text-decoration: none;
  background-color: #ffffff;
  color: #000000;
  transition: all 0.3s ease-in;
}

.q-tabs {
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.35s ease-in-out 0s;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  z-index: 1;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

.nav-item {
  border-left: 1px solid #ffffff;
}

a {
  text-decoration: none;
}

.bar-text {
  font-size: 10px;
}
</style>