import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./weather-form.scss";

const WeatherForm = (props) => (
  <div className="text-center weatherForm">
    <form onSubmit={props.getWeather}>
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-3 weatherForm__col">
          <input
            className="form-control"
            type="text"
            name="city"
            placeholder="City"
          />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-3 weatherForm__col">
          <input
            className="form-control"
            type="text"
            name="country"
            placeholder="Country"
          />
        </div>
        <div
          className="col-sm-12 col-md-4 col-lg-6 weatherForm__col"
          style={{ textAlign: "left" }}
        >
          <button className="btn btn-info">
            {props.loadingWeatherInfo ? (
              <>
                {" "}
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />{" "}
                Loading...
              </>
            ) : (
              <> Get Weather</>
            )}
          </button>
        </div>
      </div>
    </form>
  </div>
);

export default WeatherForm;
