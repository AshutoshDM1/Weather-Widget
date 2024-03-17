import "./CSS Files/Weather.css"
import Widget_Api from "./Widget"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {GetWeatherData} from './Weather_api'

import { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState("");
  let finalCity="New Delhi";

  const handleInput = (event) => {
    setCity(event.target.value);
    finalCity = city;

  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };
  const handleSubmit = () => {
    console.log(finalCity);
    setCity("");
    GetWeatherData(finalCity);
  };


  return (
    <>
      <div className="Main-container">
        <div className="Main-body">
          <div className="Input-main">
            <div className="Input-box">
              <TextField onChange={handleInput}
                value={city} onKeyPress={handleKeyPress} className="Input" id="outlined-basic" label="Enter City Name" variant="outlined" />
            </div>
          </div>
          <div className="search-btn">
            <Button className="search-btn-main" variant="contained" onClick={handleSubmit}>Search</Button>
          </div>
          <Widget_Api city = {finalCity}/>
        </div>

      </div>
    </>
  )
}