import { useEffect, useState } from 'react';
import patientsData from '../../patientData.json'; // Adjust the path as needed

// Helper function to truncate text to the first 5 words
const truncateText = (text, wordLimit) => {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
};

const DiagnosticCard = () => {
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    // Set the imported JSON data directly
    setPatientData(patientsData[0]); // Assuming the first object in the array
  }, []);

  if (!patientData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card p-4">
      <h3 className="text-lg font-semibold mb-2">Diagnostic List</h3>
      <table className="w-full border-collapse overflow-hidden">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200 text-left text-sm">Name</th>
            <th className="px-4 py-2 bg-gray-200 text-left text-sm">Description</th>
            <th className="px-4 py-2 bg-gray-200 text-left text-sm">Status</th>
          </tr>
        </thead>
        <tbody>
          {patientData.diagnostic_list.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-2 text-sm whitespace-nowrap">{item.name}</td>
              <td className="px-4 py-2 text-sm whitespace-nowrap">{truncateText(item.description, 5)}</td>
              <td className="px-4 py-2 text-sm whitespace-nowrap">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DiagnosticCard;
