import React from 'react';
const Form = props => (
  <div className="text-center weather-form">
    <form onSubmit={props.getWeather}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <input className="form-control" type="text" name="city" placeholder="city" />
        </div>
        <div className="form-group col-md-6">
          <input className="form-control" type="text" name="country" placeholder="country" />
        </div>
      </div>
      <button className="btn btn-info">Get Weather</button>
    </form>
  </div>
);

export default Form;
