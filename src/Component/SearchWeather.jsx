import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { GetWeatherData, infoWeatherData } from './Weather_api'

export default function SearchWeather({ setData, handleErrorMessage, showError }) {

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
      await GetWeatherData(city);
      setData(infoWeatherData);

    } catch (error) {
      console.log(error);
      handleErrorMessage();
    }
  };

  return (
    <>
      <div className="Input-main">
        <div className="Input-box">
          <TextField
            error={showError.displayError}
            helperText={showError.ShowHelper}
            onChange={handleInput}
            value={city} onKeyPress={handleKeyPress} className="Input" id="outlined-basic" label="Enter City Name"
            variant="outlined" />
        </div>
      </div>
      <div className="search-btn">
        <Button
          color="primary"
          className="search-btn-main"
          variant="outlined" size="large" onClick={handleSubmit}>Search</Button>
      </div>
    </>
  )
}