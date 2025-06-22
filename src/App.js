import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LogingPage'; // Ensure the path is correct
import Dashboard from './Dashboard';
import verticalmenu from "../src/Components/verticalmenu"; // Import your VerticalMenu here

import PatientRegistrationForm from './patient/PatientRegistrationForm';
import Consultation from './Consultation';
import Laboratory from './Laboratory';
import FindPatient from './FindPatient';
import ProcessPayment from './ProcessPayment';  
import GiveDrugs from './GiveDrugs';
import AddDrugs from './AddDrugs';
import ManageDrugs from './ManageDrugs';
import Todaysalesreport from './Todaysalesreport';
import ManageSystemUser from './ManageSystemUser';
import UserLogActivity from './patient/UserLogActivity';
import Printinvoce from './billpage/Printinvoce';
import Appointments from './Appoinments';
function App() {
  const [userRole, setUserRole] = useState(null); // Initially, set it to null or a default role.

  // Simulating user login with a role (for now it's hardcoded, but you can change it after login)
  const handleLogin = (role) => {
    setUserRole(role); // This sets the role after login (doctor, nurse, or developer)
  };
  const token = localStorage.getItem('token');

  return (
    <Router>
      <div className="App">
        {/* Render VerticalMenu only when userRole is set */}
        {userRole && <verticalmenu role={userRole} />}

        <Routes>
          {/* Login Page */}
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />

          {/* Dashboard Route (authenticated user can go here) */}
          <Route path="/Signin" element={<Dashboard />} />

          {/* Role-Based Routes (pages for each role) */}
          <Route path="/Addpatient" element={<PatientRegistrationForm />} />
          <Route path="/FindPatient" element={<FindPatient />} />
          <Route path="/Consultation" element={<Consultation />} />
          <Route path="/Laboratory" element={<Laboratory />} />
          <Route path="/ProcessPayment" element={<ProcessPayment />} />
          <Route path="/GiveDrugs" element={<GiveDrugs />} />
          <Route path="/AddDrugs" element={<AddDrugs />} />
          <Route path="/ManageDrugs" element={<ManageDrugs />} />
          <Route path="/TodaySalesReport" element={<Todaysalesreport />} />
          <Route path="/ManageSystemUsers" element={<ManageSystemUser />} />
          <Route path="/UsersLogActivity" element={<UserLogActivity />} />
          <Route path="/Printinvoce" element={<Printinvoce />} />
          <Route path="/Appoinments" element={<Appointments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
