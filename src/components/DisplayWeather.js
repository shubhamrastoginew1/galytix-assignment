import React from "react";
import "./displayweather.css";
function DisplayWeather(props) {
  const {data} = props;
  const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod !== 404 ? data.weather[0].icon : null}` +
    ".png";
  return (
    <div className="displayweather">
      {data.cod !== "404" ? (
        <React.Fragment>
          <div className="maincard">
            <span className="cardtitle">
              {data.name} , {data.sys.country}. Weather Details
            </span>
            <span className="cardsubtitle">
              Time: {new Date().toLocaleTimeString()}
            </span>

            <h1>
              {" "}
              {Math.floor(data.main.temp - 273.15)}
              <sup>o</sup>
              <span>C</span>
            </h1>
            <span className="weather-description">
              {" "}
              {data.weather[0].description}
            </span>
          </div>
          <div className="weatherdetails">
            <div className="section1">
              <table>
              <tbody>
              <tr>

                </tr>
                <tr>
                  <td>
                    <h4>Humidity</h4>
                  </td>
                  <td>
                    <span>{data.main.humidity} %</span>
                  </td>
                </tr>
                <tr>

                </tr>
                <tr>
                  
                </tr>
              </tbody>
              </table>
            </div>

            <div className="section2">
              <table>
                <tbody>
                <tr>
                  <td>
                    <h4>Wind</h4>
                  </td>
                  <td>
                    <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Wind Direction</h4>
                  </td>
                  <td>
                    <span>
                      {data.wind.deg}
                      <sup>o</sup> deg
                    </span>
                  </td>
                </tr>
                <tr>
              
                </tr>
                <tr>

                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="maincard">
          <h2>{data.message} hh</h2>
        </div>
      )}
    </div>
  );
}

export default DisplayWeather;
