import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherHistory = () => {
  const [historyData, setHistoryData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHistoryData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.VITE_API_POINT}/weather-history`,
        {
          params: { startDate, endDate },
        }
      );
      setHistoryData(response.data);
    } catch (error) {
      setError("Error fetching weather history");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistoryData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchHistoryData();
  };

  const handleClearDates = () => {
    setStartDate("");
    setEndDate("");
    fetchHistoryData();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-4">Weather History</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
          <div className="flex flex-col">
            <label htmlFor="startDate" className="text-gray-400">
              Start Date:
            </label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="p-2 border border-gray-600 rounded bg-gray-800 text-white"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="endDate" className="text-gray-400">
              End Date:
            </label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="p-2 border border-gray-600 rounded bg-gray-800 text-white"
            />
          </div>
          <button
            type="submit"
            className="p-2 bg-blue-600 rounded hover:bg-blue-700"
          >
            Filter
          </button>
          <button
            type="button"
            onClick={handleClearDates}
            className="p-2 bg-red-600 rounded hover:bg-red-700"
          >
            Clear Dates
          </button>
        </div>
      </form>
      {loading && <p className="text-gray-400">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {historyData.length > 0 ? (
        <div className="mt-4 w-full overflow-x-auto">
          <table className="min-w-full bg-gray-800 border border-gray-600 table-auto">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left text-gray-400">
                  Place
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-400">
                  Feels Like
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-400">
                  Min Temperature
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-400">
                  Max Temperature
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-400">
                  Pressure
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-400">
                  Humidity
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-400">
                  Visibility
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-400">
                  Wind Speed
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-400">
                  Wind Gust
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-400">
                  Clouds
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-400">
                  Sunrise
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-400">
                  Sunset
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-400">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {historyData.map((item) => (
                <tr key={item._id}>
                  <td className="py-2 px-4 border-b">{item.name}</td>
                  <td className="py-2 px-4 border-b">
                    {item.main.feels_like}K
                  </td>
                  <td className="py-2 px-4 border-b">{item.main.temp_min}K</td>
                  <td className="py-2 px-4 border-b">{item.main.temp_max}K</td>
                  <td className="py-2 px-4 border-b">
                    {item.main.pressure} hPa
                  </td>
                  <td className="py-2 px-4 border-b">{item.main.humidity}%</td>
                  <td className="py-2 px-4 border-b">
                    {item.visibility} meters
                  </td>
                  <td className="py-2 px-4 border-b">{item.wind.speed} m/s</td>
                  <td className="py-2 px-4 border-b">
                    {item.wind.gust || "N/A"} m/s
                  </td>
                  <td className="py-2 px-4 border-b">{item.clouds.all}%</td>
                  <td className="py-2 px-4 border-b">
                    {new Date(item.sys.sunrise * 1000).toLocaleTimeString()}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {new Date(item.sys.sunset * 1000).toLocaleTimeString()}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No weather history available.</p>
      )}
    </div>
  );
};

export default WeatherHistory;
