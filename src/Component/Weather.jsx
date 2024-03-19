import "./CSS Files/Weather.css"
import Widget_Api from "./Widget"
import { useState } from "react";
import SearchWeather from "./SearchWeather";


export default function Weather() {

  let WeatherData = {
    YouSearch: "Pune",
    condition_icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
    condition_text: "Sunny",
    country: "India",
    feelslike_c: 32.4,
    gust_kph: 12.4,
    humidity: 16,
    last_updated: "2024-03-18 13:30",
    localtime: "2024-03-18 13:34",
    region: "Maharashtra",
    temp_c: 34.4,
    wind_kph: 10.8,
  };

  let [currentWeatherData, setCurrentWeather] = useState(WeatherData);
  let [showError, setShowError] = useState({
    displayError : false ,
    ShowHelper :  ""
  });

  let handleErrorMessage = () => {
    console.log("error message clicked");
    setShowError({
      displayError : true ,
      ShowHelper :  "Please Enter a Valid City Name! with Correct Spelling ."
    })
  }
  let setData = (infoWeatherData) => {
    setShowError({
      displayError : false ,
      ShowHelper :  ""
    })
    setCurrentWeather(infoWeatherData);
  }

  return (
    <>
      <div className="Main-container">
        <div className="Main-body">
          <SearchWeather
            setData={setData}
          handleErrorMessage={handleErrorMessage}
          showError={showError}
          />
          <Widget_Api currentWeatherData={currentWeatherData} />
        </div>
      </div>
    </>
  )
}