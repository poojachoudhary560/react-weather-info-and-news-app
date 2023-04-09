import React, { Component, Fragment } from "react";
import Title from "./Components/title/Title";
import WeatherForm from "Components/weatherForm/WeatherForm";
import WeatherDisplay from "Components/weatherDisplay/WeatherDisplay";
import News from "Components/news/News";
import Spinner from "react-bootstrap/Spinner";
import Footer from "Components/footer/Footer";
// import Footer from "Components/footer/Footer";

class App extends Component {
  state = {
    defaultWeatherVal: {
      temperature: "",
      city: "",
      country: "",
      humidity: "",
      description: "",
      icon_url: "",
      wind: {
        speed: "",
        degrees: "",
      },
    },
    loadingWeatherInfo: false,
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    icon_url: "",
    wind: {
      speed: "",
      degrees: "",
    },
    newsData: [],
    error: "",
  };

  componentDidUpdate() {
    const { city, country } = this.state;
    if (this.state.loadingWeatherInfo) {
      if (city === "" && country === "") {
        let newState = {
          error: "Enter valid input",
          loadingWeatherInfo: false,
        };
        if (this.state.temperature) {
          newState = { ...this.state.defaultWeatherVal };
        }
        this.setState(newState);
      } else {
        this.getWeather();
      }
    }
  }
  fetchNews1 = async () => {
    const api_call_weather = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=weather&api-key=${process.env.REACT_APP_NEWS_API_KEY}`
    );
    // https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=weather&apiKey=e89d2fc5e34148e08a17b9b6f987bcab
    const data_weather = await api_call_weather.json();
    this.setState({
      // newsData: data_weather.articles
      newsData: data_weather.response.docs,
    });
  };
  getWeather = async () => {
    const { city, country } = this.state;

    try {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      const data = await api_call.json();

      if (data.cod === 404) {
        let newState = {
          error: data.message
            ? data.message.charAt(0).toUpperCase() + data.message.slice(1)
            : "Error",
          loadingWeatherInfo: false,
        };
        if (this.state.temperature) {
          newState = { ...this.state.defaultWeatherVal };
        }
        this.setState(newState);
      }
      if (data.cod === 200) {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: "",
          wind: {
            speed: data.wind.speed,
            degrees: data.wind.deg,
          },
          loadingWeatherInfo: false,

          icon_url: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        });
      }
    } catch (e) {
      let newState = {
        error: e.message || "Error",
        loadingWeatherInfo: false,
      };
      if (this.state.temperature) {
        newState = { ...this.state.defaultWeatherVal };
      }
      this.setState(newState);
    }
  };

  getWeatherData = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    this.setState({
      loadingWeatherInfo: true,
      city,
      country,
    });
  };

  componentDidMount() {
    this.fetchNews1();
  }
  render() {
    return (
      <Fragment>
        <Title />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <WeatherForm
                getWeather={this.getWeatherData}
                loadingWeatherInfo={this.state.loadingWeatherInfo}
              />

              <WeatherDisplay
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
                icon_url={this.state.icon_url}
                wind={this.state.wind}
              />
            </div>
            <div className="col=xs-12 col-sm-6 col-md-6 col-lg-6"></div>
          </div>
        </div>
        <div className="container">
          {this.state.newsData.length > 0 ? (
            <News articles={this.state.newsData} />
          ) : (
            <div className="custom-spinner text-center">
              <Spinner animation="border" variant="info" />
            </div>
          )}
        </div>
        {this.state.newsData.length > 0 && <Footer />}
      </Fragment>
    );
  }
}

export default App;
