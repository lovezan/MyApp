// import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import DiagnosticCard from './newcomp/DiagnosticCard';
import PatientList from './newcomp/PatientsList';
import PatientProfile from './newcomp/PatientProfile';
import LabResults from './newcomp/LabResults';
import BloodPressureHistory from './newcomp/BloodPressureHistory';
import DiagnosticCard2 from './newcomp/DiagnosticCard2';

const Card = ({ children, className }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const Avatar = ({ children, className }) => (
  <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

Avatar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const AvatarImage = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={`w-full h-full object-cover ${className}`} />
);

AvatarImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const AvatarFallback = ({ children, className }) => (
  <span className={`text-white bg-gray-600 text-lg ${className}`}>{children}</span>
);

AvatarFallback.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const Button = ({ children, className }) => (
  <button className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 ${className}`}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const MainContent = () => {
 

  return (
    <main className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
     
      <div className="flex-1 container mx-auto p-4 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
        

     <PatientList/>
          <div className="col-span-2 p-1 rounded-lg">
            

    
        <div  className="col-span-2 bg-white p-4 rounded-lg shadow-md">

     <BloodPressureHistory/>
     <DiagnosticCard2/>
        </div>
        <div  className="col-span-2 p-2 rounded-lg">
        <Card className="p-4">
     <DiagnosticCard/>
    </Card>
        </div>
            

            
          </div>

          <div className="col-span-1 rounded-lg ">
         
     <PatientProfile/>


           
     <LabResults/>

          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
