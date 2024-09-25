import React, { useState } from 'react';

const VehicleInfo = () => {
  const [vehicleInfoOpen, setVehicleInfoOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto"> {/* Expand max width */}
      <button
        className="w-full text-left text-2xl font-semibold text-blue-400"
        onClick={() => setVehicleInfoOpen(!vehicleInfoOpen)}
      >
        Vehicle Info {vehicleInfoOpen ? '-' : '+'}
      </button>
      {vehicleInfoOpen && (
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div><strong>Plate No:</strong> JDA5677</div>
          <div><strong>Plate State:</strong> NC</div>
          <div><strong>VIN:</strong> JTMCY7AJ8M4102036</div>
          <div><strong>Make:</strong> TOYOTA</div>
          <div><strong>Model:</strong> Land Cruiser</div>
          <div><strong>Body:</strong> SUV/MPV</div>
          <div><strong>Color:</strong> Unknown</div>
          <div><strong>Year:</strong> 2021</div>
        </div>
      )}
    </div>
  );
};

export default VehicleInfo;
