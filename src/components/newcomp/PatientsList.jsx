import { useEffect, useState } from 'react';
import { FaEllipsisV, FaSearch } from 'react-icons/fa'; // Import the icons
import patientsData from '../../patientData.json'; // Adjust the path as needed

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);

  useEffect(() => {
    // Directly set the imported JSON data
    setPatients(patientsData); // Assuming patientsData is an array of patients
  }, []);

  // Filter patients based on the search term
  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle search box visibility
  const toggleSearchBox = () => {
    setIsSearchBoxVisible(!isSearchBoxVisible);
  };

  return (
    <div className="h-screen bg-white p-4 rounded-lg shadow-md flex flex-col">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold">Patients</h2>
        {isSearchBoxVisible && (
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search patients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-10 p-2 border rounded-md shadow-sm"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        )}
        <button
          onClick={toggleSearchBox}
          className="p-2 rounded-md hover:bg-gray-200 transition-colors duration-300"
        >
          <FaSearch className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto" id="style-2">
        {filteredPatients.map((patient, index) => (
          <div
            key={index}
            className={`flex items-center justify-between gap-4 p-2 mb-2 rounded-md hover:bg-[#D8FCF7] transition-colors duration-300 ${index === 0 ? 'bg-blue-100' : ''}`}
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                <img
                  src={patient.profile_picture}
                  alt={patient.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold">{patient.name}</p>
                <p className="text-xs text-gray-600">{`${patient.age} years`}</p>
              </div>
            </div>
            <button className="text-gray-600 hover:text-blue-500">
              <FaEllipsisV size={20} className="rotate-90" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientList;
