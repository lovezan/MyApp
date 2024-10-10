import { useEffect, useState } from 'react';
import patientsData from '../../patientData.json'; // Adjust the path as needed
// import { FaDownload } from 'react-icons/fa'; // Ensure you have react-icons installed
import { BsDownload } from "react-icons/bs";


const LabResults = () => {
  const [labResults, setLabResults] = useState([]);

  useEffect(() => {
    // Directly set the imported JSON data for the first patient
    const patient = patientsData[0]; // Assuming you want the first patient’s data
    if (patient && patient.lab_results) {
      setLabResults(patient.lab_results);
    }
  }, []);

  return (
    <div className="mt-4 bg-white p-4 rounded-lg shadow-md h-[30vh]">
      <h3 className="text-lg font-semibold mb-2">Lab Results</h3>
      <ul className="list-disc pl-5 h-[calc(100%-2.5rem)] overflow-y-auto" id='style-2'>
        {labResults.map((result, index) => (
          <li key={index} className="flex items-center justify-between py-2">
            <span>{result}</span>
            <div className="rounded-full p-2">
              <BsDownload />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabResults;
