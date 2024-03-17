import { useState } from "react";
import "./CSS Files/Weather.css";

import {GetWeatherData ,currentWeatherData} from './Weather_api'

export default function Widget_Api({ city }) {

  // let [weather, setWeather] = useState(currentWeatherData);
  console.log(currentWeatherData.WindSpeed)



  return (
    <>
      <div className="Widget-Box">
        <div className="Image-box" style={{ backgroundImage: `url("./src/assets/sunny_day.jpg")` }}>
        </div>
        <div className="info-box" >

          {/* <h4>{weather.city}</h4>
          <p>{weather.Temp}°C</p> */}
          <p>{currentWeatherData.WindSpeed}km/sec</p>
          {/* <p>{weather.Humidity}</p> */}
        </div>
      </div>
    </>
  )
}