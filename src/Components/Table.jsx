const Table = ({ daily }) => {
  if (!daily || daily.length === 0) return null;

  return (
    <div className="sidebar-column">
      <div className="weather-card full-height-card">
        <h3 className="section-title">5-Day Forecast</h3>
        <div className="forecast-list">
          {daily.map((item, index) => (
            <div key={index} className="forecast-row">
              <span className="day-label">
                {index === 0 ? "Today" : item.day}
              </span>

              <div className="status-group">
                <img src={item.iconUrl} width="40" alt="icon" />
                <span className="condition-text">{item.condition}</span>
              </div>

              <div className="temp-range">
                <span className="temp-max">{item.tempMax}°</span>
                <span className="temp-min">/{item.tempMin}°</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
