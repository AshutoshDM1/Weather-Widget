import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { GetWeatherData, infoWeatherData } from './Weather_api'

export default function SearchWeather({ setData ,handleErrorMessage ,displayError ,ShowHelper }) {

  const [city, setCity] = useState("");

  const handleInput = (event) => {
    setCity(event.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setCity("");
    try {
      ShowHelper = "";
      displayError = false;
      await GetWeatherData(city);
      setData(infoWeatherData);

    } catch (error) {
      console.log(error);
      console.log("first")
      handleErrorMessage();
    }
  };



  return (
    <>
      <div className="Input-main">
        <div className="Input-box">
          <TextField
            error={displayError}
            helperText= {ShowHelper}
            onChange={handleInput}
            value={city} onKeyPress={handleKeyPress} className="Input" id="outlined-basic" label="Enter City Name"
            variant="outlined" />
        </div>
      </div>
      <div className="search-btn">
        <Button
          className="search-btn-main"
          variant="outlined" size="large" onClick={handleSubmit}>Search</Button>
      </div>
    </>
  )
}