import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import "./weather.css";
import Dropdown from "./Dropdown";

function Weather() {
  const [ weather, setWeather ] = useState([]);
  const [ form, setForm ] = useState({
    country: ""
  });

  const APIKEY = "794ee95e63c5a32aaf88cd813fa2e425";

  async function weatherData(e) {
    e.preventDefault();

    if (form.country === "") {
      alert("Please select a country");
      return;
    }

    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.country}&APPID=${APIKEY}`)
      .then((res) => res.json())
      .then((data) => data)
      .catch(err => {
        console.log('error');
      });

    setWeather({ data });
  }

  const handleChangeCountry = (v) => {
    setForm({
      country: v
    });
  };


  return (
    <div className="weather">
      <div className="title">Weather App</div>
      <form>

        <Dropdown handleChangeCountry={handleChangeCountry} />
        <button className="getweather" onClick={weatherData}>
          Submit
        </button>
      </form>

      {(weather.data !== undefined && weather.data.cod !== "404") ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}

    </div>
  );
}

export default Weather;
