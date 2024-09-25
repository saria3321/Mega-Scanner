import React, { useState } from 'react';
import Modal from 'react-modal';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Modal styles for small pop-up
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '60%', // Smaller size for the pop-up
    maxHeight: '80%', // Limit height for better UI
    overflow: 'auto',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

const TireDetails = () => {
  const [tireDetailsOpen, setTireDetailsOpen] = useState(false);
  const [isGraphOpen, setIsGraphOpen] = useState(false);

  // Sample graph data
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Tire Performance',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Tire Performance Over Time',
      },
    },
  };

  // Array of tire positions
  const tirePositions = ['Front Left', 'Front Right', 'Back Left', 'Back Right'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <button
        className="w-full text-left text-2xl font-semibold text-blue-400"
        onClick={() => setTireDetailsOpen(!tireDetailsOpen)}
      >
        Tire Details {tireDetailsOpen ? '-' : '+'}
      </button>
      {tireDetailsOpen && (
        <div className="grid grid-cols-2 gap-4 mt-4">
          {tirePositions.map((position, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md relative">
              <h4 className="font-semibold">{position}</h4>
              <button
                onClick={() => setIsGraphOpen(true)}
                className="bg-blue-500 text-white px-2 py-1 text-xs rounded-lg absolute top-2 right-2"
              >
                Show Details
              </button>
              <img
                src="/public/assets/images/car tier.jpeg"
                alt={`Tire ${index + 1}`}
                className="w-full h-auto rounded-lg mt-6" // Moved the image down
              />
              <ul className="mt-2 text-sm">
                <li><strong>Tire Brand:</strong> MICHELIN</li>
                <li><strong>Tire Size:</strong> 285/60R18</li>
                <li><strong>Tire Age:</strong> 2.4y (0722)</li>
                <li><strong>Speed & Load:</strong> 120V</li>
                <li><strong>Tread Depth:</strong> ✔</li>
                <li><strong>Uneven Tread:</strong> ✔</li>
                <li><strong>Tire Pressure:</strong> ✔</li>
                <li><strong>Surface Damage:</strong> ✔</li>
              </ul>
            </div>
          ))}
        </div>
      )}

      <Modal
        isOpen={isGraphOpen}
        onRequestClose={() => setIsGraphOpen(false)}
        style={customStyles} // Use custom styles for smaller modal
        contentLabel="Tire Performance Graph"
      >
        <h2 className="text-center text-xl mb-4">Tire Performance Graph</h2>
        <div className="chart-container">
          <Line data={data} options={options} />
        </div>
        <button
          onClick={() => setIsGraphOpen(false)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 mx-auto block"
        >
          Close Graph
        </button>
      </Modal>
    </div>
  );
};

export default TireDetails;
