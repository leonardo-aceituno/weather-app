import moment from "moment";
import { TYPE_DEGREES } from "./constants";
import { useGeneral } from "../stores/general";

export const getDate = (date) => moment.unix(date).format("ddd, D MMM");

export const changeTemperature = (temp) => {
  const generalStore = useGeneral();

  if (generalStore.data.activeDegrees === TYPE_DEGREES.CELSIUS)
    return Math.round(temp - 273.15);

  if (generalStore.data.activeDegrees === TYPE_DEGREES.FAHRENHEIT)
    return Math.round(((temp - 273.15) * 9) / 5 + 32);
};

export function getImage(id) {
  let img = "";

  switch (id) {
    case 800:
      return (img = `/Clear.png`);
      break;

    case 801:
      return (img = `../../public/LightCloud.png`);
      break;

    case 802:
    case 803:
    case 804:
      return (img = `../../public/HeavyCloud.png`);
      break;

    case 520:
    case 521:
    case 522:
    case 531:
    case 314:
    case 502:
    case 503:
    case 504:
      return (img = `../../public/HeavyRain.png`);
      break;

    case 300:
    case 301:
    case 302:
    case 310:
    case 311:
    case 312:
    case 313:
    case 321:
    case 500:
    case 501:
      return (img = `../../public/LightRain.png`);
      break;

    case 511:
      return (img = `../../public/Sleet.png`);
      break;

    case 600:
    case 601:
    case 602:
    case 611:
    case 612:
    case 613:
    case 615:
    case 616:
    case 620:
    case 621:
    case 622:
      return (img = `../../public/Snow.png`);
      break;

    case 200:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 232:
      return (img = `../../public/Thunderstorm.png`);
      break;
    default:
      break;
  }
}

export const windDirecction = (degree) => {
  const direccion = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
    "N",
  ];

  const index = Math.round((degree % 360) / 22.5);
  return direccion[index];
};

export const convertToMilles = (m) => {
  return Math.round(m * 0.000621371);
};
