import { FaLungs, FaThermometerHalf, FaHeartbeat, FaAngleDown } from 'react-icons/fa';

const DiagnosticCard2 = () => {
  return (
    <div className="p-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
      
      <div className="p-4 bg-blue-100 shadow rounded-xl flex flex-col items-start h-full">
        <div className="w-24 h-24 bg-white flex items-center justify-center rounded-full mb-2">
          <FaLungs className="text-blue-700 text-6xl" />
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold text-blue-700">Respiratory Rate</p>
          <p className="text-xl text-gray-600 font-semibold">20 bpm</p>
          <p className="text-xs text-gray-600">Normal</p>
        </div>
      </div>
      
      <div className="p-4 bg-red-100 shadow rounded-xl flex flex-col items-start h-full">
        <div className="w-24 h-24 bg-white flex items-center justify-center rounded-full mb-2">
          <FaThermometerHalf className="text-red-700 text-6xl" />
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold">Temperature</p>
          <p className="text-xl text-gray-600 font-semibold">98.6°F</p>
          <p className="text-xs text-gray-600">Normal</p>
        </div>
      </div>
      
      <div className="p-4 bg-pink-100 shadow rounded-xl flex flex-col items-start h-full">
        <div className="w-24 h-24 bg-white flex items-center justify-center rounded-full mb-2">
          <FaHeartbeat className="text-pink-700 text-6xl" />
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold">Heart Rate</p>
          <p className="text-xl text-gray-600 font-semibold">78 bpm</p>
          <div className="flex items-center">
            <FaAngleDown className="text-blue-700 text-xl mr-2" />
            <p className="text-xs text-gray-600">Lower than average</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default DiagnosticCard2;
