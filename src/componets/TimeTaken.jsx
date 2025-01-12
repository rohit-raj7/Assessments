
import React, { useState, useRef } from "react";
import { assets } from "../assets";

const TimeTaken = () => {
  const [greenLinePosition, setGreenLinePosition] = useState(33);
  const [redLinePosition, setRedLinePosition] = useState(67);
  const [hotPosition, setHotPosition] = useState(33);
  const [isDragging, setIsDragging] = useState(false);
  const hotRef = useRef(null);

  const handleClick = (value) => {
    setGreenLinePosition(value);
    setRedLinePosition(100 - value);
    setHotPosition(value);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const boundingRect = hotRef.current.parentElement.getBoundingClientRect();
      const newPosition = ((e.clientX - boundingRect.left) / boundingRect.width) * 100;
      setHotPosition(Math.min(Math.max(newPosition, 0), 100));
      setGreenLinePosition(Math.min(Math.max(newPosition, 0), 100));
      setRedLinePosition(100 - Math.min(Math.max(newPosition, 0), 100));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="ml-2 bg-white p-4 sm:p-6 rounded-lg border border-gray-300 w-full sm:w-[430px] sm:max-w-md">
      <h2 className="text-gray-600 text-sm sm:text-lg font-semibold mb-3 flex items-center">
        <span className="mr-2">
          <img className="w-4 h-4 sm:w-5 sm:h-5" src={assets.TimeTakenImg} alt="Icon" />
        </span>
        Time Taken
      </h2>

      <div className="mb-6">
        <div className="relative bg-purple-50 p-4 rounded-md">
          <div
            ref={hotRef}
            className="hot absolute top-1/2 w-2 bg-purple-500 h-16 rounded transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={{
              left: `${hotPosition}%`,
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          ></div>
          <div className="flex justify-between text-xs sm:text-sm text-purple-700">
            {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((value, idx) => (
              <span
                key={idx}
                className="cursor-pointer"
                onClick={() => handleClick(value)}
              >
                {value}
              </span>
            ))}
          </div>
          <div className="relative mt-2 flex">
            <div
              className="absolute bg-red-500 h-2 rounded"
              style={{
                left: `${greenLinePosition}%`,
                width: `${redLinePosition}%`,
              }}
            ></div>
            <div
              className="absolute bg-green-500 h-2 rounded"
              style={{
                left: 0,
                width: `${greenLinePosition}%`,
              }}
            ></div>
          </div>
        </div>
        <p className="text-gray-500 text-xs sm:text-sm mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </p>
      </div>

      <div>
        <div className="relative bg-purple-50 p-4 rounded-md">
          <div
            ref={hotRef}
            className="hot absolute top-1/3 w-2 bg-purple-500 h-16 rounded transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={{
              left: `${hotPosition}%`,
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          ></div>
          <div className="flex justify-between text-xs sm:text-sm text-purple-700">
            {[4, 3, 2, 1, 0].map((value, idx) => (
              <span
                key={idx}
                className="cursor-pointer"
                onClick={() => handleClick(value * 25)}
              >
                {value}
              </span>
            ))}
          </div>
          <div className="relative mt-2">
            <div
              className="absolute bg-red-500 h-2 rounded"
              style={{
                left: `${greenLinePosition}%`,
                width: `${redLinePosition}%`,
              }}
            ></div>
            <div
              className="absolute bg-green-500 h-2 rounded"
              style={{
                left: 0,
                width: `${greenLinePosition}%`,
              }}
            ></div>
          </div>
        </div>
        <p className="text-gray-500 text-xs sm:text-sm mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </p>
      </div>
    </div>
  );
};

export default TimeTaken;

