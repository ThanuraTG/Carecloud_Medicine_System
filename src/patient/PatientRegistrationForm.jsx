// import React, { useState } from 'react';
// import './PatientRegistrationForm.css';
// import VerticalMenu from './Components/verticalmenu';
// import Header from './Components/Header';

// const PatientRegistrationForm = () => {
//   const [gender, setGender] = useState(''); // State to track selected gender
//   const [guardianGender, setGuardianGender] = useState(''); // State for guardian's gender
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     address: '',
//     birthday: '',
//     phoneNumber: '',
//     guardianFirstName: '',
//     guardianLastName: '',
//     guardianAddress: '',
//     guardianBirthday: '',
//     guardianPhoneNumber: '',
//   });

//   const handleGenderChange = (event) => {
//     setGender(event.target.value);
//   };

//   const handleGuardianGenderChange = (event) => {
//     setGuardianGender(event.target.value);
//   };

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

 

//   const handleClear = () => {
//     setGender('');
//     setGuardianGender('');
//     setFormData({
//       firstName: '',
//       lastName: '',
//       address: '',
//       birthday: '',
//       phoneNumber: '',
//       guardianFirstName: '',
//       guardianLastName: '',
//       guardianAddress: '',
//       guardianBirthday: '',
//       guardianPhoneNumber: '',
//     });
//   };

//   return (
//     <div className="patient-registration">
//       <Header />
//       <div className="sidebar">
//         <VerticalMenu />
//       </div>

//       <div className="main-contentP">
//         <div className="form-containerP">
//           <h2>Patient Registration Form</h2>

//           <div className="form-section">
//             <div className="personal-details">
//               <h3>Personal Details</h3>
//               <div className="radio-group">
//                 <label><input type="radio" name="title" /> Mr</label>
//                 <label><input type="radio" name="title" /> Mrs</label>
//                 <label><input type="radio" name="title" /> Miss</label>
//               </div>

//               <div className="input-group">
//                 <label>First Name</label>
//                 <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
//               </div>
//               <div className="input-group">
//                 <label>Last Name</label>
//                 <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
//               </div>
//               <div className="input-group">
//                 <label>Address</label>
//                 <input type="text" name="address" value={formData.address} onChange={handleChange} />
//               </div>

//               {/* Gender Dropdown */}
//               <div className="input-group">
//                 <label>Gender</label>
//                 <select value={gender} onChange={handleGenderChange}>
//                   <option value="" disabled>Select Gender</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>

//               <div className="input-group">
//                 <label>Birthday</label>
//                 <input type="date" name="birthday" value={formData.birthday} placeholder="mm/dd/yyyy" onChange={handleChange} />
//               </div>
//               <div className="input-group">
//                 <label>Phone-Number</label>
//                 <input type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
//               </div>
//             </div>

//             <div className="guardian-details">
//               <h3>Guardian Details</h3>
//               <div className="input-group">
//                 <label>First Name</label>
//                 <input type="text" name="guardianFirstName" value={formData.guardianFirstName} onChange={handleChange} />
//               </div>
//               <div className="input-group">
//                 <label>Last Name</label>
//                 <input type="text" name="guardianLastName" value={formData.guardianLastName} onChange={handleChange} />
//               </div>
//               <div className="input-group">
//                 <label>Address</label>
//                 <input type="String" name="guardianAddress" value={formData.guardianAddress} onChange={handleChange} />
//               </div>

//               {/* Gender Dropdown for Guardian */}
//               <div className="input-group">
//                 <label>Gender</label>
//                 <select value={guardianGender} onChange={handleGuardianGenderChange}>
//                   <option value="" disabled>Select Gender</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>

//               <div className="input-group">
//                 <label>Birthday</label>
//                 <input type="date" name="guardianBirthday" value={formData.guardianBirthday} placeholder="mm/dd/yyyy" onChange={handleChange} />
//               </div>

//               <div className="input-group">
//                 <label>Phone-Number</label>
//                 <input type="number" name="guardianPhoneNumber" value={formData.guardianPhoneNumber} onChange={handleChange} />
//               </div>
//             </div>
//           </div>

