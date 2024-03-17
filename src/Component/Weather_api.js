const API_Key = "d488a79babb149f79ef104704241703";
let currentWeatherData = {
  Temp: 22,
  Humidity: 12,
  WindSpeed: "73.2"
};
let GetWeatherData = async (city) => {
  // let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_Key}&q=${city}&aqi=no`);
  // let data = await response.json();
  // console.log(data);
  currentWeatherData = {
    Temp: 22,
    Humidity: 12,
    WindSpeed: "73.233333"
  }

  console.log("hello API");
 
}
export { GetWeatherData, currentWeatherData};