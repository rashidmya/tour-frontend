<template>
  <div class="section row">
    <div class="title-box col-lg-3 col-md-4 col-sm-12 col-xs-12">
      <h1><slot name="title"></slot></h1>
    </div>

    <div class="container col-lg-9 col-md-8 col-sm-12 col-sm-12">
      <div class="wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["link"],
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;

}

.wrapper {
  transform: translate3d(0px, 0px, 0px);
  align-items: flex-end;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 3;
  display: flex;
  box-sizing: content-box;
}

.section {
  position: relative;
  display: block;
  margin-bottom: 6vw;
}

.title-box {
  display: flex;
  position: relative;
  width: 100%;
}

h1 {
  text-transform: uppercase;
  font-size: 3.2vw;
  line-height: 4.2vw;
  font-weight: 800;
  padding-top: 1vw;
  padding-left: 7.5vw;
  padding-right: 0.4vw;
  width: auto;
  max-width: 30vw;
  color: #e73743;
  border-bottom: 2px solid #000;
}
</style>