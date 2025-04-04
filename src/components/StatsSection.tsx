
import React from 'react';

const StatsSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center py-12 space-y-8 md:space-y-0 md:space-x-8">
      <div className="w-full md:w-1/3 text-center">
        <h2 className="text-white text-5xl font-bold mb-2">10K+</h2>
        <p className="text-white/70">Tasks completed daily</p>
      </div>
      
      <div className="w-full md:w-1/3 text-center">
        <h2 className="text-white text-5xl font-bold mb-2">5M+</h2>
        <p className="text-white/70">Downloads & counting</p>
      </div>
      
      <div className="w-full md:w-1/3 text-center">
        <h2 className="text-white text-5xl font-bold mb-2">4.8</h2>
        <p className="text-white/70">by thousands users</p>
      </div>
    </div>
  );
};

export default StatsSection;
