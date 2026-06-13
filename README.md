# Weather App

A responsive React weather application that fetches and displays real-time weather conditions and forecasts for any location. Built with a live weather API and clean component-based architecture.

🔗 **Live Demo:** https://moradhi.github.io/weather-app/

---
 
## Screenshots
 
<div align="center">
<img width="800" alt="weather-dashboard" src="https://github.com/user-attachments/assets/7fb543c8-5618-4308-8967-7df4b0f5fa16" />

 
</div>
 
---

## Features

- 🔍 **Location Search** — look up current weather for any city
- 🌤️ **Live Weather Data** — real-time conditions fetched from a weather API
- 🌡️ **Forecast Display** — temperature, weather description, humidity, and wind data
- ⚡ **React State Management** — clean component state handling for search and results
- 📱 **Responsive Design** — works cleanly across desktop and mobile

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, Vite |
| External API | Weather API (OpenWeatherMap or similar) |
| Styling | CSS |
| Deployment | GitHub Pages |

---

## Getting Started

### Prerequisites

- Node.js (v18 or above recommended)
- A weather API key ([OpenWeatherMap](https://openweathermap.org/api) offers a free tier)

### Installation

```bash
git clone https://github.com/MoRadhi/weather-app.git
cd weather-app
npm install
```

### Environment Variables

Create a `.env` file in the root of the project:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
src/
├── components/       # WeatherCard, SearchBar, ForecastDisplay
├── App.jsx           # Root component, state management
└── index.css         # Global styles
```

---

## Deployment

Deployed to GitHub Pages via the `gh-pages` package.

```bash
npm run build
npm run deploy
```
