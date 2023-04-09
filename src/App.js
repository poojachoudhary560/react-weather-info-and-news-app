import React, { Fragment, useEffect, useState } from "react";
import Title from "./Components/title/Title";
import WeatherForm from "Components/weatherForm/WeatherForm";
import WeatherDisplay from "Components/weatherDisplay/WeatherDisplay";
import News from "Components/news/News";
import Spinner from "react-bootstrap/Spinner";
import Footer from "Components/footer/Footer";

function App() {
  const defaultWeatherVal = {
    temperature: "",
    humidity: "",
    description: "",
    icon_url: "",
    wind: {
      speed: "",
      degrees: "",
    },
  };
  const defaultState = {
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
  const [newsData, setNewsData] = useState([]);
  const [weatherData, setWeatherData] = useState({
    ...defaultState,
    error: "",
    loadingWeatherInfo: false,
    city: "",
    country: "",
  });

  const fetchNews1 = async () => {
    const api_call_weather = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=weather&api-key=${process.env.REACT_APP_NEWS_API_KEY}`
    );
    // https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=weather&apiKey=e89d2fc5e34148e08a17b9b6f987bcab
    const data_weather = await api_call_weather.json();
    setNewsData(data_weather.response.docs);
  };

  const getWeather = async () => {
    const { city, country } = weatherData;
    try {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      const data = await api_call.json();
      if (data.cod === 404 || data.cod === "404") {
        let newState = {
          error: data.message
            ? data.message.charAt(0).toUpperCase() + data.message.slice(1)
            : "Error",
          loadingWeatherInfo: false,
        };

        setWeatherData((prevState) => ({
          ...prevState,
          ...newState,
          error: "Enter valid input",
          loadingWeatherInfo: false,
        }));
      }
      if (data.cod === 200 || data.cod === "200") {
        setWeatherData((prevState) => ({
          ...prevState,
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
        }));
      }
    } catch (e) {
      setWeatherData({
        ...defaultWeatherVal,
        error: e.message || "Error",
        loadingWeatherInfo: false,
      });
    }
  };

  const getWeatherData = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if (city === "" && country === "") {
      setWeatherData((prevState) => ({
        ...prevState,
        ...defaultWeatherVal,
        error: "Enter valid input",
      }));
    } else {
      setWeatherData((prevState) => ({
        ...prevState,
        defaultWeatherVal,
        loadingWeatherInfo: true,
        city,
        country,
        error: "",
      }));
    }
  };

  useEffect(() => {
    fetchNews1();
  }, []);

  useEffect(() => {
    if (
      weatherData.loadingWeatherInfo &&
      (weatherData.city === "" || weatherData.country === "")
    ) {
      getWeather();
    }
  }, [weatherData.city, weatherData.country, weatherData.loadingWeatherInfo]);

  return (
    <Fragment>
      <Title />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <WeatherForm
              getWeather={getWeatherData}
              loadingWeatherInfo={weatherData.loadingWeatherInfo}
            />

            <WeatherDisplay
              temperature={weatherData.temperature}
              city={weatherData.city}
              country={weatherData.country}
              humidity={weatherData.humidity}
              description={weatherData.description}
              error={weatherData.error}
              icon_url={weatherData.icon_url}
              wind={weatherData.wind}
            />
          </div>
          <div className="col=xs-12 col-sm-6 col-md-6 col-lg-6"></div>
        </div>
      </div>
      <div className="container">
        {newsData.length > 0 ? (
          <News articles={newsData} />
        ) : (
          <div className="custom-spinner text-center">
            <Spinner animation="border" variant="info" />
          </div>
        )}
      </div>
      {newsData.length > 0 && <Footer />}
    </Fragment>
  );
}

export default App;
