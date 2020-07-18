import React, { Component, Fragment } from 'react';
import Title from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';
import News from './Components/News'
const API_KEY = "38743f25f2ff3cf113a5e8b337332a2d";

class App extends Component{
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon_url: '',
    wind: {
      speed: '',
      degrees: ''
    },
    error: undefined

  }
  fetchNews1 = async () => {
    const api_call_weather = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=weather&api-key=daDJsGGLCKI6XxnmkAtGVzQR6jeGcIa5`);
    // https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=weather&apiKey=e89d2fc5e34148e08a17b9b6f987bcab
    const data_weather = await api_call_weather.json();
    this.setState({
      // newsData: data_weather.articles
      newsData: data_weather.response.docs
    });
    console.log("-------------------");
    console.log(data_weather);
    console.log(data_weather.response.docs.length);
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    if(city && country){
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: '',
        wind: {
          speed: data.wind.speed,
          degrees: data.wind.deg
        },
        icon_url: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      })
    }else{
      this.setState({
        error: "Please enter the values"
      })
    }
  }
  fetchNews = () => {
    fetch(`https://newsapi.org/v2/everything?q=weather&apiKey=e89d2fc5e34148e08a17b9b6f987bcab`)
    .then(response => response.json())
    .then(data => this.setState({
      hits:data
    }, console.log("abc  "+this.state.hits)))
    .catch(console.log("error"));
  }
  componentDidMount(){
    this.fetchNews1();

  }
  render(){
    return(
      <Fragment>
        <Title />
        <div className="container">
          <div className="row">
            <div className="col=xs-12 col-sm-12 col-md-12 col-lg-12">
            <Form getWeather={this.getWeather}/>
            <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
            icon_url = {this.state.icon_url}
            wind = {this.state.wind}
            />
            </div>
            <div className="col=xs-12 col-sm-6 col-md-6 col-lg-6">

            </div>
          </div>
        </div>
        <div className="container">
          { this.state.newsData && <News articles={this.state.newsData}/> }
        </div>
      </Fragment>

    );
  }
}

export default App;