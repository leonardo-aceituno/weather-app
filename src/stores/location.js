import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { API } from "../common/constants";

export const useLocation = defineStore("location", () => {
  const data = ref({
    locations: [],
    saveLocations: [],
  });

  const updateData = (element, value) => {
    data.value[element] = value;
  };

  const saveLocations = (city) => {
    const objetoExiste = data.value.saveLocations.some(
      (element) => element.name === city.name
    );

    if (!objetoExiste) data.value.saveLocations.push(city);
  };

  const getLocation = async (city) => {
    data.value.locations = [];
    try {
      const location = `${API.URL_LOCATION}/geo/1.0/direct?q=${city}&limit=${API.LIMIT_LOCATION}&appid=${API.KEY}`;

      const response = await axios.get(location);

      if (!response.ok) console.log(response.status);

      data.value.locations =
        response.data.length == 0
          ? [{ name: "without result" }]
          : response.data;
    } catch (error) {
      console.error("Error al obtener datos:", error.message);
    }
  };
  return { data, updateData, getLocation, saveLocations };
});
