import React from 'react'
import "./ManageDrugs.css"
import VerticalMenu from './Components/verticalmenu'
import Header from './Components/Header'

export default function ManageDrugs() {
  return (
    <div className='Manage-drugs-list'>
      <VerticalMenu/>
      <Header/>

      <div className='Manage-drugs-box'>

        <div className='Manage-drugs-header'>
          <h3 className='Manage-drugs-header'>DRUGS AVAILABLE IN THE SYSTEM</h3>
        </div>

        <div className='search-box'>
          <label htmlFor='search'>Search:</label>
          <input type = "text" id ='search' placeholder='Search Drgus..'/>
        </div>

        <table className='Manage-drugs-table'>
          <thead>
            <th>No</th>
            <th>Name</th>
            <th>Manufactured date</th>
            <th>Expired Date</th>
            <th>Available</th>
            <th>Retail Price </th>
            <th> Edit </th>
          </thead>
          <tbody>
            <tr>
              <td colSpan={8}  className='nodata-Manage-drugs'>
              <span>No data available in the table</span>
              </td>
            </tr>
          </tbody>
        </table>

        <div className='pagination-Manage-drugs'>
          <span>Showing 0 to 0 of entire</span>

          <div className='button-Manage-drugs'>
            <button className='previous-button-Manage-drugs'>Previous</button>
            <button className='next-button-Manage-drugs'>Next</button>
          </div>
        </div>

      </div>




    </div>
  )
}
