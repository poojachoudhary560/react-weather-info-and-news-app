import React, { Component } from 'react';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tempUnit: 'k',
      temp: '11'
    };
  }
  componentWillReceiveProps(newProps) {
    if (newProps.temperature !== this.state.temp) {
      this.setState({
        temp: newProps.temperature
      });
    }
  }
  handleClick = (unit) => {
    if (this.state.tempUnit !== unit) {
      let t = 0;
      if (unit === 'c') {
        t = this.state.temp - 273.15;
      }
      if (unit === 'k') {
        t = this.state.temp + 273.15;
      }
      this.setState({
        temp: t,
        tempUnit: unit
      });
    }
  };
  render() {
    return (
      <div className='weather-info'>
        <div className='row' style={{ flexDirection: 'column' }}>
          {this.props.city && this.props.country && (
            <p style={{ fontSize: '1.5em' }}>
              {this.props.city}, {this.props.country}
            </p>
          )}

          {this.props.description && <p>{this.props.description}</p>}
        </div>
        <div className='row'>
          <div className='col-md-1'>
            {this.props.icon_url && (
              <img src={this.props.icon_url} alt='icon' />
            )}
          </div>
          <div className='col-md-3' style={{ paddingTop: '1em' }}>
            {this.props.temperature && (
              <>
                <span style={{ fontSize: '45px' }}>{this.state.temp} </span>
                {this.state.tempUnit === 'k' ? (
                  <span
                    onClick={() => this.handleClick('k')}
                    style={{
                      cursor: this.state.tempUnit === 'k' ? 'none' : 'pointer',
                      color: this.state.tempUnit === 'k' ? '' : 'blue'
                    }}
                  >
                    {' '}
                    K{' '}
                  </span>
                ) : (
                  <span
                    onClick={() => this.handleClick('c')}
                    style={{
                      cursor: this.state.tempUnit === 'c' ? 'none' : 'pointer',
                      color: this.state.tempUnit === 'c' ? '' : 'blue'
                    }}
                  >
                    {' '}
                    &#8451;{' '}
                  </span>
                )}
                |
                {this.state.tempUnit === 'c' ? (
                  <span
                    onClick={() => this.handleClick('k')}
                    style={{
                      cursor: this.state.tempUnit === 'k' ? 'none' : 'pointer',
                      color: this.state.tempUnit === 'k' ? '' : 'blue'
                    }}
                  >
                    {' '}
                    K{' '}
                  </span>
                ) : (
                  <span
                    onClick={() => this.handleClick('c')}
                    style={{
                      cursor: this.state.tempUnit === 'c' ? 'none' : 'pointer',
                      color: this.state.tempUnit === 'c' ? '' : 'blue'
                    }}
                  >
                    {' '}
                    &#8451;{' '}
                  </span>
                )}
              </>
            )}
          </div>
          <div className='col-md-3' style={{ paddingTop: '1em' }}>

            {this.props.humidity && <p>Humidity: {this.props.humidity}%</p>}
            {this.props.wind.speed && (
              <p>Wind Speed: {this.props.wind.speed} m/s</p>
            )}

          </div>
          <div className='col-md-5'></div>
        </div>

        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;