//           {/* Submit and Clear Buttons */}
//           <div className="form-buttons">
//             <button className="submit-btn" onClick={() => alert('Form Submitted!')}>Submit</button>
//             <button className="clear-btn" onClick={handleClear}>Clear</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PatientRegistrationForm;


import React, { useState } from 'react';
import axios from 'axios';
import './css/PatientRegistrationForm.css';
import VerticalMenu from '../Components/verticalmenu';
import Header from '../Components/Header';

const PatientRegistrationForm = () => {
  const [gender, setGender] = useState(''); 
  const [guardianGender, setGuardianGender] = useState(''); 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    birthday: '',
    phoneNumber: '',
    guardianFirstName: '',
    guardianLastName: '',
    guardianAddress: '',
    guardianBirthday: '',
    guardianPhoneNumber: '',
  });

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleGuardianGenderChange = (event) => {
    setGuardianGender(event.target.value);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleClear = () => {
    setGender('');
    setGuardianGender('');
    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      birthday: '',
      phoneNumber: '',
      guardianFirstName: '',
      guardianLastName: '',
      guardianAddress: '',
      guardianBirthday: '',
      guardianPhoneNumber: '',
    });
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`,
        address: formData.address,
        age: new Date().getFullYear() - new Date(formData.birthday).getFullYear(),
        contactNumber: formData.phoneNumber,
        gender,
        guardianDetails: formData.guardianFirstName
          ? {
              name: `${formData.guardianFirstName} ${formData.guardianLastName}`,
              address: formData.guardianAddress,
              contactNumber: formData.guardianPhoneNumber,
              relationship: 'Guardian', // Hardcoded for now; adapt as needed.
            }
          : null,
      };

      const response = await axios.post('http://localhost:8080/api/patients', payload);
      alert(`Patient created successfully! ID: ${response.data.id}`);
      handleClear(); // Clear form after successful submission
    } catch (error) {
      console.error('Error creating patient:', error);
      alert('Failed to create patient. Please check the form and try again.');
    }
  };

  return (
    <div className="patient-registration">
      <Header />
      <div className="sidebar">
        <VerticalMenu />
      </div>

      <div className="main-contentP">
        <div className="form-containerP">
          <h2>Patient Registration Form</h2>

          <div className="form-section">
            <div className="personal-details">
              <h3>Personal Details</h3>
              <div className="radio-group">
                <label><input type="radio" name="title" /> Mr</label>
                <label><input type="radio" name="title" /> Mrs</label>
                <label><input type="radio" name="title" /> Miss</label>
              </div>

              <div className="input-group">
                <label>First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>Address</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} />
              </div>

              <div className="input-group">
                <label>Gender</label>
                <select value={gender} onChange={handleGenderChange}>
                  <option value="" disabled>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="input-group">
                <label>Birthday</label>
                <input type="date" name="birthday" value={formData.birthday} placeholder="mm/dd/yyyy" onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>Phone-Number</label>
                <input type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
              </div>
            </div>

            <div className="guardian-details">
              <h3>Guardian Details</h3>
              <div className="input-group">
                <label>First Name</label>
                <input type="text" name="guardianFirstName" value={formData.guardianFirstName} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>Last Name</label>
                <input type="text" name="guardianLastName" value={formData.guardianLastName} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>Address</label>
                <input type="text" name="guardianAddress" value={formData.guardianAddress} onChange={handleChange} />
              </div>

              <div className="input-group">
                <label>Gender</label>
                <select value={guardianGender} onChange={handleGuardianGenderChange}>
                  <option value="" disabled>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="input-group">
                <label>Birthday</label>
                <input type="date" name="guardianBirthday" value={formData.guardianBirthday} placeholder="mm/dd/yyyy" onChange={handleChange} />
              </div>

              <div className="input-group">
                <label>Phone-Number</label>
                <input type="number" name="guardianPhoneNumber" value={formData.guardianPhoneNumber} onChange={handleChange} />
              </div>
            </div>
          </div>

          <div className="form-buttons">
            <button className="submit-btn" onClick={handleSubmit}>Submit</button>
            <button className="clear-btn" onClick={handleClear}>Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientRegistrationForm;
