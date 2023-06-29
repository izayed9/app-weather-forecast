import { useState } from "react";
import { weatherApiKey, WEATHER_API_URL } from "./api";
import CurrentWeather from "./components/current-weather";
import Forecast from "./components/forecast";
import Mehan from "./components/mehan";
import Search from "./components/search";

function App() {
  const [currentWeather, setCurrentWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any>(null);

  const handleOnSearchChange = (searchData: any) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        console.log("wea", weatherResponse);
        console.log("for", forecastResponse);
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch(console.log);
  };

  return (
    <main className="items-center justify-between text-center p-10">
      <h1 className="text-3xl py-5">
        A weather forecast application using React Tailwind CSS And Typescript
      </h1>
      <Mehan/>
      <p className="text-x pt-5 pb-8">The application should allow users to search for a location <br /> Displaythe current weather conditions as well as the forecast for the next few days.</p>
      <Search  onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </main>
  );
}

export default App;
