import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const WeatherDetails = () => {
  const location = useLocation();
  const { weatherData } = location.state || {};
  const [data, setData] = useState(weatherData);

  useEffect(() => {
    setData(weatherData || null);
  }, [weatherData]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4">Detailed Weather Information</h1>
      {data ? (
        <div className="mt-4">
          <table className="min-w-full bg-gray-800 border border-gray-600">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left text-gray-400">
                  Attribute
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-400">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Feels Like</td>
                <td className="py-2 px-4 border-b">{data.main.feels_like}K</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Min Temperature</td>
                <td className="py-2 px-4 border-b">{data.main.temp_min}K</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Max Temperature</td>
                <td className="py-2 px-4 border-b">{data.main.temp_max}K</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Pressure</td>
                <td className="py-2 px-4 border-b">{data.main.pressure} hPa</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Humidity</td>
                <td className="py-2 px-4 border-b">{data.main.humidity}%</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Visibility</td>
                <td className="py-2 px-4 border-b">{data.visibility} meters</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Wind Speed</td>
                <td className="py-2 px-4 border-b">{data.wind.speed} m/s</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Wind Gust</td>
                <td className="py-2 px-4 border-b">{data.wind.gust} m/s</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Clouds</td>
                <td className="py-2 px-4 border-b">{data.clouds.all}%</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Sunrise</td>
                <td className="py-2 px-4 border-b">
                  {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Sunset</td>
                <td className="py-2 px-4 border-b">
                  {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p>No weather data available.</p>
      )}
    </div>
  );
};

export default WeatherDetails;
