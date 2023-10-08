<script setup>
import { useWeather } from "../stores/weather.js";
import { useGeneral } from "../stores/general.js";
import { getDate, changeTemperature, getImage } from "../common/utils.js";
import { computed } from "vue";
import { TYPE_DEGREES } from "../common/constants.js";

const weatherStore = useWeather();
const generalStore = useGeneral();

const todayWeatherData = computed(() => {
  return weatherStore.data.todayWeatherData;
});

const degree = computed(() =>
  generalStore.data.activeDegrees == TYPE_DEGREES.CELSIUS ? "°C" : "°F"
);

const setLocation = () => {
  weatherStore.getCurrentLocation();
};

const activatePanelLocation = () => {
  console.log("activatePanelLocation");
};
</script>

<template>
  <div v-if="todayWeatherData" >
    <!-- Buttons -->
    <div
      class="d-flex justify-content-between align-items-center px-4"
      style="height: 10vh"
    >
      <button
        type="button"
        class="btn btn-secondary rounded-0 color-button"
        @click="activatePanelLocation()"
      >
        <span class="txt-button">Seach for places</span>
      </button>

      <button
        type="button"
        class="btn btn-secondary rounded-circle px-2"
        @click="setLocation()"
      >
        <font-awesome-icon
          :icon="['fas', 'location-crosshairs']"
          size="lg"
          style="color: #e7e7eb"
        />
      </button>
    </div>

    <!-- Image -->
    <div class="img-background" style="height: 35vh">
      <div class="background-opacity"></div>
      <div class="d-flex justify-content-center">
        <img
          :src="getImage(todayWeatherData.weather[0].id)"
          alt=""
          class="mt-lg-5 pe-3"
        />
      </div>
    </div>

    <!-- temperature -->
    <div class="text-center" style="height: 25vh">
      <p>
        <span class="me-1 txt-number">
          {{ changeTemperature(todayWeatherData.main.temp) }}
        </span>
        <span class="txt-degree">{{ degree }}</span>
      </p>
    </div>

    <!-- Weather -->
    <div class="text-center txt-weather" style="height: 15vh">
      <div class="pt-4">{{ todayWeatherData.weather[0].main }}</div>
    </div>

    <!-- Date - Location -->
    <div class="text-center" style="height: 15vh">
      <p class="txt-date">
        <span>Today</span>
        <span class="mx-2">•</span>
        <span>{{ getDate(todayWeatherData.dt) }}</span>
      </p>
      <p class="txt-location">
        <font-awesome-icon :icon="['fas', 'location-dot']" />
        &nbsp;
        <span>{{ todayWeatherData.name }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.color-button {
  background-color: #6e707a;
}
.txt-button {
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;

  color: #e7e7eb;
}
.background-opacity {
  background-image: url("../assets/Cloud-background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1; /* Opacidad del 10% para el fondo */
  z-index: 0;
}
.img-background {
  position: relative;
}
.txt-degree {
  font-size: 48px;
  font-weight: 100;
  line-height: 56px;
  letter-spacing: 0em;
  color: #a09fb1;
}
.txt-number {
  font-family: Raleway;
  font-size: 144px;
  font-weight: 500;
  line-height: 169px;
  letter-spacing: 0em;
  color: #e7e7eb;
}
.txt-weather {
  font-size: 36px;
  font-weight: 600;
  line-height: 42px;
  letter-spacing: 0em;
  color: #a09fb1;
}
.txt-date {
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  color: #88869d;
}
.txt-location {
  font-size: 18px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  color: #88869d;
}
</style>
