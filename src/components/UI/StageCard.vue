<template>
  <q-card square flat class="my-card">
    <q-img :src="img">
      <div class="absolute-bottom">
        <div class="text-h6 stage-name"><slot name="title"></slot></div>
        <div class="text-subtitle"><slot name="subtitle"></slot></div>
      </div>
    </q-img>

    <q-card-section>
      <slot></slot>

      <q-card-actions class="buttons">
        <a class="hvr-animate" :to="url" flat>
          <slot name="button-label"></slot>
        </a>
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: ["img", "url"],
};
</script>

<style lang="scss" scoped>
@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}

.q-card:hover {
  position: relative;
  z-index: 101;
  border-radius: 10px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #399953;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#d44545, #d44545),
      linear-gradient(#23a729, #23a729),
      linear-gradient(#222222, rgb(22, 22, 22)),
      linear-gradient(#c6b784, #c6b784);
    animation: rotate 4s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: white;
    border-radius: 5px;
  }
}
</style>

<style scoped>
.stage-name {
  font-weight: 700;
}

.my-card {
  transition: all 0.1s ease-in;
  z-index: 2;
  width: 100%;
}

.my-card:hover {
  transform: translateY(-10px);
  transition: all 0.1s ease-out;
  z-index: 3;
  padding: 6px;
}

.q-img {
  height: 350px;
}

.buttons {
	justify-content: center;
margin: auto;
}

a {
  text-decoration: none;
  background-color: #fff;
  margin-top: 1vw;
  position: relative;
  display: inline-block;
  font-size: 15px;
  line-height: 3px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 15px 15px;
  border: 2px solid #c6b784;
  color: #c6b784;
  background-color: #fff;
  border-color: #c6b784;
}

.hvr-animate {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(255, 255, 255, 0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}

.hvr-animate:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #c6b784;
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-animate:hover,
.hvr-animate:focus,
.hvr-animate:active {
  color: white;
}
.hvr-animate:hover:before,
.hvr-animate:focus:before,
.hvr-animate:active:before {
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
}
</style>