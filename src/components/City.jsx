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
        <div>
          <h2>15°C</h2>
        </div>
      </div>

      <div className="weekDays mt-5">
        <div className="row">
          <div className="col">
            <div className="row">
              <p>Mon</p>
              <p>
                <ReactAnimatedWeather
                  icon="CLEAR_DAY"
                  color="black"
                  size={32}
                  animate={true}
                />
              </p>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <p>Tue</p>
              <ReactAnimatedWeather
                icon="SLEET"
                color="black"
                size={32}
                animate={true}
              />
            </div>
          </div>
          <div className="col">
            <div className="row">
              <p>Wed</p>
              <ReactAnimatedWeather
                icon="PARTLY_CLOUDY_NIGHT"
                color="black"
                size={32}
                animate={true}
              />
            </div>
          </div>
          <div className="col">
            <div className="row">
              <p>Thur</p>
              <ReactAnimatedWeather
                icon="PARTLY_CLOUDY_DAY"
                color="black"
                size={32}
                animate={true}
              />
            </div>
          </div>
          <div className="col">
            <div className="row">
              <p>Fri</p>
              <ReactAnimatedWeather
                icon="WIND"
                color="black"
                size={32}
                animate={true}
              />
            </div>
          </div>
          <div className="col">
            <div className="row">
              <p>Sat</p>
              <ReactAnimatedWeather
                icon="FOG"
                color="black"
                size={32}
                animate={true}
              />
            </div>
          </div>
          <div className="col">
            <div className="row">
              <p>Sun</p>
              <ReactAnimatedWeather
                icon="SNOW"
                color="black"
                size={32}
                animate={true}
              />
            </div>
          </div>
        </div>
      </div>
      <p className="footer mt-5">
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
