import React from 'react';
import VerticalMenu from './Components/verticalmenu';
import './Laboratory.css';
import Header from './Components/Header';

const App = () => {

  
  return (
   <div>
    <Header/>
    <VerticalMenu/>

   <div className="patient-table">
    <div className="table-header">
      <h3 className='Header-3'>PATIENTS SENT TO LAB</h3>
    </div>
    <div className="search-box">
      <label htmlFor='search'>Search:</label>
      <input type="text" id='search' placeholder="Search records..." />
    </div>
    <table className="no-border-table">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Location</th>
          <th>Tests</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mr James Kapondera</td>
          <td>8</td>
          <td>Male</td>
          <td>Bwandilo</td>
          <td><button className="edit-btn">Edit</button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Mrs Chimango Banda</td>
          <td>6</td>
          <td>Female</td>
          <td>Area 23</td>
          <td><button className="edit-btn">Edit</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
  )
};



export default App;
