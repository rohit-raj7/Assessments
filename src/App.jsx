import React from 'react';
import CompareAccuracy from './componets/CompareAccuracy';
import TimeTaken from './componets/TimeTaken';
import Navbar from './componets/Navbar';
import LeftContainder from './componets/LeftContainder';
import CompareTop from './componets/CompareTop';
import RightMiddle from './componets/RightMiddle';

function App() {
  return (
    <div>
      <Navbar />
      <div className="justify-center ml-9 mb-9">
        <div className="flex flex-col md:flex-row">

          <LeftContainder />
          <div className="flex flex-col mt-8 md:ml-6">
            <CompareTop />
            <RightMiddle />
            <div className="flex flex-col md:flex-row gap-6 mt-6">
              <CompareAccuracy />
              <TimeTaken />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
