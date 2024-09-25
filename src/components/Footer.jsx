import React from 'react';
import { FaYoutube, FaLinkedin, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo and Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center mb-4">
            <div className="text-2xl font-bold">
              <span className="text-blue-500">MEGAS</span>
              <span className="text-white">CANNER</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400"><FaYoutube /></a>
            <a href="#" className="text-white hover:text-gray-400"><FaLinkedin /></a>
            <a href="#" className="text-white hover:text-gray-400"><FaInstagram /></a>
            <a href="#" className="text-white hover:text-gray-400"><FaFacebookF /></a>
            <a href="#" className="text-white hover:text-gray-400"><FaTwitter /></a>
          </div>
          <span className="text-lg mt-3">© All Rights Reserved To MegaScanner 2024</span>
        </div>

        {/* Quick Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">QUICK NAVIGATION</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Our Products</a></li>
            <li><a href="#" className="hover:underline">Automotive</a></li>
            <li><a href="#" className="hover:underline">Security</a></li>
            <li><a href="#" className="hover:underline">Kiosk Program</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Customer Support</a></li>
          </ul>
        </div>

        {/* Our Offices */}
        <div>
          <h3 className="text-lg font-semibold mb-4">OUR OFFICE</h3>
          <ul className="space-y-2">
            <li>Mega Scanner ,Main Road<br />Johr Town,Lahore</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
