import "./CSS Files/header_footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-main">
          Powered By
          <a href="https://www.weatherapi.com/" title="Free Weather API">
            <img
              src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
              alt="Weather data by WeatherAPI.com"
              border={0}
            />
          </a>
        </div>
      </div>
    </>
  )
}