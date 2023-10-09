<script setup>
import LeftPanelLocation from "../components/LeftPanelLocation.vue";
import LeftPanelWeather from "../components/LeftPanelWeather.vue";
import RightPanel from "../components/RightPanel.vue";
import Loading from "../components/Loading.vue";

import { useWeather } from "../stores/weather";
import { useGeneral } from "../stores/general";
import { MODULE } from "../common/constants";

const weatherStore = useWeather();
const generalStore = useGeneral();
</script>

<template>
  <div v-if="generalStore.data.loading" style="background: #1e213a"><Loading /></div>
  <div v-else class="row mx-0">
    <div class="col-12 col-xl-3 left-panel px-0">
      <LeftPanelWeather v-if="generalStore.data.activeModule == MODULE.WEATHER" />
      <LeftPanelLocation v-if="generalStore.data.activeModule == MODULE.LOCATION" />
    </div>
    <div class="col-12 col-xl-9 right-panel">
      <RightPanel />
    </div>
  </div>
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
