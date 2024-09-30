import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import menu and close icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full z-50 bg-gray-800">
      <nav className="px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-blue-500">MEGA</span>
          <span className="text-white">SCANNER</span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button className="text-white text-2xl md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />} {/* Toggle between bars and close icon */}
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static left-0 top-16 w-full md:w-auto md:flex space-x-6 text-white text-lg bg-gray-800 md:bg-transparent md:block transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}
        >
          <li className="md:ml-6 p-4 md:p-0 border-b md:border-none">
            <Link to="/assembly-details" className="hover:text-gray-400 no-underline">
              Demo
            </Link>
          </li>
          <li className="md:ml-6 p-4 md:p-0 border-b md:border-none">
            <Link to="#dealership" className="hover:text-gray-400 no-underline">
              Dealership
            </Link>
          </li>
          <li className="md:ml-6 p-4 md:p-0 border-b md:border-none">
            <Link to="#auctions" className="hover:text-gray-400 no-underline">
              Auctions
            </Link>
          </li>
          <li className="md:ml-6 p-4 md:p-0 border-b md:border-none">
            <Link to="#fleets" className="hover:text-gray-400 no-underline">
              Fleets
            </Link>
          </li>
          <li className="md:ml-6 p-4 md:p-0 border-b md:border-none">
            <Link to="#assembly-lines" className="hover:text-gray-400 no-underline">
              Assembly Lines
            </Link>
          </li>

          {/* Schedule a Demo button - visible only on small screens */}
          <li className="p-4 md:hidden">
            <Link to="/schedule-demo" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 block text-center">
              Schedule a Demo
            </Link>
          </li>
        </ul>

        {/* Schedule a Demo button for larger screens */}
        <Link to="/schedule-demo" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 hidden md:block">
          Schedule a Demo
        </Link>
      </nav>
    </header>
  );
};

export default Header;
