<template>
  <footer>
    <div class="container justify-content-between">
      <div class="row main">
        <div class="wrapper">
          <div class="about">
            <p>© Sharjah Tour 2021</p>
          </div>

          <div class="socials">
            <q-icon name="fab fa-twitter" tag="a" href="#" class="icon" />
            <q-icon name="fab fa-facebook" tag="a" href="#" class="icon" />
            <q-icon name="fab fa-instagram" tag="a" href="#" class="icon" />
          </div>
        </div>
      </div>
      <div class="row sub"></div>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  height: 60px;
}

.main {
  background-color: #000000;
  color: white;
  height: 50px;
}

.sub {
  background-color: #18344a;
  height: 3px;
}

.wrapper {
  display: flex;
  margin: 15px;
  justify-content: space-between;
  width: 100%;
}

.socials {
  margin-left: auto;
}

.icon {
  margin-left: 11px;
  color: #fff;
  font-size: 1.4em;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.icon:hover {
  color: #466c8a;
  transition: all 0.3s ease-in-out;
}
</style>