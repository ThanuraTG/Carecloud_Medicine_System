import React from "react";
import './Consultation.css';
import VerticalMenu from "./Components/verticalmenu";
import Header from "./Components/Header";


const WaitingList = () => {
  return (
    <div className="waiting-list-container">
      <Header/>
      <VerticalMenu/>
      <div className="box">
      <div className="header">
        <h2 className="hd1">CONSULTATION ROOM WAITING LIST PATIENTS</h2>
      </div>
      <div className="info-message">
        <i className="fa fa-envelope"></i>
        This screen displays patients' records; use the search box to spool more records.
      </div>
      
      <div className="button-group">

      </div>
      <div className="search-container">
        <label htmlFor="search">Search:</label>
        <input type="text" id="search" placeholder="Search records..." />
      </div>
      <table className="patients-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>History</th>
            <th>Exam</th>
            <th>Diagnose</th>
            <th>Prescribe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="8" className="no-data">
              No data available in table
            </td>
          </tr>
        </tbody>
      </table>
      <div className="pagination">
        <span>Showing 0 to 0 of 0 entries</span>

        <div className="nav-buttons">
          <button className="previous-consaltation">Previous</button>
          <button className="next-consaltation">Next</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default WaitingList;
