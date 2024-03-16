import "./CSS Files/Weather.css"
import Widget_Api from "./Widget_Api"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Weather() {
  return (
    <>
      <div className="Main-container">
        <div className="Main-body">
          <div className="Input-main">
            <div className="Input-box">
              <TextField className="Input" id="outlined-basic" label="Enter City Name" variant="outlined" />
            </div>
          </div>
          <div className="search-btn">
            <Button variant="contained">Search</Button>
          </div>
          <Widget_Api />
        </div>

      </div>
    </>
  )
}