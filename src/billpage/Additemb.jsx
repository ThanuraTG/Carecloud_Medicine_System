import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './css/additembutton.css';

export default function Additemb() {

//database connect part
    const [no,setNo]=useState('')
    const [description,setDescription]=useState('')
    const [total,setTotal]=useState('')
    const [billdetails,setBilldetails]=useState('')
    const [data,setData]=useState([])
    const [amo,setAmo] =useState(0)
    const [balance,setBalance]=useState(0)
    const [advance,setAdvance]=useState()
    const [updatebox,setUpdatebox]=useState(false)
    const [selectitem,setSelectitem]=useState(null)
    const Navigate = useNavigate();

//save item button method
    function savedbdata(e){
        e.preventDefault()
        const billdetail={description,total}
        console.log(billdetail)
        fetch("http://localhost:8080/api/v1/bill/save",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(billdetail)
        })
        .then(()=>{
            alert("new bill added successfully.")
        })
    }
    
//get table method
    const fetchtable =()=>{
        fetch("http://localhost:8080/api/v1/bill/get")
        .then(res => res.json())
        .then((result) => {
            setData(result);
        });
    }
    useEffect(() => {
        fetchtable();
    })
    useEffect(() => {
        const totalSum = data.reduce((sum,item)=>sum + parseFloat(item.total || 0), 0);
        setAmo(totalSum);
    },[data])
    
//delete save data method
    const hadeldelete = (no) =>{
        fetch("http://localhost:8080/api/v1/bill/delete/"+no,{
            method:"DELETE",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(hadeldelete)
        })
        .then(res=>{
            alert("Bill deleted successfully.")
        })
        .catch(er=>console.log(er));
    }
//update save data method
    const openUpdateDialog =(item)=>{
        setSelectitem(item);
        setUpdatebox(true);
    };

    const hadelUpdate = ()=>{
        if (selectitem){
            fetch("http://localhost:8080/api/v1/bill/update",{
                method :"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(selectitem),
            })
            .then(()=>{
                alert("Update Successfully.");
                setUpdatebox(false);
                fetchtable();
            })
            .catch((err)=>console.log(err));
        }
    }
//alance method
    useEffect(()=>{
        const calcu = amo - (parseFloat(advance) || 0);
        setBalance(calcu);
    },[amo,advance])
//dropdown menu part
    const options =[
        {label:"Admission Charges", value:1},
        {label:"General Nursing Care", value:2},
        {label:"Doctor and Room Charges", value:3},
        {label:"Pharmacy Charges", value:4},
        {label:"X Ray", value:5},
        {label:"Laboratory", value:6},
        {label:"ECG", value:7},
        {label:"Other Charges", value:8}
    ]
    function hadelclick(event){
        setDescription(event.target.value)
    }

// interface body part
    return (
        <div className='body'>
            <main className='main_box'>
                <section className='box_header'>
                    <div className='fo1'>
                        <form >
                            <div className="mb-3">
                                <label for="input_1" class="form-label">Description : </label>
                                <div class="btn-group">
                                    <select className='form-select' onChange={hadelclick}>
                                        {options.map(option =>(
                                            <option >{option.label}</option>
                                        ))}
                                    </select>
                                    <input type='text' value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Description Charges'/>
                                </div>
                            </div>
                            <div className="input-amount">
                                <label for="input_2" class="form-label">Amount : </label>
                                <span >Rs </span>
                                <input  type="number" value={total} onChange={(e)=>setTotal(e.target.value)} placeholder="0,000" />
                                <span >.00</span>
                                <div className='item-button'>
                                    <button type="button" class="btn btn-outline-info" onClick={savedbdata}>Add Item</button>
                                    <button type="button" class="btn btn-outline-success" onClick={()=> Navigate("/Printinvoce")}>Generate Invoice</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='fo2'>
                        <form>
                            <div className="tota">
                                <label>Total Amount :</label>
                                    <span >Rs</span>
                                    <input value={amo} placeholder='0,000'/>
                                    <span >.00</span>
                            </div>
                        </form>
                    </div>
                </section>
                <section className='box_body'>
                    <table>
                        <thead>
                            <tr>
                                <th className='th1'>No</th>
                                <th className='th2'>Description</th>
                                <th className='th3'>Total</th>
                                <th className='th4'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(billdetail=>(
                                <tr>
                                    <td className='div1'>{billdetail.no}</td>
                                    <td className='div2'>{billdetail.description}</td>
                                    <td className='div3'>Rs {billdetail.total}.00</td>
                                    <td className='div4'>
                                    <button type="button" class="btn btn-outline-danger" onClick={() => hadeldelete(billdetail.no)}>Remove</button>
                                    <button type="button" class="btn btn-outline-warning" onClick={()=>openUpdateDialog(billdetail)}>Update</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        
            {selectitem && (
                <Dialog open={updatebox} onClose={() => setUpdatebox(false)}>
                    <DialogTitle>
                        <div className='title'>
                            <h3>Update Data</h3>
                            <button type="button" class="btn btn-outline-danger" onClick={()=>setUpdatebox(false)}>Close</button>
                        </div>
                    </DialogTitle>
                    <DialogContent>
                        <div className='body2'>
                            <div className='la1'>
                                <label>No :</label>
                                <input type='number' value={selectitem.no} onChange={(e) => setSelectitem({ ...selectitem, no: e.target.value})} disabled/>
                            </div>
                            <div className='la2'>
                                <label>Description :</label>
                                <input type='text' value={selectitem.description} onChange={(e) => setSelectitem({ ...selectitem, description: e.target.value})} />
                            </div>
                            <div className='la3'>
                                <label>Amount :</label>
                                <input type='number' value={selectitem.total} onChange={(e) => setSelectitem({ ...selectitem, total: e.target.value})} />
                            </div><br/>
                            <button type="button" class="btn btn-outline-warning" onClick={hadelUpdate}>Update Item</button>
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    )
}
