import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ServicePage = ({ serviceName, step, totalSteps, handleBackClick }) => {
  return (
    <>
        <Header step={step} totalSteps={totalSteps} />

      <div className="flex flex-col min-h-screen">
        <div className="flex flex-grow justify-center items-center">
          <div className="max-w-lg p-8 bg-white rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{serviceName}</h2>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleBackClick}
            >
              Back
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ServicePage;
