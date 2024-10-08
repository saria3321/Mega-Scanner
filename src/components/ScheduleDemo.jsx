import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ScheduleDemo = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Scheduled on: ${selectedDate?.toLocaleDateString()} at ${selectedTime}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Schedule a Demo</h2>
        <form onSubmit={handleSubmit}>
          {/* Date Picker */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Select Date:</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy"
              minDate={new Date()}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          {/* Time Picker */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Select Time:</label>
            <input
              type="time"
              value={selectedTime}
              onChange={handleTimeChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleDemo;
