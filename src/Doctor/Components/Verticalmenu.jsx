import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import './verticalmenu.css'; // Adjust the path as necessary
import { Link } from 'react-router-dom';
import backgroundLogo from '../images/Carecloud.png';
import Consultation from '../images/Consultation (1).png';

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
      <div>
        <img src={backgroundLogo} alt="Care cloud Health Record System" className="clogo" />
      </div>
      

        {/* Consultation Menu */}
        <li className="nav-item">
          <Link to="/Consultation" className="nav-link">
            <img src={Consultation} alt="" className="nav-img1" />
            <div className="topic2">Consultation</div>
            <i className="bi bi-chevron-down ms-2"></i> {/* Down arrow */}
          </Link>
        </li>
    
    </div>
  );
};

export default VerticalMenu;
