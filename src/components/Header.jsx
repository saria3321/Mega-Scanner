import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed w-full z-50">
      <nav className="bg-gray-800 px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <span className="text-blue-500">MEGA</span>
          <span className="text-white">SCANNER</span>
        </div>
        <ul className="flex space-x-6 text-white text-lg">
        <li>
            <a href="/assembly-details" className="hover:text-gray-400">
              Demo
            </a>
          </li>
          <li>
            <a href="#dealership" className="hover:text-gray-400">
              Dealership
            </a>
          </li>
          <li>
            <a href="#auctions" className="hover:text-gray-400">
              Auctions
            </a>
          </li>
          <li>
            <a href="#fleets" className="hover:text-gray-400">
              Fleets
            </a>
          </li>
          <li>
            <a href="#assembly-lines" className="hover:text-gray-400">
              Assembly Lines
            </a>
          </li>
        </ul>
        <Link to="/schedule-demo" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
          Schedule a Demo
        </Link>
      </nav>
    </header>
  );
};

export default Header;
