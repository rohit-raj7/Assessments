
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { assets } from "../assets";

const data = [
  { slot: "1", accuracy: 100 },
  { slot: "2", accuracy: 75 },
  { slot: "3", accuracy: 50 },
  { slot: "4", accuracy: 25 },
  { slot: "6", accuracy: 55 },
  { slot: "7", accuracy: 70 },
  { slot: "8", accuracy: 45 },
];

const CompareAccuracy = () => {
  const [activeTime, setActiveTime] = useState("15MIN");

  const timeSlots = ["10MIN", "15MIN", "30MIN", "45MIN", "50MIN"];

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white border border-gray-300 rounded-lg p-4 sm:p-6 w-full max-w-[320px] sm:max-w-md">
      <h2 className="text-lg flex flex-row items-center sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
  <img className="w-6 h-6 mr-2" src={assets.CompareImg} alt="Compare" />
  Compare Accuracy
</h2>


        <div className="flex justify-center mb-4 sm:mb-6 flex-wrap">
          {timeSlots.map((time) => (
            <button
              key={time}
              className={`px-2 py-1 sm:px-3 sm:py-1.5 mx-1 mb-2 sm:mb-0 rounded text-xs sm:text-sm transition-colors duration-200 ${
                activeTime === time
                  ? "bg-teal-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-teal-100"
              }`}
              onClick={() => setActiveTime(time)}
            >
              {time}
            </button>
          ))}
        </div>

        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="slot"
              label={{ value: "Slots", position: "insideBottom", dy: 10 }}
            />
            <YAxis
              label={{ value: "Accuracy", angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            <Bar
              dataKey="accuracy"
              fill="#8884d8"
              barSize={15}
              radius={[5, 5, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CompareAccuracy;
