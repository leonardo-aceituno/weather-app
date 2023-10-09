import axios from "axios";
import { ref } from "vue";
import { defineStore } from "pinia";
import { API } from "../common/constants";
import { useGeneral } from "./general";

export const useWeather = defineStore("weather", () => {
  const data = ref({
    todayWeatherData: null,
    weeklyWeatherData: null,
  });

  const getWeatherData = async (latitude, longitude) => {
    const generalStore = useGeneral();

    generalStore.data.loading = true;

    const today = `${API.URL}/weather?lat=${latitude}&lon=${longitude}&appid=${API.KEY}`;
    const weekly = `${API.URL}/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=${API.DAYS}&appid=${API.KEY}`;

    const requestToday = axios.get(today);
    const requestWeekly = axios.get(weekly);

    try {
      const responses = await Promise.all([requestToday, requestWeekly]);

      data.value.todayWeatherData = responses[0].data;
      data.value.weeklyWeatherData = responses[1].data;

      // console.log(data.value.todayWeatherData);
      // console.log(data.value.weeklyWeatherData);

      generalStore.data.loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  const getCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          getWeatherData(latitude, longitude);
        },
        function (error) {
          // Manejar errores si la geolocalización no está disponible o se rechaza
          switch (error.code) {
            case error.PERMISSION_DENIED:
              console.error("Permiso denegado por el usuario.");
              break;
            case error.POSITION_UNAVAILABLE:
              console.error("Información de ubicación no disponible.");
              break;
            case error.TIMEOUT:
              console.error("La solicitud de ubicación ha caducado.");
              break;
            case error.UNKNOWN_ERROR:
              console.error("Error desconocido.");
              break;
          }
        }
      );
    } else {
      console.error("La geolocalización no está disponible en este navegador.");
    }
  };

  return { data, getCurrentLocation, getWeatherData };
});
