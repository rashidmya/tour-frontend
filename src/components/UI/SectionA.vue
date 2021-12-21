<template>
  <div class="section row">
    <div class="title-box col-lg-3 col-md-4 col-sm-12 col-xs-12">
      <div class="title-container">
        <div class="line"></div>
        <h1>
          <slot name="title"></slot>
        </h1>
      </div>
      <div class="description-container">
        <p>
          <slot></slot>
        </p>
        <a :href="link" class="hvr-animate"><slot name="link-label"></slot></a>
      </div>
    </div>

    <div class="content-box col-lg-9 col-md-8 col-sm-12 col-sm-12">
      <div class="content-container row flex-center">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['link']
}
</script>

<style scoped>
.title-container .line {
  width: 6vw;
  border-top: 2px solid black;
}

.title-container {
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-top: 4vw;
  padding-bottom: 2vw;
}

.description-container {
  margin-left: 7.5vw;
  margin-top: 4vw;
}

.description-container p {
  color: #878383;
  font-weight: 400;
  font-size: 1.2vw;
  line-height: 1;
  padding-right: 4vw;
}

.description-container a {
  color: #222121;
  text-decoration: none;
  background-color: #fff;
  border-color: #009e4e;
  margin-top: 4vw;
  position: relative;
  display: inline-block;
  font-size: 0.9vw;
  line-height: 0.8vw;
  font-weight: 700;
  text-transform: uppercase;
  padding: 1.2vw 2.8vw;
  border: 2px solid #222121;
  color: #222121;
  background-color: #fff;
  border-color: #000000;
}


.section {
  display: flex;
  position: relative;
}

.content-box, .title-box  {
  display: block;
}


.content-container {
  padding: 6vw 0;
  width: 100%;
  display: flex;
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

.description-container a {
  text-decoration: none;
  background-color: #fff;
  margin-top: 4vw;
  position: relative;
  display: inline-block;
  font-size: 0.9vw;
  line-height: 0.8vw;
  font-weight: 700;
  text-transform: uppercase;
  padding: 1.2vw 2.8vw;
  border: 2px solid #18344a;
  color: #18344a;
  background-color: #fff;
  border-color: #18344a;
}

.description-container .hvr-animate {
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

.description-container .hvr-animate:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #18344a;
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
.description-container .hvr-animate:hover,
.hvr-animate:focus,
.hvr-animate:active {
  color: white;
}
.description-container .hvr-animate:hover:before,
.hvr-animate:focus:before,
.hvr-animate:active:before {
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
}



</style>