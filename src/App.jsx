import Header from "./Component/Header"
import Weather from "./Component/Weather";
import "./Component/CSS Files/app.css";

function App() {
let bg_Image_url = "https://img.freepik.com/free-vector/elegant-blurred-background_1393-113.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710633600&semt=ais"
  return (
    <>
      <div className="page" style={{ backgroundImage: `url("${bg_Image_url}")` }}>
        <Header />
        <Weather></Weather>
        <div className="like"></div>
      </div>
    </>
  )
}

export default App
