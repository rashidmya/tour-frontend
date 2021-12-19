<template>
  <q-card square class="card col-lg-3 col-md-4 col-sm-9 col-xs-10 q-py-2">
    <q-card-section class="img-box flex flex-center">
      <slot name="image"></slot>
    </q-card-section>
    <q-card-section horizontal>
      <q-card-section class="q-pt-xs news-description">
        <div class="date"><slot name="date"></slot></div>
        <div class="text-h5 q-mt-sm q-mb-xs title">
            <slot></slot>
        </div>
      </q-card-section>
    </q-card-section>

    <q-card-actions>
      <a :href="link" class="link">
          <slot name="link-label"></slot>
      </a>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
    props: ['link']
}
</script>

<style scoped>
.link {
  text-decoration: none;
}
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

.title {
  display: block;
  color: #000;
  font-size: 1.4vw;
  line-height: 1.8vw;
  font-weight: 700;
  margin: 0;
  padding: 0 1vw;
}

.date {
  display: block;
  color: #000;
  padding: 0 1vw;
  padding-top: 2vw;
  padding-bottom: 1vw;
  text-transform: uppercase;
  font-size: 1vw;
  line-height: 1vw;
  font-weight: 700;
}

.link {
  position: absolute;
  bottom: 0;
  left: 0;
  display: inline-block;
  color: #000000;
  padding-bottom: 0.15vw;
  border-bottom: 0.1vw solid #000000;
  text-transform: uppercase;
  font-size: 0.9vw;
  line-height: 0.9vw;
  font-weight: 600;
  margin: 2vw;
}
</style>