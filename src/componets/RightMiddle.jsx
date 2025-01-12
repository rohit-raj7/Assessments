
import React from 'react';
import ApproacchData from './ApproacchData';
import Suggestions from './Suggestions';
import ResponseTime from './ResponseTime';
import Improvements from './Improvements';

function RightMiddle() {
  return (
    <div className="p-4">
      
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-5 mt-5">
        <Improvements />
        <ResponseTime />
        <ApproacchData />
        <Suggestions />
      </div>
    </div>
  );
}

export default RightMiddle;
