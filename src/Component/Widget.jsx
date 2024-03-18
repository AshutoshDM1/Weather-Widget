import { useState } from "react";
import "./CSS Files/Weather.css";

export default function Widget_Api({ currentWeatherData }) {


  return (
    <>
      <div className="Widget-Box">
        <div className="Image-box" style={{ backgroundImage: `url("${currentWeatherData.condition_icon}")` }}>
        </div>
        <div className="info-box" >
          <div className="indo-main">
            <p>Weather Of = {currentWeatherData.YouSearch}</p>
            <p>Weather is {currentWeatherData.condition_text}</p>
            <p>Temp {currentWeatherData.feelslike_c}°C</p>
            <p>Humidity {currentWeatherData.humidity}</p>
            <p>Time ={currentWeatherData.localtime}</p>
            <p>State {currentWeatherData.region}</p>
            <p>Country {currentWeatherData.country}</p>
          </div>

        </div>
      </div>
    </>
  )
}