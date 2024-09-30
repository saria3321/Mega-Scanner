// import React, { useState, useRef } from 'react';
// import JSZip from 'jszip';
// import { saveAs } from 'file-saver'; 

// const ToyotaCard = () => {
//   const exteriorImages = [
//     '/public/assets/images/Exterior_1.jpg',
//     '/public/assets/images/Exterior_2.jpg',
//     '/public/assets/images/Exterior_3.jpg',
//     '/public/assets/images/Exterior_4.jpg',
//     '/public/assets/images/Exterior_5.jpg',
//     '/public/assets/images/Exterior_6.jpg',
//     '/public/assets/images/Exterior_7.jpg',
//     '/public/assets/images/Exterior_8.jpg',
//     '/public/assets/images/Exterior_9.jpg',
//     '/public/assets/images/Exterior_10.jpg',
//     '/public/assets/images/Exterior_11.jpg',
//     '/public/assets/images/Exterior_12.jpg',
//     '/public/assets/images/Exterior_13.jpg',
//     '/public/assets/images/Exterior_14.jpg',
//   ];

//   const interiorImages = [
//     '/public/assets/images/interior.png',
//     '/public/assets/images/interior 2.png',
//     '/public/assets/images/interior3.png',
//     '/public/assets/images/interior4.png',
//     '/public/assets/images/interior5.png',
//     '/public/assets/images/interior6.png',
//     '/public/assets/images/interior7.png',
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [isExterior, setIsExterior] = useState(true); // Toggle between exterior and interior

//   const imageRef = useRef(null);

//   // Get the current image set (either exterior or interior)
//   const currentImages = isExterior ? exteriorImages : interiorImages;

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setStartX(e.clientX);
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;

//     const endX = e.clientX;
//     const difference = startX - endX;

//     if (difference > 10) {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
//       setStartX(endX);
//     } else if (difference < -10) {
//       setCurrentIndex((prevIndex) => (prevIndex - 1 + currentImages.length) % currentImages.length);
//       setStartX(endX);
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + currentImages.length) % currentImages.length);
//   };

//   // Function to dynamically create a zip file and download it
//   const handleDownload = async () => {
//     const zip = new JSZip();
//     const imagesToDownload = isExterior ? exteriorImages : interiorImages;

//     // Add each image to the zip
//     imagesToDownload.forEach((imagePath, index) => {
//       const fileName = `${isExterior ? 'Exterior' : 'Interior'}_${index + 1}.jpg`;
//       zip.file(fileName, fetch(imagePath).then(res => res.blob()));
//     });

//     // Generate the zip file and download it
//     zip.generateAsync({ type: 'blob' }).then((content) => {
//       saveAs(content, `${isExterior ? 'exterior-images' : 'interior-images'}.zip`);
//     });
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto relative">
//       <h2 className="text-3xl font-bold">TOYOTA Land Cruiser</h2>
//       <p>Toyota of Greensboro</p>
//       <p>Tuesday, July 9, 2024 4:33 PM</p>

//       <div
//         className="relative w-full h-auto rounded-lg mt-4 flex items-center justify-center"
//         onMouseDown={handleMouseDown}
//         onMouseMove={handleMouseMove}
//         onMouseUp={handleMouseUp}
//         onMouseLeave={handleMouseUp}
//         ref={imageRef}
//         style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
//       >
//         <button
//           onClick={prevImage}
//           className="absolute left-0 text-2xl text-blue-500 hover:text-blue-700"
//         >
//           &#8592;
//         </button>

//         <img
//           src={currentImages[currentIndex]}
//           alt={`Car angle ${currentIndex + 1}`}
//           className="w-full h-auto rounded-lg"
//         />

//         <button
//           onClick={nextImage}
//           className="absolute right-0 text-2xl text-blue-500 hover:text-blue-700"
//         >
//           &#8594;
//         </button>

//         {/* Vertical text for Exterior/Interior toggle */}
//         <div className="absolute left-0 top-0 h-full flex flex-col justify-center items-center text-white">
//           <div
//             className={`text-vertical font-bold text-lg tracking-wide cursor-pointer ${
//               isExterior ? 'opacity-100' : 'opacity-50'
//             }`}
//             onClick={() => setIsExterior(true)}
//           >
//             EXTERIOR
//           </div>
//           <div className="w-px h-16 bg-gray-300 my-2"></div>
//           <div
//             className={`text-vertical font-bold text-lg tracking-wide cursor-pointer ${
//               isExterior ? 'opacity-50' : 'opacity-100'
//             }`}
//             onClick={() => setIsExterior(false)}
//           >
//             INTERIOR
//           </div>
//         </div>
//       </div>

//       <button
//         className="mt-4 px-6 py-2 bg-blue-400 text-white rounded-lg"
//         onClick={handleDownload}
//       >
//         Download {isExterior ? 'Exterior' : 'Interior'} Images
//       </button>
//     </div>
//   );
// };

// export default ToyotaCard;
import React, { useState, useRef } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const ToyotaCard = () => {
  // Left and right images for comparison
  const leftImage = '/public/assets/images/Exterior_4.jpg'; // Image 1
  const rightImage = '/public/assets/images/exterior black.png'; // Image 2

  const [sliderPosition, setSliderPosition] = useState(50); // Start the slider in the center (50%)
  const imageContainerRef = useRef(null); // Ref for the image container

  // Handle slider movement
  const handleSliderMove = (e) => {
    const containerRect = imageContainerRef.current.getBoundingClientRect(); // Get container dimensions
    const offsetX = e.clientX - containerRect.left; // Calculate mouse position within container
    const newSliderPosition = (offsetX / containerRect.width) * 100; // Convert to percentage

    // Ensure slider stays between 0% and 100%
    if (newSliderPosition >= 0 && newSliderPosition <= 100) {
      setSliderPosition(newSliderPosition);
    }
  };

  // Start dragging the slider
  const handleMouseDown = () => {
    window.addEventListener('mousemove', handleSliderMove); // Track mouse movement
    window.addEventListener('mouseup', handleMouseUp); // Stop dragging on mouse up
  };

  // Stop dragging the slider
  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleSliderMove); // Stop tracking mouse movement
    window.removeEventListener('mouseup', handleMouseUp); // Stop dragging
  };

  return (
    <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      {/* Header */}
      <h2 className="text-3xl font-bold">TOYOTA Land Cruiser</h2>
      <p>Toyota of Greensboro</p>
      <p>Tuesday, July 9, 2024 4:33 PM</p>

      {/* Image comparison container */}
      <div
        className="relative w-full h-96 overflow-hidden rounded-lg"
        ref={imageContainerRef}
        onMouseDown={handleMouseDown}
        style={{ cursor: 'ew-resize' }} // Change cursor to resize icon
      >
        {/* Left image (fully visible initially) */}
        <img
          src={leftImage}
          alt="Left side image"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }} // Hide part of the image based on slider
        />

        {/* Right image (partially visible initially) */}
        <img
          src={rightImage}
          alt="Right side image"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }} // Hide part of the image based on slider
        />

        {/* Horizontal slider */}
        <div
          className="absolute top-0 left-0 h-full w-1 bg-blue-500 z-10"
          style={{ left: `${sliderPosition}%` }} // Position the slider based on its state
        ></div>

       
      </div>

      {/* Download Button */}
      <button
        className="mt-4 px-6 py-2 bg-blue-400 text-white rounded-lg"
        onClick={() => alert('Download started!')}
      >
        Download Exterior Images
      </button>
    </div>
  );
};

export default ToyotaCard;

