import { FaBirthdayCake, FaHome, FaPhone, FaShieldAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import patientData from '../../patientData.json'; // Adjust the path as needed

// Button component
const Button = ({ children, className }) => (
  <button className={`bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-300 ${className}`}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// PatientProfile component
const PatientProfile = () => {
  // Find the patient with the name "Jessica Taylor"
  const patient = patientData.find(p => p.name === "Jessica Taylor");

  // If patient not found, return null or a placeholder component
  if (!patient) {
    return <div>Patient not found</div>;
  }

  // Destructure patient details
  const {
    name,
    gender,
    profile_picture,
    date_of_birth,
    phone_number,
    emergency_contact,
    insurance_type,
  } = patient;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-center mb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
          <img
            src={profile_picture}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-6 text-center">{name}</h2>
      <div className="mb-6 text-start space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center bg-gray-100 w-12 h-12 bg-silver-200 rounded-full">
            <FaBirthdayCake className="text-gray-500 text-2xl" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm">Date of Birth:</span>
            <span className="text-sm">{date_of_birth}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center bg-gray-100 w-12 h-12 bg-silver-200 rounded-full">
            <FaHome className="text-gray-500 text-2xl" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm">Gender:</span>
            <span className="text-sm">{gender}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center bg-gray-100 w-12 h-12 bg-silver-200 rounded-full">
            <FaPhone className="text-gray-500 text-2xl" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm">Contact Info:</span>
            <span className="text-sm">{phone_number}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center bg-gray-100 w-12 h-12 bg-silver-200 rounded-full">
            <FaPhone className="text-gray-500 text-2xl" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm">Emergency Contacts:</span>
            <span className="text-sm">{emergency_contact}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center bg-gray-100 w-12 h-12 bg-silver-200 rounded-full">
            <FaShieldAlt className="text-gray-500 text-2xl" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm">Insurance Provider:</span>
            <span className="text-sm">{insurance_type}</span>
          </div>
        </div>
      </div>

      <Button className="w-[200px] mt-6 bg-[#01F0D0]">Show More Details</Button>
    </div>
  );
};

export default PatientProfile;
