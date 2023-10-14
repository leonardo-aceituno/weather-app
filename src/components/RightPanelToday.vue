<script setup>
import { useWeather } from "../stores/weather.js";
import { useGeneral } from "../stores/general.js";
import { computed } from "vue";
import { windDirecction, convertToMilles } from "../common/utils.js";

const weatherStore = useWeather();
const generalStore = useGeneral();

const todayWeatherData = computed(() => {
  return weatherStore.data.todayWeatherData;
});
</script>

<template>
  <div v-if="todayWeatherData">
    <div class="txt-title">Today’s Hightlights</div>

    <div class="d-lg-flex justify-content-between mt-4">
      <!-- Wind -->
      <div class="w-100 mx-0 me-lg-3 mt-4 mt-lg-0 p-3 bg-card card-top">
        <p class="txt-card-title">Wind status</p>

        <p class="txt-card-title">
          <span class="txt-number">{{ todayWeatherData.wind.speed }}</span>
          <span class="txt ms-2">mps</span>
        </p>

        <p class="txt-card-title d-flex align-items-center justify-content-center">
          <span class="custom-size-location">
            <font-awesome-icon
              :icon="['fas', 'location-arrow']"
              class="arrow-icon"
              :style="{
                transform: `rotate(${todayWeatherData.wind.deg - 45}deg) scaleY(1.2)`,
              }"
            />
          </span>

          <span class="ms-2">{{ windDirecction(todayWeatherData.wind.deg) }}</span>
        </p>
      </div>

      <!-- Humidity -->
      <div class="w-100 mx-0 ms-lg-3 mt-4 mt-lg-0 p-3 bg-card card-top">
        <p class="txt-card-title">Humidity</p>

        <p class="txt-card-title">
          <span class="txt-number">{{ todayWeatherData.main.humidity }}</span>
          <span class="txt ms-2">%</span>
        </p>

        <div class="mx-4">
          <div class="d-flex justify-content-between" style="font-size: 12px">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
          <div
            class="progress mt-1"
            role="progressbar"
            aria-label="Example 1px high"
            aria-valuemin="0"
            aria-valuemax="100"
            style="height: 8px"
          >
            <div
              class="progress-bar"
              :style="{ width: todayWeatherData.main.humidity + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-lg-flex justify-content-between mt-4">
      <!-- Visibility -->
      <div class="w-100 mx-0 me-lg-3 mt-4 mt-lg-0 p-3 bg-card card-bottom">
        <p class="txt-card-title">Visibility</p>

        <p class="txt-card-title">
          <span class="txt-number">{{
            convertToMilles(todayWeatherData.visibility)
          }}</span>
          <span class="txt ms-2">milles</span>
        </p>
      </div>

      <!-- Air Pressure -->
      <div class="w-100 mx-0 ms-lg-3 mt-4 mt-lg-0 p-3 bg-card card-bottom">
        <p class="txt-card-title">Air Pressure</p>

        <p class="txt-card-title">
          <span class="txt-number">{{ todayWeatherData.main.pressure }}</span>
          <span class="txt ms-2">mb</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.progress-bar {
  background-color: #ffec65;
}
.bg-card {
  background: #1e213a;
}
.txt {
  font-size: 36px;
  font-weight: 500;
  line-height: 42px;
  letter-spacing: 0em;
  color: #e7e7eb;
}
.txt-number {
  font-size: 64px;
  font-weight: 700;
  line-height: 75px;
  letter-spacing: 0em;
  color: #e7e7eb;
}
.custom-size-location {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: transparent;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.arrow-icon {
  /* Ajuste de rotación para el ícono location-arrow */
  transform-origin: center;
}
.card-top {
  height: 204px;
}
.card-bottom {
  height: 159px;
}
.txt-card-title {
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  color: #e7e7eb;
}
.txt-title {
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  color: #e7e7eb;
}
.custom-col {
  width: 328;
  height: 204px;
}
</style>
