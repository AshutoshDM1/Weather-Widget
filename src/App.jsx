import Header from "./Component/Header"
import Weather from "./Component/Weather";
import "./Component/CSS Files/app.css";

function App() {

  return (
    <>
      <div className="page">
        <Header />
        <Weather></Weather>
        <div className="like"></div>
      </div>
    </>
  )
}

export default App
