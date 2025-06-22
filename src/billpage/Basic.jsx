import React from 'react';
import Additemb from '../billpage/Additemb';
import Patient from '../billpage/Patient';
import './css/basic.css';


export default function Basic() {

    return (
        
        <div className='first'>
            <div className="firstname">
                <h3>Invoice</h3>
            </div>
            <div className="textbox">
                <Patient />
            </div>
            <div className="additem">
                <Additemb />
            </div>
        </div>
    )
}
