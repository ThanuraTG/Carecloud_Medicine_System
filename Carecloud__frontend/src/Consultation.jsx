import React, { useEffect, useState } from "react";
import './Consultation.css';
import VerticalMenu from "./Components/verticalmenu";
import Header from "./Components/Header";


const WaitingList = () => {
  const [patients, setPatients] = useState([]);

  // State to hold search query
  const [search, setSearch] = useState('');

  // Fetch all patients on component mount
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/patients'); // URL to your backend
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };
    fetchPatients();
  }, []); // Empty array ensures this runs only once after component mounts

  // Filter patients by search query
  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    
    <div className="findpatient-list">
      <VerticalMenu />
      <Header />
      <div className="box-findpatient">
        <div className="header-findpatient">
          <h2 className="hfp1">PATIENT</h2>
        </div>

        <div className="search-findpatient">
          <label htmlFor="search"> Search:</label>
          <input
            type="text"
            id="search"
            placeholder="Search patient.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <main className='main_boxs'>
            <section className='box_bodys'>
                <table className="patient-table-findpatient">
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPatients.length > 0 ? (
                    filteredPatients.map((patient, index) => (
                        <tr key={patient.id}>
                        <td>{index + 1}</td>
                        <td>{patient.name}</td>
                        <td>{patient.age}</td>
                        <td>{patient.gender}</td>
                        <td>
                          <button type="button" class="btn btn-outline-danger" onClick={() => console.log(`Remove ${patient.id}`)}>Exam</button>
                        </td>
                        </tr>
                    ))
                    ) : (
                    <tr>
                        <td colSpan={7} className="nodata-findpatient">
                        No data available in table
                        </td>
                    </tr>
                    )}
                </tbody>
                </table>
            </section>
                <div className="pagination-findpatient">
                <span>Showing {filteredPatients.length} of {patients.length} entries</span>
                <div className="button-findpatient">
                    <button className="previous-button">Previous</button>
                    <button className="next-button">Next</button>
                </div>
                </div>
        </main>

      </div>
    </div>
  );
};

export default WaitingList;
