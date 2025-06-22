// import React, { useEffect, useState, useContext } from 'react';
// import { Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import Carecloud from '../image/Carecloud.png';
// import '../css/printinvoce.css';



// export default function Printinvoce() {

// //  All veriable

//     const [data,setData]=useState([]);
//     const [groups,setGroups]=useState([])
//     const [invoiceId, setInvoiceId] = useState("");
//     const Gender =[
//         {label:"Male", value:1},
//         {label:"Female", value:2},
//         {label:"Other", value:3},
//     ]

// //gender search part
//     function click(e){
//         Gender(e.target.value);
//     }
// //bill print part
//     const hadelprint=()=>{
//         window.print()
//     }
// //get an table data
//     useEffect(()=>{
//         fetch("http://localhost:8080/api/v1/bill/get")
//         .then(res=>res.json())
//         .then((result)=>{
//             setData(result);
//         })
//     })

// //get an  invoice data
//     const fetchInvoiceDetails = (id) => {
//     fetch(`http://localhost:8080/api/v1/bill/getdetail/${id}`)
//         .then((res) => {
//             if (!res.ok) {
//                 throw new Error(`Failed to fetch invoice details for ID: ${id}`);
//             }
//             return res.json();
//         })
//         .then((result) => {
//             setGroups(Array.isArray(result) ? result : [result]); // Ensure `groups` is always an array
//         })
//         .catch((error) => {
//             console.error("Error fetching invoice details:", error);
//             setGroups([]); // Clear groups on error
//         });
//     };

// // Fetch invoice details when `invoiceId` changes
//     useEffect(() => {
//         if (invoiceId.trim()) {
//             fetchInvoiceDetails(invoiceId);
//         }
//     }, [invoiceId]);

// // navigate part
//     const Navigate = useNavigate();
// //code body part
//     return (
//         <div>
//             <div>
//                 <div className='print'>
//                     <Button type="button" class="btn btn-primary" onClick={hadelprint}>Print</Button>
//                     <button type="button" class="btn btn-secondary" onClick={()=>Navigate(-1)}>Back</button>
//                 </div>
//                 <form className="invoce ">
//                     <section className='billhead'>
//                         <div className='logo'>
//                             <img src={Carecloud} />
//                         </div>
//                         <div className='hospitalde'>
//                             <p>#123, Hospital Junction<br/>
//                                 Colombo Road, Koswaththa.<br/>
//                                 012 345 6789<br/>
//                                 info@carecloud.Com<br/>
//                                 www.carecloud.com
//                             </p>
//                         </div>
//                     </section>
//                     <section className='patientdetails'>
//                         <form>
//                             <h4>INVOICE</h4>
//                             <div className="part1">
//                                 <label className="lab1">Appo No :</label>
//                                 <input className="input1" type='number' />
//                                 <label className="lab2">Room No :</label>
//                                 <input className="input2" type='number' /><br/>
//                                 <label className="lab3">Patient No :</label>
//                                 <input className="input3" type='number' />
//                                 <label className="lab4">Contact No :</label>
//                                 <input className="input4"  type='number' /><br/>
//                                 <label className="lab5">Patient NIC:</label>
//                                 <input className="input5"  type='number' />
//                                 <label className="lab6">Gender:</label>
//                                 <select className='f' onChange={click}>
//                                         {Gender.map(option =>(
//                                             <option >{option.label}</option>
//                                         ))}
//                                 </select><br/>
//                                 <label className="lab7">Patient :</label>
//                                 <input className="input6" type='text' /><br/>
//                                 <label className="lab8">Address :</label>
//                                 <input className="input7" type='text' />
//                             </div>
//                             <div className="part2">
//                                 <label className="lab9">Invoice No :</label>
//                                 <input className="input1"
//                                     type="text"
//                                     value={invoiceId}
//                                     onChange={(e) => setInvoiceId(e.target.value)}
//                                     placeholder="Enter Invoice ID"/><br/>
//                             </div>
//                             {groups.map((invoicedata , index)=>(
//                             <div className="part2" key={index}>
//                                 <label className="lab10">Invoice Date :</label>
//                                 <input
//                                     className="input9"
//                                     type="date"
//                                     value={invoicedata.date || ""}
//                                     readOnly/><br/>
//                                 <label className="lab11">Doctor No :</label>
//                                 <input /><br/>
//                                 <label className="lab12">Doctor :</label>
//                                 <input className="input11" type='text' />
//                                 <label className="lab13">Room No :</label>
//                                 <input
//                                     className="input12"
//                                     type="text"
//                                     value={invoicedata.roomNo || ""}
//                                     readOnly/>
//                             </div>
//                             ))
//                             }
//                         </form>
//                     </section>
//                     <section className='invoicetabel'>
//                         <table className='ta1'>
//                             <thead className='the1'>
//                                 <tr className='tr1'>
//                                     <th className='da1'>No</th>
//                                     <th className='da2'>Description</th>
//                                     <th className='da3'>Amount</th>
//                                 </tr>
//                             </thead>
//                             <tbody className='tbo1'>
//                             {data.map(billdetail=>(
//                                 <tr>
//                                     <td className='di1'>{billdetail.no}</td>
//                                     <td className='di2'>{billdetail.description}</td>
//                                     <td className='di3'>Rs {billdetail.total}.00</td>
//                                     <td className='di4'>
//                                     </td>
//                                 </tr>
//                             ))}
//                             </tbody>
//                         </table>
//                     </section>
//                     <section className='invoicefinal'>
//                         <label className="flab1">Total Amount :</label>
//                         <span >Rs</span>
//                         <input className="finput1" type='number'  readOnly/>
//                         <span >.00</span><br/>
//                     </section>
//                 </form>
//             </div>
//         </div>
//     )
// }





