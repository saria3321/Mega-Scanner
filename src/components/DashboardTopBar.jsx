import React from 'react';
import { FaBell, FaSearch, FaUserCircle, FaGlobe } from 'react-icons/fa';

const DashboardTopBar = ({ toggleSidebar }) => {
  return (
    <div className="bg-gray-800 text-white flex justify-between items-center px-4 py-2 shadow-md">
      {/* Left side (Dashboard text) */}
      <div className="flex items-center space-x-2">
        <button
          onClick={toggleSidebar}
          className="text-2xl focus:outline-none hover:bg-gray-700 p-2 rounded-md"
        >
          &#9776; {/* Hamburger icon for sidebar toggle */}
        </button>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>

      {/* Right side (Profile, Bell, Language, Search) */}
      <div className="flex items-center space-x-4">
        {/* Search Icon */}
        <button className="relative">
          <FaSearch className="text-xl hover:text-gray-400" />
        </button>

        {/* Language Selector */}
        <button className="relative">
          <FaGlobe className="text-xl hover:text-gray-400" />
        </button>

        {/* Bell Icon with Notification Badge */}
        <button className="relative">
          <FaBell className="text-xl hover:text-gray-400" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>

        {/* Profile Icon */}
        <button className="relative">
          <FaUserCircle className="text-2xl hover:text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default DashboardTopBar;
