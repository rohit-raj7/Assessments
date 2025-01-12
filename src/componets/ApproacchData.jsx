
import React from 'react';
import { assets } from '../assets';

const ApproachData = () => {
  return (
    <div className="p-4 bg-white rounded border border-gray-300 w-full sm:w-[90%] md:w-[75%] lg:w-[216px]"> {/* Responsive width */}
      <h2 className="text-base md:text-lg font-semibold text-gray-500 mb-4 flex items-center">
        <img className="w-4 h-4 md:w-5 md:h-5 mr-2" src={assets.zigzag} alt="Icon" />
        Approach Data
      </h2>
      <div className="space-y-2">
        <div className="flex justify-between items-center p-2 border-2 rounded">
          <span className="bg-[#8383e32f] w-[32px] md:w-[40px] h-[20px] md:h-[22px] flex items-center justify-center rounded text-sm">
            25%
          </span>
          <span className="text-sm md:text-base font-semibold whitespace-nowrap">
            Based on <span className="text-[#5f5feb]">Facts</span>
          </span>
        </div>
        <div className="flex justify-between items-center p-2 border-2 rounded">
          <span className="bg-[#8383e32f] w-[32px] md:w-[40px] h-[20px] md:h-[22px] flex items-center justify-center rounded text-sm">
            20%
          </span>
          <span className="text-sm md:text-base font-semibold whitespace-nowrap">
            Based on <span className="text-[#5f5feb]">Analysis</span>
          </span>
        </div>
        <div className="flex justify-between items-center p-2 border-2 rounded">
          <span className="bg-[#8383e32f] w-[32px] md:w-[40px] h-[20px] md:h-[22px] flex items-center justify-center rounded text-sm">
            45%
          </span>
          <span className="text-sm md:text-base font-semibold whitespace-nowrap">
            Based <span className="text-[#5f5feb]">Elimination</span>
          </span>
        </div>
        <div className="flex justify-between items-center p-2 border-2 rounded">
          <span className="bg-[#8383e32f] w-[32px] md:w-[40px] h-[20px] md:h-[22px] flex items-center justify-center rounded text-sm">
            19%
          </span>
          <span className="text-sm md:text-base font-semibold whitespace-nowrap">
            Based on <span className="text-[#5f5feb]">Guess</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ApproachData;
