import React, { useState } from 'react';
import './css//patient.css';

export default function Patient({ token }) { // Receive the token as a prop
    const [invoiceNo, setInvoiceNo] = useState('');
    const [date, setDate] = useState('');
    const [roomNo, setRoomNo] = useState('');

    function savedb(e) {
        e.preventDefault();
        const billdetail = { invoiceNo, date, roomNo };
        console.log(billdetail);

        fetch('http://localhost:8080/api/v1/billdetail/savedetail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Use the token prop here
            },
            body: JSON.stringify(billdetail),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                return response.json();
            })
            .then((data) => {
                alert("New bill added successfully: " + JSON.stringify(data));
            })
            .catch((error) => {
                console.error("Failed to add the bill:", error);
            });
    }

    return (
        <div className="patient">
            <form>
                <div className="details">
                    <label>Appt No:</label>
                    <input type="number" /><br />
                    <label>Patient No:</label>
                    <input type="number" />
                    <label className="namelabel">Patient Name:</label>
                    <input className="input1" type="text" /><br />
                    <label>Doctor No:</label>
                    <input type="number" />
                    <label className="doctornamelabel">Doctor Name:</label>
                    <input className="input2" type="text" /><br />
                </div>
                <div className="billdetails">
                    <label>Invoice NO:</label>
                    <input
                        type="number"
                        value={invoiceNo}
                        onChange={(e) => setInvoiceNo(e.target.value)}
                    /><br />
                    <label>Date of Bill:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    /><br />
                    <label>Room No:</label>
                    <input
                        type="text"
                        value={roomNo}
                        onChange={(e) => setRoomNo(e.target.value)}
                    /><br />
                </div>
                <button type="button" class="btn btn-outline-info" onClick={savedb}>Save</button>
            </form>
        </div>
    );
}
