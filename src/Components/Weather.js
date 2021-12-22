import React, { Component } from "react";
class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tempUnit: "k",
      temp: "",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps, prevState);
    if (nextProps.temperature !== prevState.temp) {
      return {
        temp: nextProps.temperature,
        tempUnit: "k",
      };
    }
    return null;
  }

  handleClick = (unit) => {
    if (this.state.tempUnit !== unit) {
      this.setState({
        tempUnit: unit,
      });
    }
  };

  render() {
    return (
      <div
        className="weather-info"
        style={{
          marginBottom: this.props.temperature ? "0" : "1em",
        }}
      >
        <div style={{ height: "20px", fontSize: "14px", color: "red" }}>
          {this.props.error && <span>{this.props.error}</span>}
        </div>
        {this.props.temperature && (
          <>
            <div
              className="row location-display"
              style={{ flexDirection: "column" }}
            >
              {this.props.city && this.props.country && (
                <p style={{ fontSize: "1.5em" }}>
                  {this.props.city}, {this.props.country}
                </p>
              )}

              {this.props.description && <p>{this.props.description}</p>}
            </div>
            <div className="row">
              <div
                className="col-xs-1 col-sm-2 col-md-1 col-custom-weather-icon"
                style={{ padding: "0" }}
              >
                {this.props.icon_url && (
                  <img
                    src={this.props.icon_url}
                    alt="icon"
                    style={{ width: "100%" }}
                  />
                )}
              </div>
              <div className="col-xs-6 col-sm-6 col-md-3 col-custom-weather-display col-custom">
                {this.props.temperature && (
                  <>
                    <span style={{}} className="temp-display">
                      {this.state.tempUnit === "k"
                        ? this.state.temp
                          ? parseFloat(this.state.temp).toFixed(2)
                          : ""
                        : this.state.temp
                        ? parseFloat(this.state.temp - 273.15).toFixed(2)
                        : ""}
                    </span>
                    {this.state.tempUnit === "k" ? (
                      <span
                        onClick={() => this.handleClick("k")}
                        style={{
                          fontSize: "28px",
                          cursor:
                            this.state.tempUnit === "k" ? "none" : "pointer",
                          color: this.state.tempUnit === "k" ? "" : "blue",
                        }}
                      >
                        {" "}
                        K{" "}
                      </span>
                    ) : (
                      <span
                        onClick={() => this.handleClick("c")}
                        style={{
                          cursor:
                            this.state.tempUnit === "c" ? "none" : "pointer",
                          color: this.state.tempUnit === "c" ? "" : "blue",
                          fontSize: "28px",
                        }}
                      >
                        {" "}
                        &#8451;{" "}
                      </span>
                    )}
                    |
                    {this.state.tempUnit === "c" ? (
                      <span
                        onClick={() => this.handleClick("k")}
                        style={{
                          cursor:
                            this.state.tempUnit === "k" ? "none" : "pointer",
                          color: this.state.tempUnit === "k" ? "" : "blue",
                        }}
                      >
                        {" "}
                        K{" "}
                      </span>
                    ) : (
                      <span
                        onClick={() => this.handleClick("c")}
                        style={{
                          cursor:
                            this.state.tempUnit === "c" ? "none" : "pointer",
                          color: this.state.tempUnit === "c" ? "" : "blue",
                        }}
                      >
                        {" "}
                        &#8451;{" "}
                      </span>
                    )}
                  </>
                )}
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-custom-weather-desc col-custom">
                {this.props.humidity && <p>Humidity: {this.props.humidity}%</p>}
                {this.props.wind.speed ? (
                  <p>Wind Speed: {this.props.wind.speed} m/s</p>
                ) : null}
              </div>
              <div className="col-xs-2 col-sm-1 col-md-5 col-custom-weather-empty"></div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Weather;
