<script setup>
import { computed, ref, watch } from "vue";
import { useGeneral } from "../stores/general.js";
import { useLocation } from "../stores/location.js";
import { useWeather } from "../stores/weather.js";
import { MODULE } from "../common/constants.js";

const generalStore = useGeneral();
const locationStore = useLocation();
const weatherStore = useWeather();

const city = ref("");

const close = () => {
  // console.log("activatePanelLocation");
  generalStore.updateData("activeModule", MODULE.WEATHER);
};

const search = (city = city.value) => {
  locationStore.getLocation(city);
};

const locations = computed(() => locationStore.data.locations);

const existLocations = computed(() => locations.value.length > 0);

const saveLocations = computed(() => locationStore.data.saveLocations);

watch(city, (newCity) => {
  if (newCity.length > 3) search(newCity);
});

const searchLocation = (item) => {
  weatherStore.getWeatherData(item.lat, item.lon);
  locationStore.updateData("locations", []);
  locationStore.saveLocations(item);
  city.value = "";
  close();
};

const searchLocationHistorial = (item) => {
  if (saveLocations.value && saveLocations.value.length > 0) searchLocation(item);
};

const resetCity = () => (city.value = "");
</script>

<template>
  <div>
    <div class="d-flex justify-content-end align-items-center px-4" style="height: 10vh">
      <font-awesome-icon
        :icon="['fas', 'xmark']"
        size="lg"
        @click="close"
        style="cursor: pointer"
      />
    </div>
  </div>

  <div class="mx-4 d-flex justify-content-between">
    <div class="col">
      <div class="input-group">
        <span class="input-group-text rounded-0">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </span>
        <input
          type="text"
          class="form-control rounded-0"
          placeholder="search location"
          v-model="city"
        />
        <span v-if="city.length > 3" class="input-group-text rounded-0">
          <font-awesome-icon
            :icon="['fas', 'xmark']"
            style="color: red; cursor: pointer"
            @click="resetCity"
          />
        </span>
      </div>

      <ul id="search" v-if="existLocations && city.length > 3" class="list-group mt-1">
        <li
          v-for="(item, index) in locations"
          :key="'location_' + index"
          class="list-group-item d-flex justify-content-between"
          @click="searchLocation(item)"
          style="font-size: 14px"
          @blur=""
        >
          <span>{{ item.name }}</span>
          <span>{{ item.country }}</span>
        </li>
      </ul>
    </div>

    <!-- <div>
      <button
        type="button"
        class="btn btn-primary rounded-0 color-button"
        @click="search()"
      >
        <span class="txt-button">Search</span>
      </button>
    </div> -->
  </div>

  <!-- search_history -->
  <div
    v-if="locationStore.data.saveLocations && locationStore.data.saveLocations.length > 0"
    id="search_history"
    class="mx-4 mt-5"
  >
    <p class="txt-title">Search history</p>
    <li
      v-for="(item, index) in locationStore.data.saveLocations"
      :key="index"
      class="list-group-item d-flex justify-content-between"
      @click="searchLocationHistorial(item)"
    >
      <span>{{ item.name }}, {{ item.country }}</span>

      <font-awesome-icon
        :icon="['fas', 'magnifying-glass']"
        @click="close"
        style="cursor: pointer"
      />
    </li>
  </div>
</template>

<style scoped>
.input-group .input-group-text {
  background-color: #fff; /* Heredar el fondo del input */
  border: none; /* Quitar el borde */
}

.form-control {
  border: none;
  outline: none;
  box-shadow: none;
}
.list-group {
  border-radius: 0 !important;
}
.txt-title {
  font-size: 18px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  color: #88869d;
}

#search li {
  cursor: pointer;
}
#search li:hover {
  cursor: pointer;
  background-color: #cccccc;
}

#search_history li:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
