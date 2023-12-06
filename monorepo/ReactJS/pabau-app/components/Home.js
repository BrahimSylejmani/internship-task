import { useState } from 'react';
import Header from '../components/Header';
import ServicePage from '../components/ServicePage';
import 'tailwindcss/tailwind.css';
import Footer from '@/components/Footer';


const Home = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 2;
    const [selectedService, setSelectedService] = useState(null);
  
    const handleServiceClick = (serviceName) => {
      setSelectedService(serviceName);
      setStep(2);
    };
  
    const handleBackClick = () => {
      setSelectedService(null);
      setStep(1);
    };
  
    if (selectedService) {
      return (
        <ServicePage
          serviceName={selectedService}
          step={step}
          totalSteps={totalSteps}
          handleBackClick={handleBackClick}
        />
      );
    }
  return (
    <>
    <Header step={step} totalSteps={totalSteps} />
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow justify-center items-center">
        <div className="max-w-lg p-8 bg-white rounded shadow-lg">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <table className="items-center w-full bg-transparent border-collapse">
                  <tbody>
                    <tr>
                      <th
                        className="border-t-0 px-6 py-4 align-middle border-l-0 border-r-0 text-base whitespace-nowrap cursor-pointer"
                        onClick={() => handleServiceClick('Anti Wrinkle Treatment')}
                      >
                        Anti Wrinkle Treatment
                      </th>
                    </tr>
                    <tr>
                      <th
                        className="border-t-0 px-8 py-4 align-middle border-l-0 border-r-0 text-base whitespace-nowrap cursor-pointer"
                        onClick={() => handleServiceClick('Dermal Fillers')}
                      >
                        Dermal Fillers
                      </th>
                    </tr>
                    <tr>
                      <th
                        className="border-t-0 px-6 py-4 align-middle border-l-0 border-r-0 text-base whitespace-nowrap cursor-pointer"
                        onClick={() => handleServiceClick('Facials')}
                      >
                        Facials
                      </th>
                    </tr>
                    <tr>
                      <th
                        className="border-t-0 px-6 py-4 align-middle border-l-0 border-r-0 text-base whitespace-nowrap cursor-pointer"
                        onClick={() => handleServiceClick('Fat Dissolve')}
                      >
                        Fat Dissolve
                      </th>
                    </tr>
                    <tr>
                      <th
                        className="border-t-0 px-6 py-4 align-middle border-l-0 border-r-0 text-base whitespace-nowrap cursor-pointer"
                        onClick={() => handleServiceClick('Consultation')}
                      >
                        Consultation
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default Home