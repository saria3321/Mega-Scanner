import React from 'react';
import { Link } from 'react-router-dom';
import { FaCar, FaGavel, FaWarehouse, FaIndustry } from 'react-icons/fa';

const DashboardSidebar = () => {
  return (
    <div className="bg-gray-800 h-screen w-64 flex flex-col text-white">
      {/* Logo Section */}
      <div className="text-2xl font-bold text-center py-6 bg-gray-800">
        <span className="block">MEGA</span>
        <span className="block text-blue-500">SCANNER</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex-1 flex flex-col space-y-6 py-6">
        <li className="px-4 hover:bg-gray-700">
          <Link to="/dealership" className="flex items-center">
            <FaCar className="text-xl mr-2" /> Dealership
          </Link>
        </li>
        <li className="px-4 hover:bg-gray-700">
          <Link to="/auctions" className="flex items-center">
            <FaGavel className="text-xl mr-2" /> Auctions
          </Link>
        </li>
        <li className="px-4 hover:bg-gray-700">
          <Link to="/fleets" className="flex items-center">
            <FaWarehouse className="text-xl mr-2" /> Fleets
          </Link>
        </li>
        <li className="px-4 hover:bg-gray-700">
          <Link to="/assembly-lines" className="flex items-center">
            <FaIndustry className="text-xl mr-2" /> Assembly Lines
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
