import React from 'react';
const Form = props => (
  <div className="text-center weather-form" style={{marginBottom: '2em'}}>
    <form onSubmit={props.getWeather}>
      <div className="form-row">
        <div className="form-group col-md-3">
          <input className="form-control" type="text" name="city" placeholder="City" />
        </div>
        <div className="form-group col-md-3">
          <input className="form-control" type="text" name="country" placeholder="Country" />
        </div>
        <div className="form-group col-md-6" style={{textAlign: 'left'}}>
        <button className="btn btn-info">Get Weather</button>
        </div>
      </div>

    </form>
  </div>
);

export default Form;
