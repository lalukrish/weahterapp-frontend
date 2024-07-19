import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="flex h-10vh justify-between text-white lg:py-5 px-20 py-4 flex-1">
      <div className="flex items-center flex-1">
        <Link to="/" className="text-3xl font-bold cursor-pointer">
          weather app
        </Link>

        <button
          className="lg:hidden flex items-center justify-center p-2 ml-auto"
          onClick={toggleSidebar}
        >
          <span className="text-xl">☰</span>
        </button>

        <div
          className={`fixed top-0 right-0 z-10 h-full w-64 bg-gray-800 text-white transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <button
            className="absolute top-4 right-4 text-2xl"
            onClick={toggleSidebar}
          >
            ×
          </button>
          <ul className="flex flex-col items-center mt-16">
            <li className="py-2 text-xl">
              <Link
                to="/weather-history"
                className="hover:underline"
                onClick={toggleSidebar}
              >
                History
              </Link>
            </li>
            <li className="py-2 text-xl">
              <Link
                to="/news"
                className="hover:underline"
                onClick={toggleSidebar}
              >
                News
              </Link>
            </li>
            <li className="py-2 text-xl">
              <Link
                to="/air-quality"
                className="hover:underline"
                onClick={toggleSidebar}
              >
                About{" "}
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px] cursor-pointer">
              <Link to="/weather-history" className="hover:underline">
                <li>History</li>
              </Link>
              <Link to="/news" className="hover:underline">
                <li>News</li>
              </Link>
              <Link to="/about" className="hover:underline">
                <li>About</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
