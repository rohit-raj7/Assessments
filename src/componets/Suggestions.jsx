

import React from "react";

const Suggestions = () => {
  return (
    <div className="p-3 sm:p-4 w-full sm:w-[180px] md:w-[216px] border border-gray-300 rounded-lg bg-white">
      <h2 className="text-sm md:text-lg text-gray-500 font-semibold mb-3 md:mb-4 flex items-center">
        ✨ Suggestions
      </h2>
      <div className="grid grid-cols-3 gap-2 text-center">
        {/* Easy */}
        <div className="p-1">
          <p className="text-[10px] md:text-xs w-[40px] md:w-[50px] text-white rounded-md bg-[#6363cd] mb-1 md:mb-2">
            Q.32-40
          </p>
          <div className="border-2 border-dotted bg-[#7878df22] border-blue-400 w-[40px] md:w-[50px] h-[30px] md:h-[40px] flex items-center justify-center rounded-lg">
            <p className="text-xs md:text-md font-bold">
              40<span className="text-[8px] md:text-xs"> sec</span>
            </p>
          </div>
          <p className="text-green-500 text-[10px] md:text-xs font-bold mt-2">Easy</p>
        </div>

        {/* Medium */}
        <div className="p-1">
          <p className="text-[10px] md:text-xs w-[40px] md:w-[50px] text-white rounded-md bg-[#6363cd] mb-1 md:mb-2">
            Q.32-40
          </p>
          <div className="border-2 border-dotted bg-[#7878df22] border-blue-400 w-[40px] md:w-[50px] h-[30px] md:h-[40px] flex items-center justify-center rounded-lg">
            <p className="text-xs md:text-md font-bold">
              30<span className="text-[8px] md:text-xs"> min</span>
            </p>
          </div>
          <p className="text-yellow-500 text-[10px] md:text-xs font-bold mt-2">Medium</p>
        </div>

        {/* Hard */}
        <div className="p-1">
          <p className="text-[10px] md:text-xs w-[40px] md:w-[50px] text-white rounded-md bg-[#6363cd] mb-1 md:mb-2">
            Q.32-40
          </p>
          <div className="border-2 border-dotted bg-[#7878df22] border-blue-400 w-[40px] md:w-[50px] h-[30px] md:h-[40px] flex items-center justify-center rounded-lg">
            <p className="text-xs md:text-md font-bold">
              3<span className="text-[8px] md:text-xs"> min</span>
            </p>
          </div>
          <p className="text-red-500 text-[10px] md:text-xs font-bold mt-2">Hard</p>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
