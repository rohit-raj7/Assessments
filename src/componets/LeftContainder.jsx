
import React from 'react';
import { assets } from '../assets';

const LeftContainer = () => {
  return (
    <div className="p-4 flex justify-center">
      <div className="bg-white mt-4 p-4 sm:p-5 rounded-lg w-full sm:w-[90%] lg:w-[80%] max-w-md border border-gray-300">
        {/* Result Section */}
        <div className="flex flex-col items-center text-center mb-6">
          <img className="w-24 sm:w-32 h-24 sm:h-32" src={assets.resultImg} alt="Result Image" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl text-[#6363cd] font-semibold mt-4">
            Your Result!
          </h1>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            All your insights & details in one place
          </p>
        </div>

        {/* Score Section */}
        <div className="bg-gray-100 rounded-xl p-4">
          <div className="flex flex-wrap items-center justify-between space-x-4">
            <img className="bg-blue-200 rounded-lg w-8 h-8 sm:w-9 sm:h-9 p-2" src={assets.bagrgiht} alt="Passed" />
            <div className="flex flex-col items-center mt-3 space-y-2">
              <p className="bg-[#6363cd] text-white rounded-3xl py-1 px-3 text-xs sm:text-sm">
                YOU'VE PASSED
              </p>
              <div className="text-xl sm:text-2xl font-bold">
                136<span className="text-sm sm:text-lg text-gray-500">/ 240</span>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <span className="bg-[#2eb42c] rounded-lg w-full px-3 py-1 text-xs sm:text-lg text-white font-semibold">
                76%
              </span>
              <span className="text-[#2eb42c] text-sm sm:text-base">ACCURACY</span>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-100 rounded-md p-3">
          <div className="flex items-center mb-4">
            <img
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-md mr-4"
              src={assets.man}
              alt="User Avatar"
            />
            <div>
              <h2 className="text-[#6363cd] font-semibold text-sm sm:text-lg">Top Score</h2>
              <div className="text-xl sm:text-2xl font-bold">
                200<span className="text-sm sm:text-lg text-gray-500">/ 240</span>
              </div>
            </div>
          </div>
          <hr className="border-t-1 border-gray-400 opacity-75 my-4 mx-auto w-[90%]" />
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-gray-500">
              By <span className="text-black font-semibold">Parth Akotkar</span>
            </span>
            <p className="bg-[#2eb42c] text-white rounded-3xl py-1 px-3">90% ACCURACY</p>
          </div>
        </div>

        {/* Improvement Section */}
        <div className="text-center mt-6">
          <h3 className="text-sm sm:text-lg font-semibold">Improve your Marks</h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-4">
            Improve your score by practicing more.
          </p>
          <button className="bg-[#6363cd] text-white px-3 py-2 rounded-xl w-full">
            Practice more
          </button>
        </div>

        {/* Revisit Section */}
        <div className="bg-white mt-6 p-4 sm:p-6 rounded-lg border border-gray-300">
          <h2 className="text-base sm:text-lg font-bold mb-2">Revisit Paper</h2>
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            Challenge your friends by simply sharing a link to this test
          </p>
          <button className="bg-[#6363cd] text-white px-3 py-2 rounded-xl flex items-center justify-center mb-5">
            <img className="w-4 h-4 sm:w-5 sm:h-5 mr-2" src={assets.pdfFile} alt="PDF Icon" />
            Visit
          </button>
          <div className="flex items-start">
            <img className="w-5 h-5 sm:w-6 sm:h-6 mr-2" src={assets.report} alt="Report Icon" />
            <p className="text-gray-500 text-xs sm:text-sm">
              Instructions for how to upload your handwritten material are given.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftContainer;
