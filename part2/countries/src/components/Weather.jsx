import { useEffect, useState } from "react";
import weatherServices from "../services/weather";

const Weather = ({ capital }) => {
  const [weatherDetail, setWeatherDetail] = useState([]);

  useEffect(() => {
    if (weatherDetail) {
      weatherServices
        .getByCapital(capital)
        .then((response) => {
          setWeatherDetail(response);
        })
        .catch((error) => {
          console.log(error);
          setWeatherDetail([]);
        });
    }
  }, []);

  const imgUrl = `https://openweathermap.org/img/wn/${weatherDetail.weather[0].icon}@2x.png`;

  return (
    <div>
      {console.log(weatherDetail)}
      <h1>Weather in {capital}</h1>
      <p>Temperature {weatherDetail.main.temp} Celcius</p>
      <img src={imgUrl} alt={weatherDetail.weather[0].main} />
      <p>Wind {weatherDetail.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
