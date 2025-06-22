import React from 'react';
import './css/Header.css';
import Iconimge from '../images/image.png';


const Header = () => {
  return (
    <div className="header-container">
      
      {/* Left side - Hamburger menu */}
      <div className="menu-icon">
        <span className="menu-bars">&#9776;</span>
      </div>

      {/* Right side - User profile */}
      <div className="user-profile">
        <div className="user-info">
            <div >
            <img src={Iconimge}alt="Profile" className="profile-pic" />
            </div>
          
          <div className='w' >
            <p  >Thanuka Manuranga</p>
            <p >System Developer</p>
          </div>
        </div>
        <div className="status">
          <span className="status-indicator"></span>
          <span className="dropdown-icon">&#x25BC;</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
