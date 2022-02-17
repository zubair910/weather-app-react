import React, { useEffect, useState } from "react";
import imagee from "../images/img2.png"


import "./logo.css"
const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState({});
  const [cityName, setCityName] = useState("karachi");
  const [searchCityState, setSearchCityState] = useState("karachi");
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchCityState}&appid={API KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeatherData(result);
      })
      .catch((err) => {
        console.log("0rrr", err);
      });
  }, [cityName]);

  const searchCity = (e) => {
    setSearchCityState(cityName);
  };
  return (
    <div>
      <h1>WeatherApp</h1>
     
       <div className="mainBox">
      
         <h4>Lorem ipsum dolor sit <br /> amet consectetur  adipisicing elit. <br /> Accusantium expedita temporibus <br /> </h4>

         <img src={imagee} width="30%" />
        

      <div className="d-flex justify-content-center my-5  w-50  input1"
        style={{ flexDirection: "column", alignItems: "center" }}>
           
        <input
          type="text"
          value={cityName}
          className="form-group form-control w-50"
          placeholder="Enter City name"
          onChange={(e) => setCityName(e.target.value)} />
        <button onClick={searchCity} className="btn btn-info  btno">
          search
        </button>
      </div>
      {/* <button>CALL API</button> */}
      <div className="city">
      <li>CITY: {weatherData && weatherData.name} </li>
      <li>TEMP: {weatherData && weatherData.main && weatherData.main.temp} </li>
      <li>
        Condition:{" "}
        {weatherData &&
          weatherData.weather &&
          weatherData.weather[0] &&
          weatherData.weather[0].main}
      </li>
      </div>
      </div>
    </div>
  );
};

export default WeatherApp;