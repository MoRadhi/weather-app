const ForecastStrip = ({ hourly }) => {
  if (!hourly) return null;

  return (
    <div className="forecast-strip">
      {hourly.map((item, index) => (
        <div key={index} className="strip-item">
          <span className="text-secondary">{item.time}</span>
          <img src={item.iconUrl} alt="forecast-icon" width="45" />
          <span className="strip-temp">{item.temp}°</span>
        </div>
      ))}
    </div>
  );
};

export default ForecastStrip;
