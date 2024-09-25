import React from 'react';

const Fleets = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center group"
      style={{
        backgroundImage: `url('public/assets/images/pexels-aaronmcurtis-119435.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-40 group-hover:bg-black group-hover:opacity-60 transition-all duration-500"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl font-bold text-black group-hover:text-white transition-colors duration-500">
          FLEETS.
        </h1>
        <p className="text-lg text-black group-hover:text-white transition-colors duration-500 mt-4">
          Learn more
        </p>
      </div>
    </div>
  );
};

export default Fleets;
