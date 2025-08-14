import axios from "axios";

const appId = import.meta.env.VITE_OPEN_WEATHER_API_ID;

const getByCapital = (capital) => {
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${appId}&units=metric`;
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

export default { getByCapital };
