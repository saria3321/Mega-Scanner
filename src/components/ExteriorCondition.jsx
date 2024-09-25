import React, { useState } from 'react';

const ExteriorCondition = () => {
  const [exteriorConditionOpen, setExteriorConditionOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto"> {/* Expand max width */}
      <button
        className="w-full text-left text-2xl font-semibold text-blue-400"
        onClick={() => setExteriorConditionOpen(!exteriorConditionOpen)}
      >
        Exterior Condition {exteriorConditionOpen ? '-' : '+'}
      </button>
      {exteriorConditionOpen && (
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Fender Front Right</h4>
            <p>Dent</p>
            <img src="/public/assets/images/car dent.jpeg" alt="Fender Front Right Dent" className="w-full h-48 object-cover rounded-lg mt-2" />
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Fender Front Right</h4>
            <p>Scratch</p>
            <img src="/public/assets/images/scratch1.jpeg" alt="Fender Front Right Scratch" className="w-full h-48 object-cover rounded-lg mt-2" />
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Fender Rear Right</h4>
            <p>Scratch</p>
            <img src="/public/assets/images/rear right.jpeg" alt="Fender Rear Right Scratch" className="w-full h-48 object-cover rounded-lg mt-2" />
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Rear Bumper</h4>
            <p>Scratch</p>
            <img src="/public/assets/images/bumper.jpeg" alt="Rear Bumper Scratch" className="w-full h-48 object-cover rounded-lg mt-2" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ExteriorCondition;
