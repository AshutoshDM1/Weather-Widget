const API_Key = "d488a79babb149f79ef104704241703";
let infoWeatherData;
let GetWeatherData = async (city) => {
  let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_Key}&q=${city}&aqi=no`);
  let data = await response.json();
  console.log(data);

  infoWeatherData = {
    YouSearch : city,
    condition_text: data.current.condition.text,
    condition_icon: data.current.condition.icon,
    feelslike_c: data.current.feelslike_c,
    gust_kph: data.current.gust_kph,
    humidity: data.current.humidity,
    temp_c: data.current.temp_c,
    wind_kph: data.current.wind_kph,
    last_updated: data.current.last_updated,
    country: data.location.country,
    region: data.location.region,
    localtime: data.location.localtime,
  }
}

export { GetWeatherData, infoWeatherData };