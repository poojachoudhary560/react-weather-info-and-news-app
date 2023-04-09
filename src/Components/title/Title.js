import React from "react";
import { WiDayLightning } from "weather-icons-react";
import "./title.scss";

const Title = () => (
  <div className="title bg-info text-white text-center">
    <h1>
      WeatherFinder <WiDayLightning size={50} color="#fff" />
    </h1>
    <p>Find out temperature conditions, weather news and more</p>
  </div>
);

export default Title;
