import React, { useState } from 'react';

const Undercarriage = () => {
  const [undercarriageOpen, setUndercarriageOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle double-click for full-screen or opening in a new tab
  const handleDoubleClick = () => {
    const imageSrc = '/public/assets/images/undercarriage2.jpg';
    // Option 1: Open in a new tab
    window.open(imageSrc, '_blank');
    // Option 2: Alternatively, you could implement a full-screen modal
    // You can toggle a state for full-screen modal here if needed.
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto"> {/* Expand max width */}
      <button
        className="w-full text-left text-2xl font-semibold text-blue-400"
        onClick={() => setUndercarriageOpen(!undercarriageOpen)}
      >
        Undercarriage {undercarriageOpen ? '-' : '+'}
      </button>
      {undercarriageOpen && (
        <div className="mt-4">
          {/* Moved and enhanced details */}
          <div className="mb-4">
            <h3 className="text-xl font-bold">Undercarriage Condition</h3>
            <p className="text-md"><strong>Condition:</strong> Excellent, with only slight surface wear.</p>
            <p className="text-md">
              <strong>Details:</strong> The undercarriage is in excellent condition with minimal corrosion. Regular maintenance has been carried out, and the protective coatings are intact. 
              No major structural issues observed, ensuring long-term durability.
            </p>
          </div>

          {/* Image with hover effect and double-click handler */}
          <img
            src="/public/assets/images/undercarriage2.jpg"
            alt="Undercarriage"
            className={`w-full h-auto rounded-lg transform transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onDoubleClick={handleDoubleClick} // Handle double-click
          />
        </div>
      )}
    </div>
  );
};

export default Undercarriage;
