<template>
  <div id="sponsors">
    <div class="title">
      <div class="line"></div>
      <h1><slot name="title"></slot></h1>
    </div>
    <div class="wrapper">
        <slot></slot>
    </div>
  </div>
</template>

<style scoped>
#sponsors {
  text-align: center;
  position: relative;
  display: block;
}
.line {
  width: 6vw;
  border-top: 2px solid black;
}
.title {
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-top: 1vw;
  padding-bottom: 1vw;
}

h1 {
  text-transform: uppercase;
  font-size: 3.2vw;
  line-height: 3.2vw;
  font-weight: 800;
  margin-left: 1.5vw;
  padding: 0;
  color: #e73743;
}

.wrapper {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 7.5vw;
}
</style>