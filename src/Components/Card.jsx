import LineChart from "./LineChart";
import ForecastStrip from "./ForecastStrip";

const Card = ({ currWeather, forecast }) => {
  if (!currWeather) return null;

  return (
    <div className="main-column">
      {/* Hero Section */}
      <div className="hero-container">
        <div className="hero-text-group">
          <h1 className="hero-city">{currWeather.name}</h1>
          <p className="hero-chance">
            Current Weather:{" "}
            {`${currWeather.weather[0].main}, ${currWeather.weather[0].description}`}
          </p>
          <h2 className="hero-temp">{Math.round(currWeather.main.temp)}°</h2>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${currWeather.weather[0].icon}@4x.png`}
          className="hero-icon"
          alt="weather"
        />
      </div>

      {/* Middle Card: Chart */}
      <div className="weather-card chart-card">
        <h3 className="section-title">Today's Forecast</h3>
        <div className="chart-container">
          <LineChart forecast={forecast} />
        </div>
        <ForecastStrip hourly={forecast} />
      </div>

      {/* Bottom Card: Air Conditions */}
      <div className="weather-card air-card">
        <div className="flex-between">
          <h3 className="section-title">Air Conditions</h3>
        </div>
        <div className="air-conditions-grid">
          <div className="condition-item">
            <p className="condition-label">🌡️ Real Feel</p>
            <p className="condition-value">
              {Math.round(currWeather.main.feels_like)}°
            </p>
          </div>
          <div className="condition-item">
            <p className="condition-label">💨 Wind</p>
            <p className="condition-value">{currWeather.wind.speed} km/h</p>
          </div>
          <div className="condition-item">
            <p className="condition-label">💧 Humidity</p>
            <p className="condition-value">{currWeather.main.humidity}%</p>
          </div>
          <div className="condition-item">
            <p className="condition-label">☀️ Pressure</p>
            <p className="condition-value">{currWeather.main.pressure}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
