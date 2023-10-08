<script setup>
import { useGeneral } from "../stores/general.js";
import { TYPE_DEGREES } from "../common/constants.js";

const generalStore = useGeneral();

const changeDegrees = (degree) => {
  generalStore.updataData("activeDegrees", degree);
};
</script>

<template>
  <button
    type="button"
    class="btn btn-secondary custom-size"
    :class="
      generalStore.data.activeDegrees == TYPE_DEGREES.CELSIUS ? 'active' : 'deactivate'
    "
    @click="changeDegrees(TYPE_DEGREES.CELSIUS)"
  >
    <span>°C</span>
  </button>

  <button
    type="button"
    class="btn btn-secondary custom-size ms-3 ms-lg-2"
    :class="
      generalStore.data.activeDegrees == TYPE_DEGREES.FAHRENHEIT ? 'active' : 'deactivate'
    "
    @click="changeDegrees(TYPE_DEGREES.FAHRENHEIT)"
  >
    <span>°F</span>
  </button>
</template>

<style scoped>
.custom-size {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: transparent;
}
.active {
  background: #e7e7eb;
  color: #110e3c;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.deactivate {
  background: #585676;
  color: #e7e7eb;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
</style>
