import React from 'react';

const CompareTop = () => {
  return (
    <div className='flex flex-wrap gap-7 justify-center'>
      <div className="bg-white border border-gray-300 p-4 w-[260px] h-72 sm:w-[288px] sm:h-64 xs:w-full xs:h-auto">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />
          <span>Compare Accuracy</span>
        </label>
      </div>

      <div className="bg-white border border-gray-300 p-4 w-[270px] h-72 sm:w-[288px] sm:h-64 xs:w-full xs:h-auto">
        <label className="flex items-center space-x-2">
          <span>Compare Accuracy</span>
        </label>
      </div>

      <div className="bg-white border border-gray-300 p-4 w-[270px] h-72 sm:w-[288px] sm:h-64 xs:w-full xs:h-auto">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />
          <span>Compare Accuracy</span>
        </label>
      </div>
    </div>
  );
};

export default CompareTop;
