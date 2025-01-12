
import React from 'react';

const ResponseTime = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="border border-gray-300 rounded-lg p-4 w-full sm:w-[90%] md:w-[75%] lg:w-[216px]"> {/* Responsive width */}
        <div className="flex items-center mb-5">
          <svg
            className="w-5 h-5 mr-2 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span className="font-semibold text-gray-600">Response Time</span>
        </div>

        <div className="text-sm text-white rounded-sm bg-[#8383e3] mb-4 flex justify-center h-5">
          Std Time - 2min
        </div>
        <div className="flex flex-row border-dashed border-2 border-gray-300 p-2 text-center mb-6 mt-9 items-center justify-between">
          <div className="text-lg text-green-500 font-bold">60%</div>
          <div className="flex items-center text-xs font-semibold text-[#40406e]">
            Ans took <span className="text-base mx-1 text-red-500">↑</span>
            <span className="text-blue-500 font-bold">2min</span>
          </div>
        </div>

        <div className="text-black text-xl font-bold text-center">
          You are <span className="text-red-500">slow</span>!
        </div>
      </div>
    </div>
  );
};

export default ResponseTime;
