import React, { useState } from "react";
import { BsWind } from "react-icons/bs";
import { AiFillCloud } from "react-icons/ai";
import { FaThermometerFull } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { TiThermometer } from "react-icons/ti";

const Card = ({ dataw }) => {
  const [celcius, setCelcius] = useState(true); //cambiamos el estado, si es true va a ser celcius, si no, Fahrenheit

  const temC = (dataw.main?.temp - 273.15).toFixed(1); // obtengo la temp en kelvin

  const temF = (((dataw.main?.temp - 273.15) * 9) / 5 + 32).toFixed(1); // aca convierto a Fahrenheit

  return (
    <div className="card-container">
      <h2>Wheater App</h2>
      <p>
        {dataw.name}, {dataw.sys?.country}
      </p>
      <div className="container-img-text">
        <div className="img">
          <img
            src={`http://openweathermap.org/img/wn/${dataw.weather?.[0].icon}@2x.png`}
          />
          <p>Temp: {celcius ? `${temC} °C` : `${temF} °F`} </p>
        </div>
        <ul className="container-description">
          <h3>"{dataw.weather?.[0].description}"</h3>
          <li className="description-item">
            <BsWind className="item-icon" />
            <p>Wind: {(dataw.wind?.speed / 3.6).toFixed(2)} km/h</p>
          </li>
          <li className="description-item">
            <AiFillCloud className="item-icon" />
            <p>Clouds: {dataw.clouds?.all}%</p>
          </li>
          <li className="description-item">
            <FaThermometerFull className="item-icon" />
            <p>Pressure: {dataw.main?.pressure} mb</p>
          </li>
          <li className="description-item">
            <WiHumidity className="item-icon-u" />
            <p>Humidity: {dataw.main?.humidity}%</p>
          </li>
          <li className="description-item">
            <TiThermometer className="item-icon" />
            <p>Sensation: {(dataw.main?.feels_like - 273.15).toFixed(1)}°</p>
          </li>
        </ul>
      </div>
      <button onClick={() => setCelcius(!celcius)}>
        {celcius ? "Change to Fahrenheit." : "Change to Celcius."}
      </button>
    </div>
  );
};

export default Card;
