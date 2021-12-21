<template>
  <q-header reveal>
    <q-toolbar inset>
      <q-toolbar-title> <strong>LOGO</strong> GG </q-toolbar-title>

      <q-tabs align="right" class="nav-tabs" mobile-arrows shrink stretch>
        <q-route-tab content-class="nav-item" :to="{ name: 'home' }" label="Home" />
        <q-route-tab to="/" label="Stages" />
        <q-route-tab  to="/" label="Standings" />
        <q-route-tab to="/" label="Teams" />
        <q-route-tab to="/" label="Sponsors" />
        <q-route-tab to="/" label="Media" />
        <q-route-tab to="/" label="Past Events" />
      </q-tabs>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
.q-header {
  background-color: #000000;
}

.q-tab--active {
  background: #ffffff;
  color: #18344a;
}

.q-tabs {
  width: 80%;
}
</style>