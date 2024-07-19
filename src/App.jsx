import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import WeatherDetails from "./pages/weatherData";
import WeatherHistory from "./pages/history";

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-b from-[#080808] via-[#312c23] via-10% to-slate-900 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/weather-details" element={<WeatherDetails />} />
          <Route path="/weather-history" element={<WeatherHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
