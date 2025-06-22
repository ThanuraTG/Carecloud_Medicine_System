import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import react-calendar CSS
import './Dashboard.css'; // Your custom styles
import VerticalMenu from './Components/verticalmenu';
import Header from './Components/Header';

const Dashboard = () => {
  const patients = {
    total: 13,
    women: 1,
    men: 6,
    children: 6
  };

  return (
    <div className="dashboard-container">
    
      
        <VerticalMenu/>
    


      {/* Main content */}
      <div className="main-content">
      <Header/>
        
        <div className="calendar-section">
          <Calendar />
        </div>

        <div className="patient-stats">
          <div className="patients-card">
            <h4>Patients</h4>
            <p>{patients.total}</p>
          </div>
          <div className="women-card">
            <h4>Women</h4>
            <p>{patients.women}</p>
          </div>
          <div className="men-card">
            <h4>Men</h4>
            <p>{patients.men}</p>
          </div>
          <div className="children-card">
            <h4>Children</h4>
            <p>{patients.children}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
