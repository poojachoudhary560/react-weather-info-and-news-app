import { Constants } from "constants";
import React, { Fragment, useEffect, useState } from "react";
import "./weather-display.scss";
function WeatherDisplay(props) {
  const [temp, setTemp] = useState("");
  const [tempUnit, setTempUnit] = useState(Constants.TEMP_CONSTANTS.KELVIN);

  useEffect(() => {
    setTemp(props.temperature);
    setTempUnit(Constants.TEMP_CONSTANTS.KELVIN);
  }, [props.temperature]);

  const handleClick = (unit) => {
    if (tempUnit !== unit) {
      setTempUnit(unit);
    }
  };
  return (
    <div className="weatherDisplay">
      <div className="weatherDisplay__error">
        {props.error && <span>{props.error}</span>}
      </div>
      {props.temperature && (
        <>
          <div className="row weatherDisplay__location">
            {props.city && props.country && (
              <p className="weatherDisplay__location--content">
                {props.city}, {props.country}
              </p>
            )}

            {props.description && <p>{props.description}</p>}
          </div>
          {props.temperature && temp && (
            <div className="weatherDisplay__temp">
              <div className="weatherDisplay__tempImg">
                {props.icon_url && (
                  <img
                    src={props.icon_url}
                    alt="icon"
                    style={{ width: "100%" }}
                    className="weatherDisplay__tempImg--content"
                  />
                )}
              </div>
              <div className="weatherDisplay__tempDetails">
                <div className="weatherDisplay__tempDetails--units">
                  <span style={{}} className="temp-display">
                    {tempUnit === Constants.TEMP_CONSTANTS.KELVIN &&
                      parseFloat(temp).toFixed(2)}

                    {tempUnit === Constants.TEMP_CONSTANTS.CELSIUS &&
                      parseFloat(temp - 273.15).toFixed(2)}

                    {tempUnit === Constants.TEMP_CONSTANTS.FAHRENHEIT &&
                      parseFloat(temp - 273.15).toFixed(2)}
                  </span>

                  <span
                    style={{
                      fontSize: "28px",
                      color: "red",
                    }}
                  >
                    {String.fromCodePoint(tempUnit)}
                  </span>
                  {Object.values(Constants.TEMP_CONSTANTS).map(
                    (temp_constant) => {
                      if (temp_constant !== tempUnit) {
                        return (
                          <Fragment key={temp_constant}>
                            {` | `}
                            <span
                              onClick={() => handleClick(temp_constant)}
                              style={{
                                cursor: "pointer",
                                color: "blue",
                              }}
                            >
                              {String.fromCodePoint(temp_constant)}{" "}
                            </span>
                          </Fragment>
                        );
                      }
                      return null;
                    }
                  )}
                </div>
                <div className="weatherDisplay__tempDetails--desc">
                  {props.humidity && (
                    <p className="weatherDisplay__tempDetails--humidity">
                      Humidity: {props.humidity}%
                    </p>
                  )}
                  {props.wind.speed ? (
                    <p className="weatherDisplay__tempDetails--humidity">
                      Wind Speed: {props.wind.speed} m/s
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default WeatherDisplay;