import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Carecloud from '../image/Carecloud.png';
import './css/printinvoce.css';

export default function Printinvoce() {
    const [data, setData] = useState([]);
    const [groups, setGroups] = useState([]);
    const [invoiceId, setInvoiceId] = useState("");
    const [patientId, setPatientId] = useState("");
    const [patient, setPatient] = useState({});
    const Navigate = useNavigate();
    const Gender = [
        { label: "Male", value: 1 },
        { label: "Female", value: 2 },
        { label: "Other", value: 3 },
    ];

    function click(e) {
        Gender(e.target.value);
    }

    const handlePrint = () => {
        window.print();
    };

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/bill/get")
            .then(res => res.json())
            .then((result) => {
                setData(result);
            });
    }, []);

    const fetchInvoiceDetails = (id) => {
        fetch(`http://localhost:8080/api/v1/bill/getdetail/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Failed to fetch invoice details for ID: ${id}`);
                }
                return res.json();
            })
            .then((result) => {
                setGroups(Array.isArray(result) ? result : [result]);
            })
            .catch((error) => {
                console.error("Error fetching invoice details:", error);
                setGroups([]);
            });
    };

    const fetchPatientDetails = (id) => {
        fetch(`http://localhost:8080/api/patient/${id}`)
            .then(res => res.json())
            .then((result) => {
                setPatient(result);
            })
            .catch((error) => {
                console.error("Error fetching patient details:", error);
                setPatient({});
            });
    };

    useEffect(() => {
        if (invoiceId.trim()) {
            fetchInvoiceDetails(invoiceId);
        }
    }, [invoiceId]);

    useEffect(() => {
        if (patientId.trim()) {
            fetchPatientDetails(patientId);
        }
    }, [patientId]);


    return (
        <div>
            <div>
                <div className='print'>
                    <Button type="button" className="btn btn-primary" onClick={handlePrint}>Print</Button>
                    <button type="button" className="btn btn-secondary" onClick={() => Navigate(-1)}>Back</button>
                </div>
                <form className="invoce">
                    <section className='billhead'>
                        <div className='logo'>
                            <img src={Carecloud} alt="Carecloud Logo" />
                        </div>
                        <div className='hospitalde'>
                            <p>#123, Hospital Junction<br />
                                Colombo Road, Koswaththa.<br />
                                012 345 6789<br />
                                info@carecloud.Com<br />
                                www.carecloud.com
                            </p>
                        </div>
                    </section>
                    <section className='patientdetails'>
                        <form>
                            <h4>INVOICE</h4>
                            <div className="part1">
                                <label className="lab1">Appo No :</label>
                                <input className="input1" type='number' value={patient.appoNo || ''} readOnly />
                                <label className="lab2">Room No :</label>
                                <input className="input2" type='number' value={patient.roomNo || ''} readOnly /><br />
                                <label className="lab3">Patient No :</label>
                                <input className="input3" type='number' value={patientId} onChange={(e) => setPatientId(e.target.value)} placeholder="Enter Patient ID" /><br />
                                <label className="lab4">Contact No :</label>
                                <input className="input4" type='number' value={patient.contactNumber || ''} readOnly /><br />
                                <label className="lab5">Patient NIC:</label>
                                <input className="input5" type='number' value={patient.nic || ''} readOnly />
                                <label className="lab6">Gender:</label>
                                <select className='f' onChange={click} value={patient.gender || ''}>
                                    {Gender.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select><br />
                                <label className="lab7">Patient :</label>
                                <input className="input6" type='text' value={patient.name || ''} readOnly /><br />
                                <label className="lab8">Address :</label>
                                <input className="input7" type='text' value={patient.address || ''} readOnly />
                            </div>
                            <div className="part2">
                                <label className="lab9">Invoice No :</label>
                                <input className="input1"
                                    type="text"
                                    value={invoiceId}
                                    onChange={(e) => setInvoiceId(e.target.value)}
                                    placeholder="Enter Invoice ID" /><br />
                            </div>
                            {groups.map((invoicedata, index) => (
                                <div className="part2" key={index}>
                                    <label className="lab10">Invoice Date :</label>
                                    <input
                                        className="input9"
                                        type="date"
                                        value={invoicedata.date || ""}
                                        readOnly /><br />
                                    <label className="lab11">Doctor No :</label>
                                    <input /><br />
                                    <label className="lab12">Doctor :</label>
                                    <input className="input11" type='text' />
                                    <label className="lab13">Room No :</label>
                                    <input
                                        className="input12"
                                        type="text"
                                        value={invoicedata.roomNo || ""}
                                        readOnly />
                                </div>
                            ))
                            }
                        </form>
                    </section>
                    <section className='invoicetabel'>
                        <table className='ta1'>
                            <thead className='the1'>
                                <tr className='tr1'>
                                    <th className='da1'>No</th>
                                    <th className='da2'>Description</th>
                                    <th className='da3'>Amount</th>
                                </tr>
                            </thead>
                            <tbody className='tbo1'>
                                {data.map(billdetail => (
                                    <tr key={billdetail.no}>
                                        <td className='di1'>{billdetail.no}</td>
                                        <td className='di2'>{billdetail.description}</td>
                                        <td className='di3'>Rs {billdetail.total}.00</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                    <section className='invoicefinal'>
                        <label className="flab1">Total Amount :</label>
                        <span>Rs</span>
                        <input className="finput1" type='number' readOnly />
                        <span>.00</span><br />
                    </section>
                </form>
            </div>
        </div>
    );
}
