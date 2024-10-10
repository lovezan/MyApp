import { useState, useEffect } from 'react';
import { FaHome, FaUsers, FaCalendar, FaCog, FaEnvelope, FaEllipsisV, FaDollarSign } from 'react-icons/fa';
import patientData from '../patientData.json'; // Update the path as needed

const Navbar = () => {
  const [user, setUser] = useState({ name: '', profile_picture: '' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Directly set the imported JSON data for the first patient
    const patient = patientData[0]; // Assuming you want the first patient’s data
    if (patient) {
      setUser({
        name: patient.name,
        profile_picture: patient.profile_picture
      });
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative inset-x-0 top-3 bg-white shadow-lg z-50 w-[96%] rounded-full mx-auto">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img 
            src="../../src/assets/TestLogo@2x.png" 
            alt="Logo" 
            className="h-8 w-15 mr-2" 
          />
        </div>

        {/* Navigation Buttons for Large Screens */}
        <nav className="hidden md:flex space-x-4">
          <button className="flex items-center text-gray-600 text-md font-medium py-2 px-4 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300">
            <FaHome className="mr-2" />
            Overview
          </button>
          <button className="flex items-center text-gray-600 text-md font-medium py-2 px-4 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300">
            <FaUsers className="mr-2" />
            Patients
          </button>
          <button className="flex items-center text-gray-600 text-md font-medium py-2 px-4 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300">
            <FaCalendar className="mr-2" />
            Schedule
          </button>
          <button className="flex items-center text-gray-600 text-md font-medium py-2 px-4 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300">
            <FaEnvelope className="mr-2" />
            Message
          </button>
          <button className="flex items-center text-gray-600 text-md font-medium py-2 px-4 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300">
            <FaDollarSign className="mr-2" />
            Transactions
          </button>
        </nav>

        {/* User Info */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <img 
              src={user.profile_picture}  // Use the profile picture from JSON data
              alt="User Avatar" 
              className="h-8 w-8 rounded-full" 
            />
          </div>
          <span className="text-sm font-medium text-gray-800">{user.name}</span> {/* Use the name from JSON data */}
          
          {/* Settings Icon Button */}
          <button className="p-2 rounded-full hover:bg-gray-200">
            <FaCog className="text-gray-600" />
          </button>

          {/* Menu (Three Dots) Icon Button */}
          <button className="p-2 rounded-full hover:bg-gray-200">
            <FaEllipsisV className="text-gray-600" />
          </button>
        </div>

        {/* Toggle Button for Small Screens */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 hover:text-blue-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 rounded-lg`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center">
            <img 
              src='../../src/assets/TestLogo@2x.png'  // Use the profile picture from JSON data
              alt="Logo" 
              className="h-8 w-15 mr-2" 
            />
              </div>
          <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <button className="flex items-center text-gray-600 text-lg font-medium py-2 px-4 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300">
            <FaHome className="mr-2" />
            Overview
          </button>
          <button className="flex items-center text-gray-600 text-lg font-medium py-2 px-4 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300">
            <FaUsers className="mr-2" />
            Patients
          </button>
          <button className="flex items-center text-gray-600 text-lg font-medium py-2 px-4 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300">
            <FaCalendar className="mr-2" />
            Schedule
          </button>
          <button className="flex items-center text-gray-600 text-lg font-medium py-2 px-4 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300">
            <FaEnvelope className="mr-2" />
            Message
          </button>
          <button className="flex items-center text-gray-600 text-lg font-medium py-2 px-4 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300">
            <FaDollarSign className="mr-2" />
            Transactions
          </button>
        </nav>
        <div className="flex items-center space-x-4 p-4 border-t">
          <div className="relative">
            <img 
              src={user.profile_picture}  // Use the profile picture from JSON data
              alt="User Avatar" 
              className="h-8 w-8 rounded-full" 
            />
          </div>
          <span className="text-sm font-medium text-gray-800">{user.name}</span> {/* Use the name from JSON data */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
