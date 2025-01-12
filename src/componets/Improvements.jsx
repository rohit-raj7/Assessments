

import React from 'react';
import { assets } from '../assets';

function Improvements() {
  return (
    <div className="w-full sm:w-[216px] bg-white p-3 rounded-lg border border-gray-300">
      <h2 className="text-sm font-semibold text-gray-500 mb-3 flex items-center">
        <img className="w-4 h-4 mr-2" src={assets.zigzag} alt="" />
        Improvements
      </h2>
      <p className="text-xs text-gray-600 font-semibold mb-3">Subject Understanding</p>
      <div className="flex flex-wrap gap-3">
        <span className="bg-blue-400 text-white px-2 py-1 rounded-full text-xs">Geography</span>
        <span className="bg-yellow-400 text-white px-2 py-1 rounded-full text-xs">Politics</span>
        <span className="bg-blue-400 text-white px-2 py-1 rounded-full text-xs">Current Affairs</span>
        <span className="bg-red-400 text-white px-2 py-1 rounded-full text-xs">General Studies</span>
        <span className="bg-blue-400 text-white px-2 py-1 rounded-full text-xs">Mathematics</span>
        <span className="bg-gray-400 text-white px-2 py-1 rounded-full text-xs">Social Studies</span>
        <span className="bg-green-400 text-white px-2 py-1 rounded-full text-xs">English Literature</span>
      </div>
    </div>
  );
}

export default Improvements;
