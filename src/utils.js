// Helper to get formatted time
export const formatTime = (dt) =>
  new Date(dt * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

// Helper to get day name
export const formatDay = (dt) =>
  new Date(dt * 1000).toLocaleDateString("en-US", {
    weekday: "short",
  });

// Helper to generate the icon URL
export const getIconUrl = (icon) =>
  `https://openweathermap.org/img/wn/${icon}@2x.png`;
