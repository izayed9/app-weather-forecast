import React from "react";

interface CurrentWeatherProps {
  data: {
    city: string;
    weather: {
      description: string;
      icon: string;
    }[];
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
      pressure: number;
    };
    wind: {
      speed: number;
    };
  };
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data }) => {
  return (
    <div className="weather bg-gray-100 p-4 rounded-md">
      <div className="top flex items-center justify-between">
        <div>
          <p className="city font-bold">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon w-12 h-12"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom mt-4">
        <p className="temperature text-4xl font-bold">
          {Math.round(data.main.temp)}°C
        </p>
        <div className="details mt-4">
          <div className="parameter-row">
            <span className="parameter-label font-bold">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
