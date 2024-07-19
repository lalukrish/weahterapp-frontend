import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

const Home = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = () => {
    if (location) {
      axios
        .get(`${process.env.VITE_API_POINT}/weather`, { params: { location } })
        .then((res) => {
          setWeatherData(res.data);
          console.log("Weather data:", res.data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-4">
      <div className="mb-8 md:hidden lg:hidden">
        <img src="/assets/download_56.241322314047274.svg" alt="Weather" />
      </div>
      <div className="mb-8 hidden md:flex lg:flex justify-center">
        <img
          src="/assets/download_56.241322314047274.svg"
          alt="Weather"
          className="w-96 h-96"
        />
      </div>

      <div className="relative w-80 max-w-md mb-8">
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-3 pr-16 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
        <button
          onClick={fetchWeatherData}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>

      {weatherData && (
        <div className="text-white mb-8">
          <h1 className="text-2xl font-bold">Weather Information:</h1>
          <p>Temperature: {weatherData.main.temp}K</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <Link
            to="/weather-details"
            state={{ weatherData }}
            className="mt-4 inline-block p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Go More Information
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
