<script setup>
import { useWeather } from "../stores/weather.js";
import { useGeneral } from "../stores/general.js";

import { getDate, changeTemperature, getImage } from "../common/utils.js";
import { computed } from "vue";
import { TYPE_DEGREES } from "../common/constants.js";

const weatherStore = useWeather();
const generalStore = useGeneral();

const weeklyWeatherData = computed(() => weatherStore.data.weeklyWeatherData);

const weeklyWeather = computed(() => {
  const week = [];

  weeklyWeatherData.value.list.forEach((element, index) => {
    if (index > 0) week.push(element);
  });
  return week;
});

const degree = computed(() =>
  generalStore.data.activeDegrees == TYPE_DEGREES.CELSIUS ? "°C" : "°F"
);
</script>

<template>
  <div v-if="weeklyWeatherData" class="row mx-0 justify-content-between pt-5">
    <div
      v-for="(item, index) in weeklyWeather"
      :key="index"
      class="col-12 col-md-6 custom-column px-2 py-3 text-center mb-5"
    >
      <div class="txt-data" style="min-height: 5%">
        {{ getDate(item.dt) }}
      </div>
      <div
        class="d-flex justify-content-center align-items-center"
        style="min-height: 75%"
      >
        <img
          :src="getImage(item.weather[0].id)"
          alt=""
          class="me-2 mb-3"
          width="80"
          height="62"
        />
      </div>
      <div class="d-flex justify-content-around" style="min-height: 5%">
        <span class="txt-temp-min"
          >{{ changeTemperature(item.temp.min) }}{{ degree }}</span
        >
        <span class="txt-temp-max"
          >{{ changeTemperature(item.temp.max) }}{{ degree }}</span
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.txt-data {
  color: #e7e7eb;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.txt-temp-min {
  color: #e7e7eb;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.txt-temp-max {
  color: #a09fb1;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.custom-column {
  width: 120px;
  min-height: 177px;
  background: #1e213a;
}
</style>
