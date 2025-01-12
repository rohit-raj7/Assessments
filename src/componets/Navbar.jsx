
import React, { useState } from 'react';
import { assets } from '../assets';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);  // Added state for dropdown visibility

  return (
    <nav className="bg-gray-800 p-4 shadow-md w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3 ml-8">
          <img src={assets.Logo} alt="Firstbench Logo" className="w-10 h-10" />
          <span className="text-white font-semibold text-lg">Firstbench</span>
        </div>

        <ul className="hidden md:flex space-x-8 text-gray-300">
          <li>
            <a
              href="#dashboard"
              className="flex flex-row hover:text-teal-500 font-semibold px-2 py-1 rounded transition duration-300"
            >
              <img className="w-6 h-6" src={assets.HomeImg} alt="" /> Dashboard
            </a>
          </li>
          <li>
            <a
              href="#firstguru"
              className="flex flex-row hover:text-teal-500 font-semibold px-2 py-1 rounded transition duration-300"
            >
              ✨ FirstGuru
            </a>
          </li>
          <li>
            <a
              href="#townhall"
              className="flex flex-row gap-1 hover:text-teal-500 font-semibold px-2 py-1 rounded transition duration-300"
            >
              <img className="w-6 h-6" src={assets.TownHoll} alt="Bell" /> TownHall
            </a>
          </li>
          <li>
            <a
              href="#aievaluation"
              className="flex flex-row gap-1 hover:text-teal-500 font-semibold px-2 py-1 rounded transition duration-300"
            >
              <img className="w-6 h-6" src={assets.AiEvalution} alt="Bell" /> AI Evaluation
            </a>
          </li>
          <li>
            <a
              href="#performance"
              className="flex flex-row gap-2 hover:text-teal-500 font-semibold px-2 py-1 rounded transition duration-300"
            >
              <img className="w-6 h-6" src={assets.Peformance} alt="Bell" /> Performance
            </a>
          </li>
          <li>
            <a
              href="#mocktest"
              className="flex flex-row gap-1 hover:text-teal-500 font-semibold px-2 py-1 rounded transition duration-300"
            >
              <img className="w-6 h-6" src={assets.MockTest} alt="Bell" /> Mock Test
            </a>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <button className="text-white text-xl">
            <img className="w-6 h-6" src={assets.Bell} alt="Bell" />
          </button>

          <div className="relative">

            <button className= " flex items-center justify-center mt2 bg-gray-900 text-white px-4 py-2 rounded" 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <span className="bg-pink-400 text-white rounded w-6 h-6 flex items-center justify-center mr-2">P</span>
              Profile
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 bg-white shadow-md w-40 mt-2 rounded-md">
                <ul>
                  <li><a href="#" className="block px-4 py-2 text-gray-700  hover:text-teal-500 font-semibold">Settings</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-700  hover:text-teal-500 font-semibold">Logout</a></li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4 text-white p-4">
          <li><a href="#dashboard" className="hover:bg-gray-700 font-semibold px-2 py-1 rounded transition duration-300">Dashboard</a></li>
          <li><a href="#firstguru" className="hover:bg-gray-700 font-semibold px-2 py-1 rounded transition duration-300">FirstGuru</a></li>
          <li><a href="#townhall" className="hover:bg-gray-700 font-semibold px-2 py-1 rounded transition duration-300">TownHall</a></li>
          <li><a href="#aievaluation" className="hover:bg-gray-700 font-semibold px-2 py-1 rounded transition duration-300">AI Evaluation</a></li>
          <li><a href="#performance" className="hover:bg-gray-700 font-semibold px-2 py-1 rounded transition duration-300">Performance</a></li>
          <li><a href="#mocktest" className="hover:bg-gray-700 font-semibold px-2 py-1 rounded transition duration-300">Mock Test</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;




