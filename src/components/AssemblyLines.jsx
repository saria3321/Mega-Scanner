import React from 'react';
import { Link } from 'react-router-dom';

const AssemblyLines = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center group"
      style={{
        backgroundImage: `url('public/assets/images/assembly line.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-40 group-hover:bg-black group-hover:opacity-60 transition-all duration-500"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl font-bold text-black group-hover:text-white transition-colors duration-500">
          ASSEMBLY LINES.
        </h1>
        <Link to="" className="text-lg text-black group-hover:text-white transition-colors duration-500 mt-4">
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default AssemblyLines;
