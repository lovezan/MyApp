import { FaAngleDown, FaHeartbeat,FaAngleUp } from 'react-icons/fa';
// import BloodPressureChart from './BloodPressureChart'; 
import '../styles.css';

const BloodPressureHistory = () => {
  return (
    <div className="p-1">
      <h2 className="text-xl font-bold mb-4">Diagnosis History</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-[#F4F0FE] p-4 rounded-lg">
        {/* Graph Section */}
        <div className="lg:col-span-2 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <FaHeartbeat className="text-2xl text-gray-700" />
              <span className="text-lg font-semibold">Blood Pressure</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Last 6 Months</span>
              <FaAngleDown className="text-lg text-gray-600" />
            </div>
          </div>
          <div style={{ padding: '2rem' }}>
      {/* <BloodPressureChart /> */}
      <h3 className="text-md font-bold text-left live-text">
      Unfortunately, the chart didn't show up. I have made it, but it didn't show. I don't know why it shows in StackBlitz online studio but not in VS Code.
    </h3>
    </div>
        </div>

        {/* Systolic and Diastolic Sections */}
        <div className="space-y-4 lg:col-span-1">
           {/* Systolic Section */}
  <div className="p-4 rounded-lg flex flex-col items-start ">
    <div className="flex items-center space-x-2 mb-2">
      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
      <h3 className="text-md font-bold text-left">Systolic</h3>
    </div>
    <p className="text-xl font-semibold text-gray-800 text-left">151</p>
    <div className="flex items-center space-x-1 text-blue-700 mt-2">
      <FaAngleUp className="text-xl" />
      <p className="text-xs text-gray-600">Higher than Average</p>
    </div>
  </div>

  {/* Diastolic Section */}
  <div className="p-4 rounded-lg flex flex-col items-start ">
    <div className="flex items-center space-x-2 mb-2">
      <div className="w-3 h-3 bg-[#8C6FE6] rounded-full"></div>
      <h3 className="text-md font-bold text-left">Diastolic</h3>
    </div>
    <p className="text-xl font-bold text-left">120</p>
    <div className="flex items-center space-x-1 text-blue-700 mt-2">
     
      <p className="text-xs text-gray-600">Normal</p>
    </div>
  </div>
        </div>
      </div>
    </div>
  );
};

export default BloodPressureHistory;
