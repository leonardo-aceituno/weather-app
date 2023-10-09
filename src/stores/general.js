import { ref } from "vue";
import { defineStore } from "pinia";
import { MODULE, TYPE_DEGREES } from "../common/constants";

export const useGeneral = defineStore("general", () => {
  const data = ref({
    activeModule: MODULE.WEATHER,
    activeDegrees: TYPE_DEGREES.CELSIUS,
    loading: false,
  });

  const updateData = (element, value) => {
    data.value[element] = value;
  };

  return { data, updateData };
});
