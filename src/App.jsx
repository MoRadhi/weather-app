import { useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./Components/Card";
import Table from "./Components/Table";
import { formatTime, formatDay, getIconUrl } from "./utils";

function App() {
  const [cityName, setCityName] = useState("");
  const [currWeather, setCurrWeather] = useState(null);
  const [forecast, setForecast] = useState({ hourly: [], daily: [] });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const geoRes = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=7c253c8497285303ce6ae35736024d7f`,
      );
      const { lat, lon } = geoRes.data[0];

      const [currRes, foreRes] = await Promise.all([
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=7c253c8497285303ce6ae35736024d7f`,
        ),
        axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=7c253c8497285303ce6ae35736024d7f`,
        ),
      ]);

      setCurrWeather(currRes.data);

      const list = foreRes.data.list;

      //Format hourly
      const hourly = list.slice(0, 7).map((item) => ({
        time: formatTime(item.dt),
        temp: Math.round(item.main.temp),
        iconUrl: getIconUrl(item.weather[0].icon),
      }));

      // Format 5-day
      const daily = list
        .filter((f) => f.dt_txt.includes("12:00:00"))
        .map((item) => ({
          day: formatDay(item.dt),
          condition: item.weather[0].main,
          tempMax: Math.round(item.main.temp_max),
          tempMin: Math.round(item.main.temp_min),
          iconUrl: getIconUrl(item.weather[0].icon),
        }));

      setForecast({ hourly: hourly, daily: daily });
    } catch (err) {
      console.error("Fetching Error", err);
    }
  };

  return (
    <div className="app-container">
      <div className="search-wrapper">
        <form onSubmit={handleSubmit}>
          <input
            className="search-input"
            type="text"
            placeholder="Search for cities"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
        </form>
      </div>

      {currWeather && (
        <div className="dashboard-grid">
          <Card currWeather={currWeather} forecast={forecast.hourly} />
          <Table daily={forecast.daily} />
        </div>
      )}
    </div>
  );
}

export default App;
