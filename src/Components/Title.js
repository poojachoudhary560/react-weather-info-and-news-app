import React from 'react';
import { WiDayLightning } from 'weather-icons-react';
import '../App.css';
const Title = () => (
  <div
    className='titles bg-info text-white text-center'
    style={{ paddingTop: '2em', paddingBottom: '1em' }}
  >
    <h1>
      WeatherFinder <WiDayLightning size={50} color='#fff' />
    </h1>
    <p>Find out temperature conditions, weather news and more</p>
  </div>
);

export default Title;
