import { useState, useEffect } from 'react';
import './App.css';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
  dt: number;
}

function App() {
  const [city, setCity] = useState('Paris');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        const apiKey = 'YOUR_OPENWEATHER_API_KEY'; // Remplacez par votre clé API
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=fr`
        );
        
        if (!response.ok) {
          throw new Error('Ville non trouvée');
        }
        
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError('Impossible de récupérer les données météo. Vérifiez le nom de la ville.');
        console.error('Erreur:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      setCity(search);
    }
  };

  const getWeatherIcon = (iconCode: string) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="app">
        <div className="loading">Chargement des données météo...</div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="container">
        <h1>Météo Actuelle</h1>
        
        <form onSubmit={handleSearch} className="search-box">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Entrez une ville..."
          />
          <button type="submit">Rechercher</button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {weather && !error && (
          <div className="weather-card">
            <div className="weather-header">
              <h2>
                {weather.name}, {weather.sys.country}
              </h2>
              <p className="date">{formatDate(weather.dt)}</p>
            </div>

            <div className="weather-main">
              <div className="temperature">
                <img 
                  src={getWeatherIcon(weather.weather[0].icon)} 
                  alt={weather.weather[0].description} 
                />
                <span>{Math.round(weather.main.temp)}°C</span>
              </div>
              <p className="description">
                {weather.weather[0].description.charAt(0).toUpperCase() + 
                 weather.weather[0].description.slice(1)}
              </p>
            </div>

            <div className="weather-details">
              <div className="detail">
                <span>Ressenti</span>
                <span>{Math.round(weather.main.feels_like)}°C</span>
              </div>
              <div className="detail">
                <span>Humidité</span>
                <span>{weather.main.humidity}%</span>
              </div>
              <div className="detail">
                <span>Vent</span>
                <span>{Math.round(weather.wind.speed * 3.6)} km/h</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App
