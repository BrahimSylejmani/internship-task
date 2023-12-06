import React from 'react';

const Header = ({ step, totalSteps }) => {
  return (
    <div className="bg-gray-100 py-4 text-center">
      <h1 className="text-2xl font-bold mb-2 mx-auto">Choose Service</h1>
      <div className="text-gray-500 text-lg mx-auto">
        Step {step}/{totalSteps}
      </div>
    </div>
  );
};

export default Header;
