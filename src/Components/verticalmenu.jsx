import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import './css/verticalmenu.css'; // Adjust the path as necessary
import { Link } from 'react-router-dom';
import backgroundLogo from '../images/Carecloud.png';
import patient from '../images/patient.png';
import Consultation from '../images/Consultation (1).png';
import Laboratory from '../images/Laboratory.png';
import Account from '../images/Account.png';
import Pharmacy from '../images/Pharmacy2.png';
import Report from '../images/Report.png';
import Set_Up from '../images/Set_up.png';
import Plus from '../images/istockphoto-832142860-612x612__1_-removebg-preview.png';
import AddUserModal from '../patient/AddUserModal';

const VerticalMenu = () => {
  // Track the currently open menu and modal visibility
  const [activeMenu, setActiveMenu] = useState(null);
  const [showAddUserModal, setShowAddUserModal] = useState(false);

  // Handle dropdown toggling
  const toggleDropdown = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu)); // Close if clicked again, else open
  };

  // Handle modal visibility
  const openAddUserModal = () => setShowAddUserModal(true);
  const closeAddUserModal = () => setShowAddUserModal(false);

  return (
    <div className="d-flex flex-column p-3">
      <div className='imglogo'>
        <img src={backgroundLogo} alt="Care cloud Health Record System" className="clogo" />
      </div>
      <ul className="nav nav-pills flex-column mb-auto">
        {/* Patients Menu with Dropdown */}
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => toggleDropdown('patients')}>
            <img src={patient} alt="" className="nav-img1" />
            <div className="topic2">Patients</div>
            <i className="bi bi-chevron-down ms-2"></i> {/* Down arrow */}
          </a>
          {/* Dropdown for Add and Find Patient */}
          {activeMenu === 'patients' && (
            <ul className="nav flex-column ms-3">
              <li className="nav-item">
                <Link to="/AddPatient" className="nav-link">
                  <img src={Plus} alt="" className="nav-img-plus" />
                  <div className="topic">Add Patient</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/FindPatient" className="nav-link">
                  <img src={Plus} alt="" className="nav-img-plus" />
                  <div className="topic">Find Patient</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Appoinments" className="nav-link">
                  <img src={Plus} alt="" className="nav-img-plus" />
                  <div className="topic">Appoinment</div>
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Consultation Menu */}
        <li className="nav-item">
          <Link to="/Consultation" className="nav-link">
            <img src={Consultation} alt="" className="nav-img1" />
            <div className="topic2">Consultation</div>
            <i className="bi bi-chevron-down ms-2"></i> {/* Down arrow */}
          </Link>
        </li>

        {/* Laboratory Menu */}
        <li className="nav-item">
          <Link to="/Laboratory" className="nav-link">
            <img src={Laboratory} alt="" className="nav-img" />
            <div className="topic2">Laboratory</div>
            <i className="bi bi-chevron-down ms-2"></i> {/* Down arrow */}
          </Link>
        </li>

        {/* Account Menu with Dropdown */}
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => toggleDropdown('Account')}>
            <img src={Account} alt="" className="nav-img" />
            <div className="topic2">Account</div>
            <i className="bi bi-chevron-down ms-2"></i> {/* Down arrow */}
          </a>
          {/* Dropdown for Process Payment */}
          {activeMenu === 'Account' && (
            <ul className="nav flex-column ms-3">
              <li className="nav-item">
                <Link to="/ProcessPayment" className="nav-link">
                  <img src={Plus} alt="" className="nav-img-plus" />
                  <div className="topic">Process Payment</div>
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Pharmacy Menu with Dropdown */}
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => toggleDropdown('Pharmacy')}>
            <img src={Pharmacy} alt="" className="nav-img" />
            <div className="topic2">Pharmacy</div>
            <i className="bi bi-chevron-down ms-2"></i> {/* Down arrow */}
          </a>
          {/* Dropdown for Give Drugs, Add Drugs, and Manage Drugs */}
          {activeMenu === 'Pharmacy' && (
            <ul className="nav flex-column ms-3">
              <li className="nav-item">
                <Link to="/GiveDrugs" className="nav-link">
                  <img src={Plus} alt="" className="nav-img-plus" />
                  <div className="topic">Give Drugs</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/AddDrugs" className="nav-link">
                  <img src={Plus} alt="" className="nav-img-plus" />
                  <div className="topic">Add Drugs</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ManageDrugs" className="nav-link">
                  <img src={Plus} alt="" className="nav-img-plus" />
                  <div className="topic">Manage Drugs</div>
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Report Menu with Dropdown */}
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => toggleDropdown('Report')}>
            <img src={Report} alt="" className="nav-img" />
            <div className="topic2">Report</div>
            <i className="bi bi-chevron-down ms-2"></i> {/* Down arrow */}
          </a>
          {/* Dropdown for Report Options */}
          {activeMenu === 'Report' && (
            <ul className="nav flex-column ms-3">
              <li className="nav-item">
                <Link to="/TodaySalesReport" className="nav-link">
                  <img src={Plus} alt="" className="nav-img-plus" />
                  <div className="topic">Today Sales Report</div>
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* SetUp Menu with Dropdown */}
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => toggleDropdown('Set up')}>
            <img src={Set_Up} alt="" className="nav-img" />
            <div className="topic2">Set Up</div>
            <i className={`bi ${activeMenu === 'Set up' ? 'bi-chevron-up' : 'bi-chevron-down'} ms-2`}></i>
          </a>
          {/* Dropdown for Add System Users */}
          {activeMenu === 'Set up' && (
            <ul className="nav flex-column ms-3">
              <li className="nav-item">
                <button className="nav-link" onClick={openAddUserModal}>
                  <img src={Plus} alt="" className="nav-img-plus" />
                  <div className="topic">Add System Users</div>
                </button>
              </li>
              <li className="nav-item">
                <Link to="/ManageSystemUsers" className="nav-link">
                  <img src={Plus} alt="" className="nav-img-plus" />
                  <div className="topic">Manage System Users</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/UsersLogActivity" className="nav-link">
                  <img src={Plus} alt="" className="nav-img-plus" />
                  <div className="topic">Users Log Activity</div>
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>

      {/* Modal for Adding System Users */}
      <AddUserModal show={showAddUserModal} closeModal={closeAddUserModal} />
    </div>
  );
};

export default VerticalMenu;
