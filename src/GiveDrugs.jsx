import React from 'react'
import "./GiveDrugs.css";
import VerticalMenu from './Components/verticalmenu';
import Header from './Components/Header';


export default function GiveDrugs() {
  return (
    <div className='give-list'>
        <VerticalMenu/>
        <Header/>
        <div className='box-givedrgus'>
          <div className='header-givedrugs'>
            <h2>LIST OF PATIENTS TO BE GIVEN DRUGS</h2>
          </div>

          <div className='search-givedrugs'>
            <label htmlFor='search'>Search:</label>
            <input type = "text" id = "search" placeholder='Search Patient..' />
          </div>

          <table className='givedrugs-table'>
            <thead>
              <tr>
                <th> No  </th>
                <th> Name </th>
                <th> Age </th>
                <th> Gender </th>
                <th> Location </th>
                <th> Consultation </th>
                <th> Laboratory </th>
                <th> Receipt </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={8} className ="nodata-givedrugs">
                  No data available in table
                </td>
              </tr>
            </tbody>
          </table>

          <div className='pagination-givedrugs'>
            <span>Showing 0 to 0 of entire </span>
            
            <div className='button-givedrugs'>
              <button className='previous-button-givedrugs'>
                Previous
                </button>
                 
              <button className='next-button-givedrugs'>
                Next
              </button>

            </div>
          </div>
        </div>
    
    </div>
  )
}
