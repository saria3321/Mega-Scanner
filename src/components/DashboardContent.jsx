import React from 'react';
import { Link } from 'react-router-dom';
import { FaCar, FaGavel, FaWarehouse, FaIndustry } from 'react-icons/fa';

const DashboardContent = () => {
  return (
    <div className="flex-1 p-8 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Dealership Card */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <Link to="/dealership">
            <FaCar className="text-blue-500 text-6xl mb-4 mx-auto" />
            <h2 className="text-xl font-semibold text-gray-700">Dealership</h2>
          </Link>
        </div>

        {/* Auctions Card */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <Link to="/auctions">
            <FaGavel className="text-blue-500 text-6xl mb-4 mx-auto" />
            <h2 className="text-xl font-semibold text-gray-700">Auctions</h2>
          </Link>
        </div>

        {/* Fleets Card */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <Link to="/fleets">
            <FaWarehouse className="text-blue-500 text-6xl mb-4 mx-auto" />
            <h2 className="text-xl font-semibold text-gray-700">Fleets</h2>
          </Link>
        </div>

        {/* Assembly Lines Card */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <Link to="/assembly-lines">
            <FaIndustry className="text-blue-500 text-6xl mb-4 mx-auto" />
            <h2 className="text-xl font-semibold text-gray-700">Assembly Lines</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
