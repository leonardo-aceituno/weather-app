<script setup>
import Weather from "./views/Weather.vue";

import { onMounted } from "vue";
import { useWeather } from "./stores/weather.js";

const weatherStore = useWeather();

onMounted(() => weatherStore.getCurrentLocation());
</script>

<template>
  <Weather />
</template>

<style scoped>
.left-panel {
  background: #1e213a;
  min-height: 100vh;
}
.right-panel {
  background: #100e1d;
}
</style>
