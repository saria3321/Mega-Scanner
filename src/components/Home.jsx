import React from 'react';
import DealershipSection from './DealershipSection'; // Import the components
import Auctions from './Auction';
import Fleets from './Fleets';
import AssemblyLines from './AssemblyLines';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="w-full relative">
      {/* Background video element */}
      <video
        className="w-full h-screen object-cover absolute top-0 left-0"
        src="/public/assets/videos/R35 GTR EDIT_ 4K.mp4"  // Replace with the actual video file path
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Centered content */}
      <div className="relative z-10 flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="text-white text-5xl font-bold mb-4">SOLUTIONS</div>
        </div>
      </div>

      {/* Optional: Dark overlay to enhance text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Dealership Section */}
      <div id="dealership" className="">
        <DealershipSection /> {/* Render the DealershipSection component */}
      </div>

      {/* Auctions Section */}
      <div id="auctions">
        <Auctions /> {/* Render the Auctions component */}
      </div>

      {/* Fleets Section */}
      <div id="fleets">
        <Fleets /> {/* Render the Fleets component */}
      </div>

      {/* Assembly Lines Section */}
      <div id="assembly-lines">
        <AssemblyLines /> {/* Render the AssemblyLines component */}
      </div>
    </div>
  );
};

export default Home;
