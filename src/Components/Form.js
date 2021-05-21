import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Form = (props) => (
  <div
    className='text-center weather-form'
    style={
      {
        //marginBottom: '2em'
      }
    }
  >
    <form onSubmit={props.getWeather}>
      <div className='form-row'>
        <div className='form-group col-sm-12 col-md-4 col-lg-3 form-group-custom'>
          <input
            className='form-control'
            type='text'
            name='city'
            placeholder='City'
          />
        </div>
        <div className='form-group col-sm-12 col-md-4 col-lg-3 form-group-custom'>
          <input
            className='form-control'
            type='text'
            name='country'
            placeholder='Country'
          />
        </div>
        <div
          className='form-group col-sm-12 col-md-4 col-lg-6 form-group-custom'
          style={{ textAlign: 'left' }}
        >
          <button className='btn btn-info'>
            {props.loadingWeatherInfo ? (
              <>
                {' '}
                <Spinner
                  as='span'
                  animation='border'
                  size='sm'
                  role='status'
                  aria-hidden='true'
                />{' '}
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

export default Form;
