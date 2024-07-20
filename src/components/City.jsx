import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "../App.css";

export default function City() {
  return (
    <>
      <div className="d-flex justify-content-between mt-4">
         <div>
          <h1>Kampala</h1>

          <p>
            Saturday 14:19, scattered clouds
            <br />
            Humidity: 87%, Wind: 4.12km/h
          </p>
         </div>
         <div className="currentTemperature">
          <div className="temperatureIcon position-relative">
            <ReactAnimatedWeather
              icon="SLEET"
              color="black"
              size={32}
              animate={true}
            />
          </div>
          <h2 className="position-relative">15</h2>
          <p className="temperatureDegree">°C</p>
         </div>
      </div>

      <div className="weekDays">
        <div className="row">
          <div className="col">
            <div className="row">
              <p>Mon</p>
              <div>
                <ReactAnimatedWeather
                  icon="CLEAR_DAY"
                  color="black"
                  size={32}
                  animate={true}
                />
              </div>

              <p>14° 16°</p>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <p>Tue</p>
              <div>
                <ReactAnimatedWeather
                  icon="SLEET"
                  color="black"
                  size={32}
                  animate={true}
                />
              </div>
              <p>17° 16°</p>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <p>Wed</p>
              <div>
                <ReactAnimatedWeather
                  icon="PARTLY_CLOUDY_NIGHT"
                  color="black"
                  size={32}
                  animate={true}
                />
              </div>
              <p>18° 16°</p>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <p>Thur</p>
              <div>
                <ReactAnimatedWeather
                  icon="PARTLY_CLOUDY_DAY"
                  color="black"
                  size={32}
                  animate={true}
                />
              </div>
              <p>17° 16°</p>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <p>Fri</p>
              <div>
                <ReactAnimatedWeather
                  icon="WIND"
                  color="black"
                  size={32}
                  animate={true}
                />
              </div>
              <p>17° 16°</p>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <p>Sat</p>
              <div>
                <ReactAnimatedWeather
                  icon="FOG"
                  color="black"
                  size={32}
                  animate={true}
                />
              </div>
              <p>17° 16°</p>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <p>Sun</p>
              <div>
                <ReactAnimatedWeather
                  icon="SNOW"
                  color="black"
                  size={32}
                  animate={true}
                />
              </div>
              <p>17° 16°</p>
            </div>
          </div>
        </div>
      </div>
      <p className="footer mt-3">
        This project was coded by{" "}
        <a href="https://github.com/miss-charlotte">Charlotte</a> and is{" "}
        <a href="https://github.com/miss-charlotte/react-weather-app">
          open-sourced on GitHub
        </a>{" "}
        and is{" "}
        <a href="https://react-weather-app-uganda.netlify.app/">
          hosted on Netlify
        </a>
      </p>
    </>
  );
}
